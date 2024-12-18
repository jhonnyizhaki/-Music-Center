import Card from '../models/cardModel.js';
import Instrument from '../models/instrumentModel.js';

// Add or create a card with an instrument
export const addInstrumentToCard = async (req, res) => {
    try {
        const { userId, instrumentId, quantity } = req.body;

        const instrument = await Instrument.findById(instrumentId);
        if (!instrument) return res.status(404).json({ message: 'Instrument not found' });

        let card = await Card.findOne({ userId });

        // Create a new card if it doesn't exist
        if (!card) {
            card = new Card({
                userId,
                userName: req.user.name, // Assuming `req.user` is populated via middleware
                items: [],
            });
        }

        // Check if the instrument is already in the card
        const existingItem = card.items.find(item => item.instrumentId.toString() === instrumentId);

        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity
        } else {
            card.items.push({
                instrumentId,
                name: instrument.name,
                price: instrument.price,
                quantity,
            });
        }

        card.updatedAt = new Date();
        await card.save();

        res.status(201).json({ message: 'Instrument added to card', card });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update an instrument's quantity in the card
export const updateInstrumentInCard = async (req, res) => {
    try {
        const { userId, instrumentId, quantity } = req.body;

        const card = await Card.findOne({ userId });
        if (!card) return res.status(404).json({ message: 'Card not found' });

        const item = card.items.find(item => item.instrumentId.toString() === instrumentId);
        if (!item) return res.status(404).json({ message: 'Instrument not found in card' });

        // Update quantity
        item.quantity = quantity;
        card.updatedAt = new Date();

        await card.save();

        res.status(200).json({ message: 'Card updated successfully', card });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete an instrument from the card
export const deleteInstrumentFromCard = async (req, res) => {
    try {
        const { userId, instrumentId } = req.body;

        const card = await Card.findOne({ userId });
        if (!card) return res.status(404).json({ message: 'Card not found' });

        // Remove the instrument from the card
        card.items = card.items.filter(item => item.instrumentId.toString() !== instrumentId);
        card.updatedAt = new Date();

        await card.save();

        res.status(200).json({ message: 'Instrument removed from card', card });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get user's card
export const getUserCard = async (req, res) => {
    try {
        const { userId } = req.params;

        const card = await Card.findOne({ userId }).populate('items.instrumentId');
        if (!card) return res.status(404).json({ message: 'Card not found' });

        res.status(200).json({ card });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
