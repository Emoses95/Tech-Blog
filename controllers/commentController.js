const express = require('require');
const router = express.Router();
const { User, Coment } = require('../models');

// Get all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then((commentData) => {
            res.json(commentData)
        })
        .catch((err) => {
            res.status(500).json({ msg: "Error getting all comments", err })
        })
});

// Get comment by id
router.get("/:id", (req, res) => {
    Comment.findByPk(req.parms.id, {
        include: [User],
    }).then((commentData) => {
        res.json(commentData)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ msg: "Error getting comment by id", err })
    })
});

// Create comment 
router.post('/', (req, res) => {
    if (!req.session.userId) {
        res.status(401).json({ msg: "You must be logged in to create a comment", err })
        return
    }
    Comment.create({
        comment: req.body.comment,
        UserId: req.body.UserId,
    }).then((commentData) => {
        res.json(commentData)
    }).catch((err) = {
        console.log(err)
        res.status(500).json({ msg: 'Error creating comment', err })
    });
});


// Delete Comment
router.delete('/:id', (req, res) => {
    if (!req.session.userId) {
        res.status(403).json({ msg: 'You are not authorized to delete this comment', err })
        return
    }
    Comment.findbyPk(req.params.id).then((commentData) => {
        if (!commentData) {
            return res.status(404).json({ msg: "Comment doesnt exist" })
        } else if (commentData.UserId !== req.session.userId) {
            return res.status(403).json({ msg: 'Authorization denied to delete comment' })
        }
        Comment.destroy({
            where: {
                id: req.params.id,
            }
        }).then((commentData) => {
            res.json(commentData)
        }).catch((err) => {
            console.log(err)
            res.status(500).json({ msg: 'Error deleting comment', err })
        })
    })
});


module.exports = router;