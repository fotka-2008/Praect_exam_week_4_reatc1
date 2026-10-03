export function sendForm(event) {
  event.preventDefault()
  alert('Заявка отправлена')
  event.target.reset()
}
