const asyncHandler = require('express-async-handler')
// dis   Get users
// routes GET /api/users
//access private
const users = require('../modals/userModal');

const getUsers = asyncHandler(async (req, res) => {
    console.log("======>>>======>", process.env.MONGO_URI)
    const data = await users.find();

    res.status(200).json({ message: data });

})
const getfindByid = asyncHandler(async (req, res) => {
    const data = await users.find({ _id: req.params.id });

    res.status(200).json({ message: data });

})


// dis   Set users
// routes POST /api/users
//access private
const setUsers = asyncHandler(async (req, res) => {
    //if (!req.body.name || !req.body.email || !req.body.password || !req.body.MoNumber) {
    // res.status(400)
    // throw new Error('Please add a All body filds')
    // }
    const { name, email, password, MoNumber } = req.body;
    if (!name && !email && !password && !MoNumber) {
        res.status(400).json({ message: "Please add a All Fileds" });
    }
    const data = await users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        MoNumber: req.body.MoNumber
    })
    res.status(200).json({ message: data });

})

// dis   Update users
// routes PUT /api/users
//access private
const updateUsers = asyncHandler(async (req, res) => {
    const fintId = await users.findById(req.params.id);
    if (!fintId) {
        res.status(400)
        res.send('User Not Found');
    }
    const UpdateUser = await users.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    console.log("===> UpdateUser", UpdateUser);
    res.status(200).json({ message: `Update data ${req.params.id}` });

})

// dis   Delete users
// routes DELETE /api/users
//access private
const deleteUsers = asyncHandler(async (req, res) => {
    const fintId = await users.findById(req.params.id);
    if (!fintId) {
        res.status(400)
        res.send('User Not Found');
    }
    await fintId.remove();
    res.status(200).json({ message: `delete data ${req.params.id}` });

})
module.exports = {
    getUsers,
    setUsers,
    updateUsers,
    deleteUsers,
    getfindByid
}