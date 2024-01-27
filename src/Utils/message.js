const message = (type) => (message, duration = 3000) => {
  document.getElementById('message')?.remove()
  const div = document.createElement('div')
  div.className = `alert alert-${type} fixed-top w-300px m-auto mt-4`
  div.innerText = message
  div.id = 'message'
  document.body.appendChild(div)
  setTimeout(() => {
    div?.remove()
  }, duration)
}
export default {
  error: message('danger'),
  success: message('success'),
}
