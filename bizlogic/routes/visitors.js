const router = require("express").Router();
let Airport = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const uname = req.body.nic;
    const password = Number(req.body.telnumber);

    const newVisitor = new Airport({
        uname,
        password
    })

    newVisitor.save().then(() => {
        res.json("Visitor added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    Airport.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;

