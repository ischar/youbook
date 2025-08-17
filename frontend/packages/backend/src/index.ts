import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// API routes
app.get('/api/books', (req, res) => {
  // Mock data for now
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  ]
  res.json(books)
})

app.post('/api/books', (req, res) => {
  const { title, author, year } = req.body
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' })
  }
  
  // Mock response - in real app, save to database
  const newBook = {
    id: Date.now(),
    title,
    author,
    year: year || new Date().getFullYear()
  }
  
  res.status(201).json(newBook)
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📚 YouBook API ready!`)
})
