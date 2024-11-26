import { Router } from 'express';
import { createUser, login, messageByUser } from '../controllers/userController';

const router = Router();

router.post('/signup', createUser);
router.post('/contact',messageByUser)
router.post('/login',login)

export default router;
