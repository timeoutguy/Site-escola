const express = require('express');
const multer = require('multer')
const uploadConfig = require('./config/upload');
const NewsController = require('./controllers/NewsController')

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/news', NewsController.index);
routes.get('/news/:id', NewsController.show);
routes.post('/news', upload.single('image'), NewsController.store);
routes.put('/news/:id', NewsController.update);
routes.delete('/news/:id', NewsController.destroy);


module.exports = routes;