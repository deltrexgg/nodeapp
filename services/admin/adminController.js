const getAdminStatus = (req, res) => {
    const {name} = req.body;
    console.log(`Name is ${name}`)
    res.json({ message: 'Admin status retrieved successfully.', name: name });
};

module.exports = { getAdminStatus };
