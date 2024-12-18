import mongoose from 'mongoose';

const cardInstrumentSchema = new mongoose.Schema({
    instrumentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
});

const cardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true }, // Optional: Redundant, for quick access
    items: [cardItemSchema], // List of instruments in the card
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
