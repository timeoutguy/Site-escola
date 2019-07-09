const News = require('../models/News'); 
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res){
        const news = await News.find().sort('-createdAt')
        return res.json(news)
    },

    async store(req, res){
        const { title, author, description, body } = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.')

        const fileName = `${name}.jpg`

        await sharp(req.file.path)
            .resize(200)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )

            fs.unlinkSync(req.file.path);

        const news = await News.create({
            title,
            author,
            description,
            body,
            image: fileName,
        })

        return res.json(news)
    }
}