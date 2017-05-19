const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// priority serve any static files
app.use(express.static(path.resolve(__dirname, '../build')))

// all remaining requests return the React app, so it can handle routing
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
