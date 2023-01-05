/**
 * Creates a debounced function that delays invoking func until after
 * wait milliseconds have elapsed since the last time the debounced
 * function was invoked.
 *
 * @param {Function} func invoking function
 * @param {number} [wait=100] time to wait
 * @returns {Function} debounced function
 */
export const debounce = <T extends Function>(func: T, wait = 100) => {
  let timeout = 0;

  return () => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func.apply(this);
    }, wait);
  };
};
