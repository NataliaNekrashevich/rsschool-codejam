function make(...data) {
  const arr = [];
  arr.push(...data);
  return function closure(...args) {
    if (typeof args[0] === 'function') {
      const logic = args[0];
      return arr.reduce((acc, item) => logic(acc, item));
    }
    arr.push(...args);
    return closure;
  };
}