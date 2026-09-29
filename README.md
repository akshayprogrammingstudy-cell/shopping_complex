# A³ Market — Shopping Platform

A responsive storefront with product discovery, a shopping cart, order management, an Express API, and optional MongoDB Atlas persistence.

## 🚀 Features

- **Storefront & Product Discovery**: Featured collections, department filtering, search, and sorting options.
- **Cart & Order Management**: Real-time cart updates and customer order history.
- **Checkout demo**: Payment methods are UI choices only. There is no payment gateway; do not enter real card or UPI credentials. Digital payment orders are not actually charged.
- **MongoDB Atlas Integration**: Live persistent backend data store for products, customers, carts, and orders.
- **Responsive Modern UI**: Modern dark/light styling built with Tailwind CSS, Radix UI, and Lucide Icons.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Wouter (client-side router), TanStack Query, Tailwind CSS.
- **Backend API**: Node.js, Express, Mongoose.
- **Database**: MongoDB Atlas.
- **Tooling**: pnpm, TypeScript.

## 📦 Getting Started

### 1. Installation

```bash
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and set your own MongoDB Atlas connection string locally. Keep `.env` out of version control and configure `MONGODB_URI` as a private environment variable in your deployment provider.

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/a3-shopping?retryWrites=true&w=majority
PORT=5000
```

### 3. Run Locally

In one terminal, start the API server:
```bash
pnpm dev:api
```

In a second terminal, start the Vite frontend:
```bash
pnpm dev
```

The Vite dev server proxies `/api` requests to `http://localhost:5000`. Run the API locally with the Vercel CLI (`vercel dev`) or deploy the included `api/` functions to Vercel. Set `MONGODB_URI` in the local environment or Vercel project settings. Without it, the API falls back to in-memory data, which does not persist across serverless requests.

Create a production build with `pnpm build` and check TypeScript with `pnpm typecheck`.
