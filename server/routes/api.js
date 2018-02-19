const router = require('express-promise-router')();

const Video = require('../models/video');

router.get('/', (req, res) => {
    res.send('api works');
});

// GET VIDEOS
router.get('/videos', async (req, res) => {
    const videos = await Video.find({});
    res.json(videos);
});

// GET SINGLE VIDEO
router.get('/videos/:id', async (req, res) => {
    const video = Video.findById(req.params.id);
    res.json(video);
}); 

// ADDING A VIDEO
router.post('/videos', async (req, res) => {
    const newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    const insertedVideo = await newVideo.save();
    res.json(insertedVideo);
});

// UPDATING A VIDEO
router.put('/videos/:id', async (req, res) => {
    const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
            }
        },
        { new: true }
    );
    res.json(updatedVideo);
});

// DELETING A VIDEO
router.delete('/videos/:id', async (req, res, next) => {
    const videoDeleted = await Video.findByIdAndRemove(req.params.id);
    res.json(videoDeleted);
});

module.exports = router;