const express = require('express')
const { spawn } = require('child_process')
const app = express()
const cors = require('cors')
const path = require('path')
const { default: next } = require('next')

const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {

  let dataToSend

  let options = {
    root: path.join(__dirname)
  }

  const python = spawn('python', ['GazeTracking/main.py'])


  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = 'success'
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`)
    res.sendFile('GazeTracking/graph.png', options, (err) => {
      if (err) {
        next(err)
      }
      else {
        console.log('pushed')
      }
    })
  });
})


app.listen(PORT, () => {
  console.log(`now serving on ${PORT}`)
})