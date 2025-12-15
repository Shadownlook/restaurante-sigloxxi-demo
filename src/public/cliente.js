async function crearPedido() {
  const total = document.getElementById('total').value
  const msg = document.getElementById('msg')

  if (!total) {
    msg.textContent = 'Debe ingresar un monto'
    msg.style.color = 'red'
    return
  }

  const res = await fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ total: Number(total) })
  })

  if (!res.ok) {
    msg.textContent = 'No autorizado o error'
    msg.style.color = 'red'
    return
  }

  msg.textContent = 'Pedido creado correctamente'
  msg.style.color = 'green'
  document.getElementById('total').value = ''
}
