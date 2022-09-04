const Router = require("express");
const collectionController = require("../controllers/collection.controller.js");


const router = new Router();

router.post('/collection', collectionController.createCollection);
router.get('/collection', collectionController.getAllCollections);
router.get('/collection/:id', collectionController.getOneCollection);
router.put('/collection', collectionController.updateCollection);
router.delete('/collection/:id', collectionController.deleteCollection);


module.exports = router;