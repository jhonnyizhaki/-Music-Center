const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    participantsCount: { type: Number, required: true },
    instrument: { type: String, required: true },//how to choose several instruments for the room
    day: { type: Date, required: true },//how to check if available
    time: { type: String, required: true }, // e.g., "14:00-16:00"// how to check if available
    userName: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },//how to cohos the name of the user
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

//nned to check!