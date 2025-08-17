# YouBook Monorepo

A full-stack book management application built with React, TypeScript, and Express.

## Project Structure

```
youbook/
├── packages/
│   ├── frontend/     # React + TypeScript + Vite
│   └── backend/      # Express + TypeScript
├── package.json      # Root workspace configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies for all packages:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy backend environment example
cp packages/backend/env.example packages/backend/.env
```

### Development

#### Run both frontend and backend:
```bash
npm run dev:all
```

#### Run only frontend:
```bash
npm run dev
```

#### Run only backend:
```bash
npm run dev:backend
```

### Build

Build all packages:
```bash
npm run build
```

### Linting

Lint all packages:
```bash
npm run lint
```

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run dev:backend` - Start backend development server  
- `npm run dev:all` - Start both frontend and backend servers
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run install:all` - Install dependencies for all packages

## Ports

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## API Endpoints

- `GET /health` - Health check
- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS

### Backend
- Express.js
- TypeScript
- CORS
- Helmet (Security)
- dotenv

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request
