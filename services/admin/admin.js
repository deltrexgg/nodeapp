const express = require('express');
const adminRoutes = require('./adminRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/' ,(req, res) => {
    res.send("Hi from nodejs")
} )

app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Admin Service running on http://localhost:${PORT}`);
});
