const { Router } = require("express");

const router = Router();

router.route("/")
    .get((_, res) => {
        res.status(200).json({"data": "list of saved scenarios"});
    })
    .post((_, res) => {
        res.status(201).json({"message": "scenario successfully saved to database"});
    })

router.route("/batch")
    .get((_, res) => {
        res.status(200).json({"data": "processed batch file"});
    })
    .post((_, res) => {
        res.status(200).json({"message": "sending batch file for processing"});
    })

module.exports = router;