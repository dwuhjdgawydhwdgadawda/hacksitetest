const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/execute', async (req, res) => {
    const { script, username } = req.body;

    // Send this request to Roblox game server
    try {
        const response = await axios.post('https://roblox-game-url.com/execute', {
            script: script,
            username: username
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send request to Roblox' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
