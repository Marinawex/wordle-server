import { Request, Response } from 'express';
import { WordsService } from '../services/wordsService';

export class GameController {
  private wordsService = new WordsService();

  constructor() {}

  chooseWordForThisGame(req: Request, res: Response) {
    this.wordsService.chooseRandomWord();
    res.status(200).send('word has been saved in the server');
  }

  async checkWord(req: Request, res: Response) {
    const usersGuess = await req.body;
    const arrayResult = this.wordsService.checkWord(usersGuess);
    const gameState = this.wordsService.getWin();
    res.status(200).json({ arrayResult, win: gameState });
  }
}
