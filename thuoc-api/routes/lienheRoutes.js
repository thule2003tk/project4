const express = require('express');
const router = express.Router();
const lienheController = require('../controllers/lienheController');

router.post('/', lienheController.createContact);
router.get('/', lienheController.getAllContacts);

module.exports = router;
router.put('/:id', lienheController.replyContact);
router.delete('/:id', lienheController.deleteContact);
