import express from 'express';
import { getProfile, createOrUpdateProfile } from '../controllers/profileController.js';

const router = express.Router();

router.route('/').get(getProfile).post(createOrUpdateProfile);

export default router;
