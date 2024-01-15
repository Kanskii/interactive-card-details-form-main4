const isNotEmptyString = (values: string[]) => {
  let error = "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value.length !== 0 && value.trim().length !== 0) continue;
    error = "Can't be blank";
    break;
  }
  return error;
};

const numberRegExp = /^-?\d+$/;
const isNumber = (values: string[]) => {
  let error = "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (numberRegExp.test(value)) continue;
    error = "Wrong format, number only";
    break;
  }
  return error;
};

const isExactLength = (length: number) => (values: string[]) => {
  let error = "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value.length === length) continue;
    error = value.length < length ? `Too short, expecting ${length}` : `Too long, expecting ${length}`;
    break;
  }
  return error;
};

const monthRegExp = /0[1-9]|1[0-2]/;
const isValidMonth = (values: string[]) => {
  let error = "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (monthRegExp.test(value)) continue;
    error = "Not a valid month";
    break;
  }
  return error;
};

const yearRegExp = /[0-9][0-9]/;
const isValidYear = (values: string[]) => {
  let error = "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (yearRegExp.test(value)) continue;
    error = "Not a valid year";
    break;
  }
  return error;
};

const isNotExpired = (monthStr: string, yearStr: string, prefix?: string) => {
  let error = "";
  const currYearLastTwoDigits = parseInt(new Date().getFullYear().toString().substring(2));
  const currMonth = new Date().getMonth() + 1; // GetMonth is indexed from 0 to 11. WTF!
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  if (year < currYearLastTwoDigits || (year === currYearLastTwoDigits && month < currMonth)) {
    error = prefix ? `${prefix} expired` : "Expired";
  }
  return error;
};

export const validators = {
  isExactLength,
  isNotEmptyString,
  isNotExpired,
  isNumber,
  isValidMonth,
  isValidYear,
};
