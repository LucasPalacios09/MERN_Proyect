import {RequestHandler} from 'express'
import Video from "./Videos";

export const getVideo : RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);

    if (!videoFound) {
        return res.status(204).json();
    }
    res.json(videoFound);
};

export const getAllVideos : RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
    res.json(videos);
    } catch (error) {
        res.json(error);
    }
};

export const createVideo : RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url});
    if (videoFound) {
        return res.status(301).json({message: 'The Url already exists'});
    }
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
};

export const deleteVideo : RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    if (!videoFound) {
        return res.status(204).json();
    }
    res.json(videoFound);
};

export const updateVideo : RequestHandler = async (req, res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!videoUpdate) return res.status(204).json();
    res.json(videoUpdate);
};

