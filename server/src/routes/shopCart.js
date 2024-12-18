import express from 'express';
import {
    addInstrumentToCard,
    updateInstrumentInCard,
    deleteInstrumentFromCard,
    getUserCard
} from '../controllers/cardController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Add an instrument to the card
router.post('/add', authMiddleware, addInstrumentToCard);

// Update an instrument's quantity in the card
router.put('/update', authMiddleware, updateInstrumentInCard);

// Delete an instrument from the card
router.delete('/delete', authMiddleware, deleteInstrumentFromCard);

// Get user's card
router.get('/:userId', authMiddleware, getUserCard);

export default router;
