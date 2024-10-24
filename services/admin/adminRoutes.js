const express = require('express');
const router = express.Router();
const adminController = require('./adminController');

router.post('/status', adminController.getAdminStatus);

module.exports = router;
