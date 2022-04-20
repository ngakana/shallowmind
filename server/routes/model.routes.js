const { Router } = require("express");
const router = Router();

const { getModels, getModel } = require("../controllers/model.controller");

router.route("/")
    .get(getModels)
    .post(getModel)

module.exports = router;