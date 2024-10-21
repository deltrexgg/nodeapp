const express = require('express');
const adminRoutes = require('./adminRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Admin Service running on http://localhost:${PORT}`);
});
