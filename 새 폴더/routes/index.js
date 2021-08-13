const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.body.memId);
    return res.render("main/index");
});

module.exports = router;