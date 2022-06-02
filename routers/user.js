const {Router} = require("express")
//models
const User = require("../models").user;
const router = new Router()

router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);

    } catch (e) {
        console.log(e.message);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const oneUser = await User.findByPk(userId);
        if (!oneUser) {
            return res.status(404).send("User not found")
        }
        res.send(oneUser);
    } catch (e) {
        console.log(e.message);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const {email, password, fullName} = req.body;
        if (!email || !password || !fullName) {
            res.status(400).send("missing parameters");
        } else {
            const newUser = await User.create({
                email,
                password,
                fullName,
            });
            res.json(newUser);
        }
    } catch (e) {
        next(e);
    }
});

module.exports = router