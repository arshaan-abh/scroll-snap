function supportsPassive() {
  let supports = false;

  const empty = () => null;

  try {
    const options = {
      get passive() {
        supports = true;
        return false;
      },
    };

    window.addEventListener("click", empty, options);
    window.removeEventListener("click", empty);
  } catch (e) {
    supports = false;
  }

  return supports;
}

const defaultListenerOptions = supportsPassive() ? { passive: true } : false;

export default defaultListenerOptions;
