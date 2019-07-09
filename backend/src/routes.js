const express = require('express');
const multer = require('multer')
const uploadConfig = require('./config/upload');
const NewsController = require('./controllers/NewsController')

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/news', NewsController.index)
routes.post('/news', upload.single('image'), NewsController.store);


module.exports = routes;