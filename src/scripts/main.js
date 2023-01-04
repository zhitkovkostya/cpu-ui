const debounce = (func, wait = 100) => {
  let timeout;

  return () => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func.apply(this);
    }, wait);
  };
};

const onScroll = () => {
  const sectionElements = document.querySelectorAll(".section");

  sectionElements.forEach(function (sectionElement, index) {
    const sectionId = index > 0 ? sectionElement.id : "";
    const sectionRect = sectionElement.getBoundingClientRect();
    const hash =
      sectionId.length > 0
        ? "#" + sectionId
        : window.location.pathname + window.location.search;

    if (Math.abs(sectionRect.top) < sectionRect.height / 3) {
      window.history.replaceState(null, null, hash);
    }
  });
};

window.addEventListener("scroll", debounce(onScroll));
