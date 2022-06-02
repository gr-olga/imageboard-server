const User = require("../models").user;
const {toData} = require("./jwt");

async function auth(req, res, next) {
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    console.log(auth)
    if (auth && auth[0] === "Bearer" && auth[1]) {
        try {
            const data = toData(auth[1]);
            // const user = await User.findOne({
            //     where: {
            //         email: email,
            //     }
            // })
           // res.send(user)
        } catch (e) {
            next(e)
        }
    }
}
