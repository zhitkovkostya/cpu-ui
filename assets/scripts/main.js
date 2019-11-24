window.addEventListener('scroll', onScroll);

function onScroll() {
  var sectionElements = document.querySelectorAll('.section'),
    hash;

  sectionElements.forEach(function (sectionElement) {
    hash = '#' + sectionElement.id;

    if (sectionElement.getBoundingClientRect().top > -50 && sectionElement.getBoundingClientRect().top < 50) {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    }
  });
}