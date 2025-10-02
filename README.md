# 🛒 Store React

Una tienda online construida con **React**, **Vite**, y **TailwindCSS**. Implementa enrutamiento moderno con **React Router v6.30**, está optimizada para rendimiento con **SWC**, y utiliza **pnpm** como gestor de dependencias.

---

## 🧑‍💻 Autor

Desarrollado por Oscar Vallecillo — abierto a contribuciones, ideas o feedback.

---

## 📸 Vista previa

![alt text](/public/interface.png)

---

## ⚙️ Tecnologías utilizadas

- ⚛️ **React 18.3**
- 🚀 **Vite 5 + SWC** — compilación ultrarrápida
- 🧭 **React Router DOM v6.30** — enrutamiento declarativo
- 💨 **TailwindCSS 4** con plugin oficial de Vite
- 🎨 **Heroicons 2** — íconos modernos para React
- 📦 **pnpm** — gestor de dependencias eficiente
- 🛠 **TypeScript 5.8** — tipado estático
- ✅ **ESLint + Prettier** — estandarización y calidad de código

---

## 🚀 Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/RacsoJosu/Store-React.git
cd Store-React
```

## 2. Instala las dependencias con pnpm:

```bash
pnpm install
```

## 3. Ejecuta el servidor de desarrollo:

```bash
pnpm run dev
```

# 4. 🔧 Scripts disponibles

```bash
pnpm run dev       # Servidor de desarrollo
pnpm run build     # Construye la app para producción
pnpm run preview   # Sirve la versión de producción

```

## 🧠 Estructura del proyecto

```bash
src/
├── core/             # componentes reutilizables y contextos
├── utils/            # Utilidades, helpers, validaciones
├── Pages/            # Páginas principales de la app
├── routes/           # Configuración de rutas con React Router
├── Orders/           # feature de la aplicacion
├── Products/         # feature de la aplicacion
└── main.tsx          # Entrada principal  
```

# 5. ✨ Funcionalidades

- ✅ Listado de productos dinámico

- 🛒 Carrito de compras con persistencia de estado (opcional con Zustand)

- 🔍 Búsqueda y filtrado de productos

- 📄 organización de vistas

- 🔧 Código modular, mantenible y con buenas prácticas
