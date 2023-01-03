window.addEventListener('scroll', debounce(onScroll))

function debounce (func, _wait) {
  var wait = _wait || 100
  var timeout

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this)
    }, wait)
  }
}

function onScroll () {
  var sectionElements = document.querySelectorAll('.section')

  sectionElements.forEach(function (sectionElement, index) {
    var sectionId = index > 0 ? sectionElement.id : ''
    var sectionRect = sectionElement.getBoundingClientRect()
    var hash = sectionId.length > 0 ? '#' + sectionId : window.location.pathname + window.location.search

    if (Math.abs(sectionRect.top) < sectionRect.height / 3) {
      window.history.replaceState(null, null, hash)
    }
  })
}
