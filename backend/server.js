import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = 3196
const distPath = path.resolve(__dirname, '../frontend/dist')
const indexPath = path.join(distPath, 'index.html')

if (!fs.existsSync(indexPath)) {
  console.error(
    `Frontend build not found at ${distPath}\nRun "npm run build" in the frontend folder first.`,
  )
  process.exit(1)
}

const app = express()

app.use(express.static(distPath))

app.get('*', (_req, res) => {
  res.sendFile(indexPath)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
