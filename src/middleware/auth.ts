import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const SECRET = 'sigloxxi_secret'

export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ error: 'Token requerido' })

  const token = header.split(' ')[1]
  try {
    const decoded = jwt.verify(token, SECRET)
    ;(req as any).user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Token inválido' })
  }
}
