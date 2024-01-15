const addWhiteSpaceEveryXChar = (value: string, x: number) => {
  const regExp = new RegExp(`.{1,${x}}`, "g");
  // let matchArray = value.match(/.{1,4}/g);
  let matchArray = value.match(regExp);
  let newValue = "";
  if (!matchArray) return newValue;
  for (let i = 0; i < matchArray.length; i++) {
    const match = matchArray[i];
    newValue += i < matchArray.length - 1 ? `${match} ` : match;
  }
  return newValue;
};

const removeAllWhiteSpace = (value: string) => {
  let newValue = value.replace(/\s/g, "");
  return newValue;
};

export const stringHelpers = {
  addWhiteSpaceEveryXChar,
  removeAllWhiteSpace,
};
