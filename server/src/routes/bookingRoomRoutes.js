const express = require('express');//cheng to import
const { createBooking, getBookings } = require('../controllers/practiceRoomController');//cheng to import
const authMiddleware = require('../middlewares/authMiddleware');//cheng to import

const router = express.Router();

// User routes
router.post('/', authMiddleware, createBooking);
router.delete('/', authMiddleware, deleteBooking);//To do
router.patch('/', authMiddleware, editBooking);//To do

// Admin routes
//router.post('/bookings', authMiddleware, getBookings);

module.exports = router;//change to export
