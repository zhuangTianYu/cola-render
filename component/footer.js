const renderFooter = (config) => {
  const {
    price = 0,
    count = 0,
    totalText = '共',
    countUnit = '件',
    priceUnit = '￥',
    status = 'buy-product',
    gradeSelector,
    callback = () => {}
  } = config

  const statusMap = {
    'no-grade': '请选择年级',
    'no-product': '请选择课程',
    'sold-out': '已报满',
    'sold-ended': '报名已结束',
    'buy-product': '立即报名'
  }

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

  const button = create('div', 'footer__button primary', statusMap[status])
  const footer = create('div', 'footer')

  const disabled = ['sold-out', 'sold-ended'].includes(status)
  disabled === true && button.classList.add('disabled')

  const scrollToGrade = ['no-grade', 'no-product'].includes(status)

  footer.appendChild(description)
  footer.appendChild(button)
  body.appendChild(footer)

  button.addEventListener('click', () => {
    if (disabled === true) return

    if (scrollToGrade === true) {
      if (gradeSelector !== undefined) {
        const grade = document.querySelector(gradeSelector)
        windowScrollTo(grade.offsetTop)
      }
      return toast(statusMap[status])
    }

    callback()
  })

}


