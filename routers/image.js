const { Router } = require("express")

//models
const Image = require("../models").image;
const router = new Router()

router.get("/", async (req, res) => {
    try {
        const images = await Image.findAll();
        res.send(images);
    } catch (e) {
        console.log(e.message);
    }
});
module.exports = router
