const mongoose = require('mongoose');

const practiceRoomSchema = new mongoose.Schema({
    id: { type: String, required: true },
    capacity: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true, default: true }, // For enabling/disabling rooms
    isVIP: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('PracticeRoom', practiceRoomSchema);
