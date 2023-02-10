const express = require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const techRoutes = require('./techBlogController');
router.use("/api/tech",techRoutes);

const frontEndRoutes = require('./frontEndController');
router.use("/",frontEndRoutes);

module.exports = router;







module.exports = router;