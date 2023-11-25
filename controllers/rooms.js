const Room = require('../models/Room')

module.exports = {
    index: async (req, res) => {
        try {
            const rooms = await Room.find()
        if(rooms.length > 0){
            res.status(200).json({
                status: true,
                data: rooms,
                method: req.method,
                url:req.url
            })
        }else{
            res.json({
                status: false,
                message: "Data masih kosong"
            })
        }
    } catch (error) {
            res.status(400).json({success: false})
        }

      },
      store: async (req, res) => {
        try {
            const room = await Room.create(req.body)
            res.status(200).json({
                status: true,
                data: room,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
      update: async (req, res) => {
        try {
            const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: room,
                method: req.method,
                url:req.url,
                message: "Data berhasil diubah"
            })
        } catch (error){
            res.status(400).json({success: false})
        }
         const id = req.params.id
        },
      delete: async (req, res) => {
        try {
            await Room.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url:req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        
      },
      show: async (req, res) => {
        try {
            const room = await Room.findById(req.params.id)
            res.json({
                status: true,
                data: room,
                method: req.method,
                url:req.url,
                message: "Data berhasil didapatkan"
            })
        } catch (error){
            res.status(400).json({success: false})
        }
      },
}
