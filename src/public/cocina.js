const token = localStorage.getItem('token')

async function cargarPedidos() {
  const res = await fetch('/kitchen/orders', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const pedidos = await res.json()
  const lista = document.getElementById('lista')
  lista.innerHTML = ''

  pedidos.forEach(p => {
    const li = document.createElement('li')
    li.innerHTML = `
      Pedido #${p.id} - $${p.total}
      <button onclick="marcarListo(${p.id})">Listo</button>
    `
    lista.appendChild(li)
  })
}

async function marcarListo(id) {
  await fetch(`/kitchen/orders/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  cargarPedidos()
}

cargarPedidos()
