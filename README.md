# 🍽️ Sistema de Gestión – Restaurante Siglo XXI

Proyecto académico desarrollado para la **Tarea N°4**, cuyo objetivo es diseñar e implementar una solución informática que permita modernizar la gestión operativa, administrativa y de atención al cliente del **Restaurante Siglo XXI**.

La solución integra control de usuarios, roles, pedidos y seguridad, junto con una interfaz visual simple e intuitiva, cumpliendo con los requisitos establecidos en las **Subtareas 4A y 4B**.

---

## 🎯 Objetivo del Proyecto

Desarrollar un sistema de información que permita:
- Gestionar pedidos de clientes de forma digital.
- Controlar el flujo de trabajo en cocina.
- Administrar usuarios y roles.
- Mejorar la experiencia del cliente mediante una interfaz clara y accesible.
- Aplicar principios de usabilidad, seguridad y diseño centrado en el usuario.

---

## 🧩 Tecnologías Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **PostgreSQL**
- **Prisma ORM**
- **HTML5 / CSS3 / JavaScript**
- **JWT (JSON Web Tokens)**
- **bcryptjs**

---

## 👥 Roles del Sistema

| Rol | Descripción |
|----|------------|
| Administrador | Acceso total al sistema |
| Cliente | Realiza pedidos desde la aplicación |
| Cocina | Visualiza y gestiona pedidos |
| Bodega | Control de stock (modelo) |
| Finanzas | Control financiero (modelo) |

---

## 🖥️ Interfaz del Sistema

El sistema cuenta con interfaces diferenciadas según el rol del usuario:

- **Login**: Autenticación segura.
- **Cliente**: Creación de pedidos.
- **Cocina**: Visualización y actualización del estado de pedidos.
- **Administrador**: Acceso global a funcionalidades.

Las interfaces fueron desarrolladas aplicando principios de:
- Claridad visual
- Facilidad de navegación
- Consistencia gráfica
- Accesibilidad

---

## 🔐 Seguridad

- Contraseñas cifradas con **bcrypt**
- Autenticación mediante **JWT**
- Control de acceso por roles (middleware)
- Protección de rutas según perfil

---

## 🗂️ Estructura del Proyecto
restaurante-sigloxxi/
├── src/
│ ├── server.ts
│ ├── middleware/
│ ├── config/
│ └── public/
│ ├── login.html
│ ├── cliente.html
│ ├── pedidos.html
│ ├── admin.html
│ └── css/
├── prisma/
│ └── schema.prisma
├── package.json
└── README.md
---

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
git clone https://github.com/TU_USUARIO/restaurante-sigloxxi.git
2️⃣ Instalar dependencias
npm install
3️⃣ Configurar la base de datos
Configurar las credenciales de PostgreSQL en el archivo .env.
4️⃣ Ejecutar migraciones
npx prisma migrate dev
5️⃣ Ejecutar el proyecto
npm run dev
