const express = require('express');
const router = express.Router();

// User routes import
const userRoutes = require('./userController');
router.use("/api/users", userRoutes);

// Comment routes import
const commentRoutes = require('./commentController');
router.use("/api/comment", commentRoutes);

// Frontend routes
const frontEndRoutes = require('./frontEndController');
router.use("/", frontEndRoutes);

module.exports = router;