window.addEventListener('scroll', debounce(onScroll));

function debounce(func, wait) {
  var wait = wait || 100,
    timeout;

  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this);
    }, wait);
  };
}

function onScroll() {
  var sectionElements = document.querySelectorAll('.section'),
    hash;

  sectionElements.forEach(function (sectionElement, index) {
    var sectionId = index > 0 ? sectionElement.id : '',
      sectionRect = sectionElement.getBoundingClientRect(),
      hash = '#' + sectionId;

    console.log(sectionElement.id, sectionRect.top, sectionRect.height / 3);

    if (Math.abs(sectionRect.top) < sectionRect.height / 3) {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    }
  });
  console.log('---');
}
