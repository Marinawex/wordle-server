import { expect } from 'chai';
import { WordsService } from '../services/wordsService';
import { GameController } from '../controllers/GameController';

describe('GameController', () => {
  let controller: GameController;
  let wordsService: WordsService;
  const MockWord = [
    { letter: 't', status: '' },
    { letter: 'e', status: '' },
    { letter: 's', status: '' },
    { letter: 't', status: '' },
  ];

  beforeEach(() => {
    wordsService = new WordsService();
    controller = new GameController();
  });

  describe('chooseWordForThisGame', () => {
    it('should choose a random word and return a 200 status code with a message', () => {
      const req = {};
      const res = {
        status: (statusCode: number) => {
          expect(statusCode).to.equal(200);
          return {
            send: (message: string) => {
              expect(message).to.equal('word has been saved in the server');
            },
          };
        },
      };

      controller.chooseWordForThisGame(req as any, res as any);
    });
  });

  describe('checkWord', () => {
    it('should check the users guess and return a 200 status code with the array result and game state', async () => {
      const req = { body: Promise.resolve(MockWord) };
      const res = {
        status: (statusCode: number) => {
          expect(statusCode).to.equal(200);
          return {
            json: (response: any) => {
              expect(response).to.deep.equal({
                arrayResult: MockWord,
                win: wordsService.getWin(),
              });
            },
          };
        },
      };

      wordsService.setWord('test');
      await controller.checkWord(req as any, res as any);
    });
  });
});
