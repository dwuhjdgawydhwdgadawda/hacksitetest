const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const ROBLOX_GAME_URL = 'https://www.roblox.com/games/130592754471804/Untitled-Game/execute'; // This is just a placeholder; adjust as needed

app.post('/execute', async (req, res) => {
    const { script, username } = req.body;

    // Forward the request to the Roblox game server
    try {
        const response = await axios.post(ROBLOX_GAME_URL, {
            script: script,
            username: username
        });
        res.json(response.data); // Send back the response from Roblox
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to communicate with Roblox' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
