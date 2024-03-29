const express = require('express');
const router = express.Router();
const { User, Comment } = require('../models');
const bcrypt = require("bcrypt");

// Get all users
router.get("/", (req, res) => {
    User.findAll().then(userData => {
        res.json(userData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error getting all users!", err })
    })
})

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.json({ msg: '"logged out successfully"' })
})

// Get user 
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id, {
        include: [Comment]
    }).then(userData => {
        res.json(userData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error getting user!", err })
    })
})

// Create user
router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(userData => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        res.json(userData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error creating new user!", err })
    })
})

// User login
router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            return res.status(401).json({ msg: "incorrect username or password" })
        } else {
            if (bcrypt.compareSync(req.body.password, userData.password)) {
                req.session.userId = userData.id;
                req.session.username = userData.username;
                return res.json(userData)
            } else {
                return res.status(401).json({ msg: "incorrect email or password" })
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Error", err })
    })
})

// User logout 
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.status(500).send("An error occurred while logging out.");
        }
        res.clearCookie("sid");
        res.status(200).send("Logout successful.");
    });
});




module.exports = router;