const getWarehouseStatus = (req, res) => {
    const {name} = req.body;
    res.json({ message: 'Warehouse status retrieved successfully.', name: name });
};

module.exports = { getWarehouseStatus };
