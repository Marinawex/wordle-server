import { GameController } from '../controllers/gameController';
import { Request, Response, Router } from 'express';

export const router = Router();

const gameController = new GameController();

router.get('/getWord', (req: Request, res: Response) => {
  gameController.chooseWordForThisGame(req, res);
});

router.post('/checkWord', (req: Request, res: Response) => {
  gameController.checkWord(req, res);
});
