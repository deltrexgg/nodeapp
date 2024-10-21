const express = require('express');
const warehouseRoutes = require('./warehouseRoutes');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use('/api/warehouse', warehouseRoutes);

app.listen(PORT, () => {
    console.log(`Warehouse Service running on http://localhost:${PORT}`);
});
