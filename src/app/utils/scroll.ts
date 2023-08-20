export const handleIdScroll = (elemId: string) => {
  const obj = document.getElementById(elemId)
  if (obj) {
    if (window.pageYOffset >= window.innerHeight) {
      window.scrollTo(window.pageXOffset, window.pageYOffset + obj.getBoundingClientRect().top)
    }
    else {
      window.scrollTo(window.pageXOffset, window.innerHeight + obj.getBoundingClientRect().top)
    }
  }
}