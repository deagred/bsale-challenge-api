
export function filterObjectArray(arr: any[], field: string, value: string) {
  return arr.filter(e => {
    if (typeof e[field] === 'object') {
      return e[field].name.toLowerCase().includes(value);
    }
    if (typeof e[field] === 'string') {
      return e[field].toLowerCase().includes(value);
    }
    if (typeof e[field] === 'number') {
      // allow comparing strings to numbers
      return e[field] == value;
    }
  });
}
