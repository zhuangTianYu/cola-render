const body = document.querySelector('body')

const create = (tagName, classList, innerHTML) => {
  const element = document.createElement(tagName)
  classList.split(' ').map(klass => element.classList.add(klass))
  innerHTML !== undefined && (element.innerHTML = innerHTML)
  return element
}





