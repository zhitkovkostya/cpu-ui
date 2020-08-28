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
    var hash = '#' + sectionId

    if (Math.abs(sectionRect.top) < sectionRect.height / 3) {
      if (window.history.pushState) {
        window.history.pushState(null, null, hash)
      } else {
        window.location.hash = hash
      }
    }
  })
}
