import path from 'path'
import express, { Request, Response } from 'express'
import { prisma } from './config/database'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { auth } from './middleware/auth'
import { allowRole } from './middleware/roles'

const SECRET = 'sigloxxi_secret'

const app = express()
app.use(express.json())

app.use(express.static(path.join(process.cwd(), 'src', 'public')))

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(401).json({ error: 'Usuario no existe' })

  const valid = bcrypt.compareSync(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' })

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: '1h' }
  )

  res.json({ token })
})

// CLIENTE
app.post(
  '/orders',
  auth,
  allowRole('cliente', 'admin'),
  async (req: Request, res: Response) => {
    const order = await prisma.order.create({
      data: { total: req.body.total, status: 'PENDIENTE' }
    })
    res.json(order)
  }
)

// COCINA
app.get(
  '/kitchen/orders',
  auth,
  allowRole('cocina', ''),
  async (_req: Request, res: Response) => {
    const orders = await prisma.order.findMany({
      where: { status: 'PENDIENTE' }
    })
    res.json(orders)
  }
)

app.put(
  '/kitchen/orders/:id',
  auth,
  allowRole('cocina', ''),
  async (req: Request, res: Response) => {
    const order = await prisma.order.update({
      where: { id: Number(req.params.id) },
      data: { status: 'LISTO' }
    })
    res.json(order)
  }
)

app.listen(3000, () =>
  console.log('Servidor en puerto 3000')
)
