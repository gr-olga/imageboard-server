const {Router} = require('express')
const bcrypt = require("bcrypt")
const {toJWT, toData} = require('../auth/jwt')
const User = require("../models").user;

const router = new Router()
router.post('/signup', async (req, res, next) => {
    // Here goes the login logic.
    try {
        const {email, password, fullName} = req.body
        if (!email || !password) {
            return res.status(400).send("missing params")
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            // Create the user in my db.
            const user = await User.create({email, password: hashedPassword, fullName});
            res.send(user)
        }
    } catch (e) {
        next(e)
    }
})

router.post('/login', async (req, res, next) => {
    // Here goes the login logic.
    try {
        if (!email || !password) {
            res.status(400).send("Please supply a valid email and password");
        } else {
            const user = await User.findOne({
                where: {
                    email: email,
                }
            })
            if (!user) return res.status(404).send('mnbmb')
            const match = bcrypt.compareSync(password, user.password);
            if (!match) {
                res.status(400).send("Incorrect credentials");
            }
            const token = toJWT({userId: user.id});
            console.log("token", token);
            // const decodedToken = toData(token);
            // console.log("decoded token", decodedToken)
            res.send({message: "Congrats you are logged in!", token});
        }
    } catch (e) {
        console.log(e.message);
        next(e)
    }
})

module.exports = router