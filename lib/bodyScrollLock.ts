let locks = 0;
let originalOverflow = '';

/** Keep the body locked until every drawer has released its lock. */
export function acquireBodyScrollLock(): () => void {
  if (locks === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  locks += 1;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks -= 1;
    if (locks === 0) document.body.style.overflow = originalOverflow;
  };
}
