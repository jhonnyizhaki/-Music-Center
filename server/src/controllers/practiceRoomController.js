import PracticeRoom from '../models/practiceRoomModel';

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { participantsCount, instrument, day, time } = req.body;

        if (!participantsCount || !instrument || !day || !time) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const booking = new Booking({
            participantsCount,
            instrument,
            day,
            userId: req.user.id,
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all bookings for admin
export const getBookings = async (req, res) => {
    try {
        const bookings = await PracticeRoom.find().populate('userId', 'name email');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
//need to check