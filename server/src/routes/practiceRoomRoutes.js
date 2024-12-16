const express = require('express');
const { createBooking, getBookings } = require('../controllers/practiceRoomController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// User routes
router.post('/book', authMiddleware, createBooking);

// Admin routes
router.post('/bookings', authMiddleware, getBookings);

module.exports = router;
//need to check