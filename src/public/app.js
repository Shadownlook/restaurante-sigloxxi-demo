async function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const msg = document.getElementById('msg')

  const res = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()

  if (!res.ok) {
    msg.innerText = data.error || 'Error de login'
    msg.style.color = 'red'
    return
  }

  localStorage.setItem('token', data.token)

  msg.innerText = 'Login exitoso'
  msg.style.color = 'green'

  // Redirección simple por rol (opcional)
  const payload = JSON.parse(atob(data.token.split('.')[1]))

  if (payload.role === 'admin') {
    window.location.href = '/admin.html'
  } else if (payload.role === 'cocina') {
    window.location.href = '/pedidos.html'
  } else {
    window.location.href = '/cliente.html'
  }
}
