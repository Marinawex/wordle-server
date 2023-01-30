import { expect } from 'chai';
import { WordsService } from '../services/WordsService';

describe('WordsService', () => {
  let wordsService: WordsService;

  beforeEach(() => {
    wordsService = new WordsService();
  });

  describe('chooseRandomWord method', () => {
    it('should set a random word', () => {
      wordsService.chooseRandomWord();
      const word = wordsService.getWord();
      expect(word).to.be.a('string');
    });
  });

  describe('checkWord method', () => {
    it('should return an array of words with their status', () => {
      wordsService.setWord('test');
      const usersGuess = [
        { letter: 't', status: '' },
        { letter: 'e', status: '' },
        { letter: 's', status: '' },
        { letter: 't', status: '' },
      ];
      const result = wordsService.checkWord(usersGuess);
      expect(result).to.deep.equal([
        { letter: 't', status: 'right' },
        { letter: 'e', status: 'right' },
        { letter: 's', status: 'right' },
        { letter: 't', status: 'right' },
      ]);
    });

    it('should return an array of words with "misplaced" status if letter is not at the correct index', () => {
      wordsService.setWord('test');
      const usersGuess = [
        { letter: 'e', status: '' },
        { letter: 't', status: '' },
        { letter: 's', status: '' },
        { letter: 't', status: '' },
      ];
      const result = wordsService.checkWord(usersGuess);
      expect(result).to.deep.equal([
        { letter: 'e', status: 'misplaced' },
        { letter: 't', status: 'misplaced' },
        { letter: 's', status: 'right' },
        { letter: 't', status: 'right' },
      ]);
    });

    it('should return an array of words with "wrong" status if letter is not in the correct word', () => {
      wordsService.setWord('test');
      const usersGuess = [
        { letter: 'a', status: '' },
        { letter: 'b', status: '' },
        { letter: 'c', status: '' },
        { letter: 'd', status: '' },
      ];
      const result = wordsService.checkWord(usersGuess);
      expect(result).to.deep.equal([
        { letter: 'a', status: 'wrong' },
        { letter: 'b', status: 'wrong' },
        { letter: 'c', status: 'wrong' },
        { letter: 'd', status: 'wrong' },
      ]);
    });
  });

  describe('checkWin', () => {
    it('should set isWin property to true if every word has a "right" status', () => {
      const checkWordArray = [
        { letter: 'a', status: 'right' },
        { letter: 'b', status: 'right' },
      ];

      wordsService.checkWin(checkWordArray);
      expect(wordsService.isWin).to.be.true;
    });

    it('should set isWin property to false if at least one word has a "wrong" or "misplaced" status', () => {
      const checkWordArray = [
        { letter: 'a', status: 'right' },
        { letter: 'b', status: 'wrong' },
      ];

      wordsService.checkWin(checkWordArray);
      expect(wordsService.isWin).to.be.false;
    });
  });
});
