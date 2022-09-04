const Router = require("express");
const photoController = require("../controllers/photo.controller.js");


const router = new Router();

router.post('/photo', photoController.uploadPhoto);
router.get('/photo', photoController.getAllPhotos);
router.get('/photo/:id', photoController.getOnePhoto);
router.put('/photo', photoController.updatePhoto);
router.delete('/photo/:id', photoController.deletePhoto);


module.exports = router;