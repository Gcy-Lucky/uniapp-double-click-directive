export const doubleClick = {
  mounted(el, binding) {
    let lastClickTime = 0;
    let clickTimer = null;

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClickTime < 300) {
        clearTimeout(clickTimer);
        binding.value(); // execute double-click callback
      } else {
        clickTimer = setTimeout(() => {}, 300);
      }
      lastClickTime = now;
    };

    el._doubleClickHandler = handleClick;
    el.addEventListener('click', handleClick);
  },

  unmounted(el) {
    if (el._doubleClickHandler) {
      el.removeEventListener('click', el._doubleClickHandler);
    }
  }
};
