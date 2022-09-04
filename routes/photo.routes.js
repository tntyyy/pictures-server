import {Router} from "express";
import photoController from "../controllers/photo.controller.js";


const router = new Router();

router.post('/photo', photoController.uploadPhoto);
router.get('/photo', photoController.getAllPhotos);
router.get('/photo/:id', photoController.getOnePhoto);
router.put('/photo', photoController.updatePhoto);
router.delete('/photo', photoController.deletePhoto);


export {router};