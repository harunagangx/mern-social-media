import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveUserFriend,
} from '../controllers/userController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/:id', verifyToken, getUser);

router.get('/:id/friends', verifyToken, getUserFriends);

router.patch('/:id/:friendId', verifyToken, addRemoveUserFriend);

export default router;
