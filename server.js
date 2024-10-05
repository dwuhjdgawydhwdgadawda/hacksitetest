const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/execute', (req, res) => {
    const { script, username } = req.body;

    // Logic to handle script execution
    // For example, check if the user is valid and execute the script
    if (username) {
        // Simulating script execution
        res.json({ success: true, message: 'Script executed successfully.' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid username.' });
    }
});

// Listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
