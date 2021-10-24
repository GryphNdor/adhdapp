const express = require('express')
const { spawn } = require('child_process')
const app = express()
const cors = require('cors')

const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {

  let dataToSend

  const python = spawn('python', ['GazeTracking/main.py'])


  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = 'success'
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`)
    res.send('GazeTracking/graph.png')
  });
})


app.listen(PORT, () => {
  console.log(`now serving on ${PORT}`)
})