import {RequestHandler} from 'express'

export const getVideo : RequestHandler = (req, res) => {
    res.json('Getting a Video...')
};

export const getAllVideos : RequestHandler = (req, res) => {
    res.json('Getting all Videos...')
};

export const createVideo : RequestHandler = (req, res) => {
    res.json('Video was created...')
};

export const deleteVideo : RequestHandler = (req, res) => {
    res.json('Video was deleted...')
};

export const updateVideo : RequestHandler = (req, res) => {
    res.json('Video was updated...')
};

