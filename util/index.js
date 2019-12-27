const body = document.querySelector('body')

const create = (tagName, classList, innerHTML) => {
  const element = document.createElement(tagName)
  classList.split(' ').map(klass => element.classList.add(klass))
  innerHTML !== undefined && (element.innerHTML = innerHTML)
  return element
}

const toast = (text, duration = 2000) => {
  const shadow = create('div', 'toast__shadow')
  const content = create('div', 'toast__content', text)
  shadow.appendChild(content)
  body.appendChild(shadow)
  setTimeout(() => body.removeChild(shadow), duration)
}

const windowScrollTo = (targetTop, duration = 100) => {
  console.time('scroll')
  const startTop = window.scrollY
  const step = startTop > targetTop
    ? -Math.ceil((startTop - targetTop) / duration)
    : -Math.floor((startTop - targetTop) / duration)
  const interval = setInterval(() => {
    const currentTop = window.scrollY
    if (Math.abs(currentTop - targetTop) <= Math.abs(step)) {
      window.scrollTo(0, targetTop)
      console.timeEnd('scroll')
      clearInterval(interval)
    } else {
      window.scrollTo(0, currentTop + step)
    }
  }, 1)
}




