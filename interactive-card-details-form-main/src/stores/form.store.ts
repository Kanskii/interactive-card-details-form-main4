import { writable } from "svelte/store";
import { stringHelpers, validators } from "../helpers";
import type { FormErrors, FormFieldConfig, FormValues } from "../types";

// --- Create form fields w/ validators: START ---- //
const { isExactLength, isNotEmptyString, isNumber, isValidMonth, isValidYear } = validators;
const FORM_FIELDS: FormFieldConfig[] = [
  { name: "card_name", validators: [isNotEmptyString] },
  { name: "card_number", validators: [isNotEmptyString, isNumber, isExactLength(16)] },
  { name: "exp_month", validators: [isNotEmptyString, isValidMonth] },
  { name: "exp_year", validators: [isNotEmptyString, isValidYear] },
  { name: "card_cvc", validators: [isNotEmptyString, isNumber, isExactLength(3)] },
];
// --- Create form fields w/ validators: END ---- //

// ---- Generate initial stores (values & errors) from FORM_FIELDS: START ---- //
const generateFormStores = () => {
  let formValues: Partial<FormValues> = {};
  let formErrors: Partial<FormErrors> = { isValid: false };
  for (let i = 0; i < FORM_FIELDS.length; i++) {
    const field = FORM_FIELDS[i];
    formValues[field.name] = "";
    formErrors[field.name] = {
      error: "",
      touched: false,
    };
  }
  return {
    initValues: formValues as FormValues,
    initErrors: formErrors as FormErrors,
  };
};
// ---- Generate initial stores (values & errors) from FORM_FIELDS: END ---- //

// ---- Create stores ---- //
let initialized = false;
const { initErrors, initValues } = generateFormStores();
export const formValues = writable<FormValues>(initValues);
export const formErrors = writable<FormErrors>(initErrors);

// ---- Reset stores --- //
export const resetForm = () => {
  initialized = false;
  const { initErrors, initValues } = generateFormStores();
  formErrors.set(initErrors);
  formValues.set(initValues);
};

// ---- Validate fields ---- //
formValues.subscribe((values) => {
  if (!initialized) {
    // Check if the form values are different from initial values
    let formTouched = false;
    for (let i = 0; i < Object.values(initValues).length; i++) {
      const value = Object.values(initValues)[i];
      if (value.length === 0) continue;
      formTouched = true;
      break;
    }
    initialized = formTouched;
  } else {
    // Update formErrors when form is initialized
    formErrors.update((prevErrors) => {
      let newErrors: FormErrors = { ...prevErrors };
      let nbOfErrors: number = 0;
      for (let i = 0; i < FORM_FIELDS.length; i++) {
        const { name, validators } = FORM_FIELDS[i];
        // Remove formatting from card_number for tests
        const fieldValue = name === "card_number" ? stringHelpers.removeAllWhiteSpace(values[name]) : values[name];
        // Update touched
        if (!newErrors[name].touched && !!fieldValue) {
          newErrors[name].touched = true;
        }
        // Check errors for fieldValue
        if (newErrors[name].touched) {
          for (let j = 0; j < validators.length; j++) {
            const validator = validators[j];
            newErrors[name].error = validator([fieldValue]);
            if (!newErrors[name].error) continue;
            nbOfErrors++;
            break;
          }
        } else {
          nbOfErrors++;
        }
      }
      newErrors.isValid = nbOfErrors === 0 ? true : false;
      return newErrors;
    });
  }
});
