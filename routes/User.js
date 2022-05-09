const express = require('express')
const ProfileController = require('../controllers/profile')
const router = express.Router();

router.get('/', ProfileController.findAll);
router.get('/:role', ProfileController.findByRole);
router.get('/:rank', ProfileController.findByRank);
router.get('/:id', ProfileController.findOne);
router.post('/', ProfileController.create);
router.patch('/:id', ProfileController.update);
router.delete('/:id', ProfileController.destroy);

module.exports = router