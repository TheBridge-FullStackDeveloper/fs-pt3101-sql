const router = require("express").Router();
const { authorizer } = require("../middlewares");

const authControllers = require("../controllers/auth");

module.exports = (db) => {
    router.post("/register", authControllers.signup(db));
    router.post("/login", authControllers.signin(db));
    router.post("/logout", authorizer, authControllers.signout());

    return router;
}
