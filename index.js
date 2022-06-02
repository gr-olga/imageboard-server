const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const userRouter = require("./routers/user")
const imageRouter = require("./routers/image")
const authRouter = require("./routers/auth")

app.use(express.json())

app.use("/users", userRouter);
app.use("/images", imageRouter)
app.use("/auth", authRouter)

app.listen(PORT, () => console.log("Hello from port 4000"));