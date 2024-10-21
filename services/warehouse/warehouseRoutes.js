const express = require('express');
const router = express.Router();
const warehouseController = require('./warehouseController');

router.post('/status', warehouseController.getWarehouseStatus);

module.exports = router;
