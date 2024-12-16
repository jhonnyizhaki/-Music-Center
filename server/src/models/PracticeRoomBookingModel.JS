import mongoose from 'mongoose';

const instrumentsSchema = new mongoose.Schema({
    instrumentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    price: { type: Number, required: true }
})

const bookingSchema = new mongoose.Schema({
    participantsCount: { type: Number, required: true },
    instruments: [instrumentsSchema],
    day: { type: Date, required: true },
    hoeLong: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },//how to cohos the name of the user
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking
