const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama ruangan'],
        unique: true
    },
    gedung: {
        type: String,
        required: [true, 'Silahkan isikan termasuk Gedung mana'],
        unique: false
    },
    lantai: {
        type: Number,
        required: [true, 'Silahkan isikan tingkatan lantai'],
        unique: false
    },
    pengurus: {
        type: String,
        required: [true, 'Silahkan isikan nama pengurus kelas'],
        unique: false
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan Kelas siapa'],
        unique: true
    },
})

module.exports = mongoose.model('Room', RoomSchema)