const express = require('express');
const router = express.Router();
router.get('/getProducts', (req, res) => {
    res.status(200).json({
        message: "get Products"
    })
})
router.post('/addProducts', (req, res) => {
    res.status(200).json({
        message: "add Products"
    })
})
router.put('/updateProducts', (req, res) => {
    res.status(200).json({
        message: "Update Products"
    })
})
router.delete('/deleteProducts', (req, res) => {
    res.status(200).json({
        message: "delete Products"
    })
})
module.exports = router;