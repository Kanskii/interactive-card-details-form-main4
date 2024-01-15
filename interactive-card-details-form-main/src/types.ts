export type FormFieldName = "card_name" | "card_number" | "exp_month" | "exp_year" | "card_cvc";

export interface FormFieldConfig {
  name: FormFieldName;
  validators: ((values: string[]) => string)[];
}

export interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

export type FormValues = Record<FormFieldName, FormField["value"]>;
export type FormErrors = Record<FormFieldName, Pick<FormField, "error" | "touched">> & { isValid: boolean };
