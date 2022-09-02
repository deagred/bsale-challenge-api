
export function sortObjectArray(arr: any[], field: string, order: string) {
  return arr.sort((a, b) => {
    if (a[field] > b[field]) {
      return order === 'asc' ? 1 : -1;
    }
    if (b[field] > a[field]) {
      return order === 'asc' ? -1 : 1;
    }
    return 0;
  });
};
