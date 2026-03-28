const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/contact', (req, res) => {
    console.log('Contact message:', req.body);
    res.json({ 
        success: true, 
        message: 'Message sent! Vaithya (8270428389) will reach out to you shortly.',
        contact: {
            name: 'Vaithya',
            email: 'vaithya12@gmail.com',
            phone: '8270428389'
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
