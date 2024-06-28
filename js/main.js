async function showPopup (page, price, marketUrl) {
  const response = await fetch(page)
  const content = await response.text()
  document.getElementById('popup-description').innerHTML = content
  document.getElementById('popup-buy').setAttribute('data-url', marketUrl)
  document.getElementById(
    'popup-buy'
  ).innerText = `Get on BlenderMarket for $${price}`
  document.getElementById('popup').style.display = 'block'
  document.addEventListener('keydown', handleEsc)
}

function hidePopup () {
  document.getElementById('popup').style.display = 'none'
  document.getElementById('popup-description').innerHTML = ''
  document.removeEventListener('keydown', handleEsc)
}

function hidePopupOnClick (event) {
  if (event.target == document.getElementById('popup')) {
    hidePopup()
  }
}

function openMarket () {
  const marketUrl = document
    .getElementById('popup-buy')
    .getAttribute('data-url')
  window.open(marketUrl, '_blank')
}

function handleEsc (event) {
  if (event.key === 'Escape') {
    hidePopup()
  }
}
