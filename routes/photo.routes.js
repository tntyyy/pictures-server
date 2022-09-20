const Router = require("express");
const photoController = require("../controllers/photo.controller.js");


const router = new Router();

router.post('/pictures', photoController.uploadPhoto);
router.get('/pictures', photoController.getAllPhotos);
router.get('/pictures/:id', photoController.getOnePhoto);
router.put('/pictures', photoController.updatePhoto);
router.delete('/pictures/:id', photoController.deletePhoto);


module.exports = router;