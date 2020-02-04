const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    item: String,
    "ESTACION A": String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);