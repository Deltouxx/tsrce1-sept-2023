export const querySelector = (selector: string): Element => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  return elt;
};

export const setAttributeNbr = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};
