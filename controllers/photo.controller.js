const db = require('../db.js');

class PhotoController {
    async uploadPhoto(req, res) {
        const {path, title, collection_id} = req.body;
        const newPhoto = await db.query(`INSERT INTO photo (path, title, collection_id) values ($1, $2, $3) RETURNING *`, [path, title, collection_id]);

        res.json(newPhoto.rows[0]);
    }

    async getAllPhotos(req, res) {
        const photos = await db.query(`SELECT * FROM photo`);
        res.json(photos.rows);
    }

    async getOnePhoto(req, res) {
        const id = req.params.id;
        const photo = await db.query(`SELECT * FROM photo where id = $1`, [photo]);

        res.json(photo.rows[0]);
    }

    async updatePhoto(req, res) {
        const {id, path, title, collection_id} = req.body;
        const photo = await db.query(`UPDATE photo set path = $1, title = $2, collection_id = $3 where id = $4 RETURNING *`, [path, title, collection_id, id]);

        res.json(photo.rows[0]);
    }

    async deletePhoto(req, res) {
        const id = req.params.id;
        const photo = await db.query(`DELETE FROM photo where id = $1`, [id]);

        res.json(photo.rows[0]);
    }
}

module.exports = new PhotoController();