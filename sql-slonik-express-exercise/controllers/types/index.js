const router = require("express").Router();

module.exports = (db) => {
    const getAllTypes = require("./getAllTypes");
    router.get("/", getAllTypes(db));

    const linkPokemonAndType = require("./linkPokemonAndType");
    router.post("/:name", linkPokemonAndType(db));
    
    return router;
}