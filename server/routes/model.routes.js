const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
    res.status(200).json({"data": "list of models"});
});

router.get("/:id", (req, res) => {
    let id = req.url.split('/')[2];
    res.status(200).json({"data": `model id=${id} metadata`});
})

module.exports = router;