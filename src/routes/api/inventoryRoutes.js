const express = require('express');
const router = express.Router();
const inventoryController = require('../../controllers/inventoryController');

router.post('/inventory', inventoryController.createInventoryItem);
router.put('/inventory/:id', inventoryController.updateInventoryItem);
router.get('/inventory', inventoryController.getAllInventoryItems);
router.get('/inventory/:id', inventoryController.getInventoryItem);
router.delete('/inventory/:id', inventoryController.deleteInventoryItem);

module.exports = router;
