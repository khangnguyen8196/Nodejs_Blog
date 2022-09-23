const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

//newsController.index

router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;
