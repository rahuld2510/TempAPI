const express = require('express');
const router = express.Router();

// GET /temperature endpoint
router.get('/temperature', (req, res) => {
    // Logic to fetch temperature data
    res.json({ temperature: '22°C' }); // Placeholder response
});

module.exports = router;