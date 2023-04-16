const express = require('express');

const router = express.Router();
const { findAll } = require('../Controllers/ProductController');

router.get('/', findAll);

module.exports = router;
