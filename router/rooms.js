const express = require('express')
const router = express.Router()

const roomscontroller = require('../controllers/rooms')

router.get('/rooms', roomscontroller.index)

router.get('/room/:id', roomscontroller.show)

  router.post('/room', roomscontroller.store)

  router.put('/room/:id', roomscontroller.update)
  
  router.delete('/room/:id', roomscontroller.delete)
  
module.exports = router