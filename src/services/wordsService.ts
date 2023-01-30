import { wordsList } from '../wordsList';

interface Word {
  letter: string;
  status: string;
}

export class WordsService {
  private correctWord: string = '';
  public isWin: boolean = false;

  constructor() {}

  chooseRandomWord() {
    const randomNumber = () => Math.floor(Math.random() * wordsList.length);
    this.correctWord = wordsList[randomNumber()];
  }

  getWord() {
    return this.correctWord;
  }

  setWord(word: string) {
    this.correctWord = word;
  }

  getWin() {
    return this.isWin;
  }

  checkWord(usersGuess: Array<Word>) {
    const guess = usersGuess;

    const checkWordArray = [...guess];
    checkWordArray.map((guess, index) => {
      if (guess.letter.toLowerCase() === this.correctWord[index]) {
        guess.status = 'right';
      } else if (this.correctWord.includes(guess.letter.toLowerCase())) {
        guess.status = 'misplaced';
      } else {
        guess.status = 'wrong';
      }
    });
    this.checkWin(checkWordArray);
    return checkWordArray;
  }

  checkWin(checkWordArray: Word[]) {
    this.isWin = checkWordArray.every((word: Word) => word.status === 'right');
  }
}
