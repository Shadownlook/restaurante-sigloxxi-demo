import { Request, Response, NextFunction } from 'express'

export function allowRole(role: string, p0: string) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const user = (req as any).user

    // 🔑 ADMIN ACCESO TOTAL
    if (user?.role === 'admin') {
      return next()
    }

    if (!user || user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' })
    }

    next()
  }
}
