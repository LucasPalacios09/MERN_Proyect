import {Router} from 'express'
const router = Router();
import {getAllVideos} from "./Videos.Controller";


router.get('/videos', getAllVideos);

export default router;