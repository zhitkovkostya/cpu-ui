/**
 * Updates URL hash with the visible section id
 */
export const updateHash = () => {
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
