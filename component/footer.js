const renderFooter = (config) => {
  const {
    price = 0,
    count = 0,
    totalText = '共',
    countUnit = '件',
    priceUnit = '￥',
    callback = () => {}
  } = config

  const description = create('div', 'footer__description')

  const descriptionList = [
    create('span', 'total-text', totalText),
    create('span', 'count', count),
    create('span', 'count-unit', countUnit),
    create('span', 'total-text', totalText),
    create('span', 'price-unit', priceUnit),
    create('span', 'price', price)
  ]
  descriptionList.map(element => description.appendChild(element))

  const button = create('div', 'footer__button primary', 'button')
  const footer = create('div', 'footer')

  footer.appendChild(description)
  footer.appendChild(button)
  body.appendChild(footer)

  button.onclick = callback

}


