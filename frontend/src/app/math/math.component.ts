import { Component, OnInit, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})

export class MathComponent {

  // ViewChild references html id
  // ElementRef references ts property
  @ViewChild('answerInput') answerIn: ElementRef;
  @ViewChild('divideInput') divideIn: ElementRef;

  invalidNumber = 'You must enter valid numbers for your answer, please try again!';

  notStarted = 'You must select a number and a math function and then click ' +
    'on the \'Start\' button to start the tutor.';

  selectedNumber: any;
  tempNumber: any;
  selectedMathFunction: any;
  tempFunction: any;
  randomNumber: any;
  operator: any;
  responseText: any = '';

  rightCount = 0;
  wrongCount = 0;
  repetition = 1;
  numberRight = 0;
  numberWrong = 0;
  percentage = 0;
  remainder = 0;

  answer = 'other';
  otherAnswer: any;
  divideAnswer: any;

  otherHide = false;
  divideHide = true;
  hintHide = true;


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }


  /**
   * Get the selected number to learn.
   */
  numberRadioHandler(event): any {
    this.tempNumber = event.target.value;
  }


  /**
   * Get the selected math function.
   */
  functionRadioHandler(event): any {
    this.tempFunction = event.target.value;
  }

  /**
   * Validate radio buttons and start.
   */
  startTutor(): any {

    if (this.tempNumber === null) {
      alert(this.notStarted);
      return false;
    }
    this.selectedNumber = this.tempNumber;

    if (this.tempFunction === null) {
      alert(this.notStarted);
      return false;
    }
    this.selectedMathFunction = this.tempFunction;

    // Holder for divide or other 'answer' display
    // answer = other - default for add, subtract and multiply.

    switch (this.selectedMathFunction) {
      // Add
      case '1': {
        this.operator = '+';
        this.answer = 'other';
        this.otherHide = false;
        this.divideHide = true;
        this.randomNumber = this.getRandomInteger(12);
        break;
      }
      // Subtract
      case '2': {
        this.operator = '-';
        this.answer = 'other';
        this.otherHide = false;
        this.divideHide = true;
        this.randomNumber = this.getRandomInteger(this.selectedNumber);
        break;
      }
      // Multiply
      case '3': {
        this.operator = 'x';
        this.answer = 'other';
        this.otherHide = false;
        this.divideHide = true;
        this.randomNumber = this.getRandomInteger(12);
        break;
      }
      // Divide
      case '4': {
        this.operator = '/';
        this.otherHide = true;
        this.divideHide = false;
        this.randomNumber = this.getRandomInteger(this.selectedNumber);
        this.answer = 'divide';
        break;
      }
      default: {
        alert('Number Doh!');
        break;
      }
    }

    // blank responseText and background color to white.
    this.responseText = '';

    // set scores to zero if counts are zero
    if (Number(this.rightCount) === 0 && Number(this.wrongCount) === 0) {
      this.numberRight = 0;
      this.numberWrong = 0;
      this.percentage = 0;
      // $('[name=percentage]').css('background', '#FFFFFF');
    }

    this.answerDisplay(this.answer);

    this.hintHide = true;

  }


  /**
   * Check Answer function.
   *
   * Verifies the answer is correct, records the result and
   * resets for the next challenge.
   */
  checkAnswer(): any {

    let guess = -1;

    // Make sure the tutor has been started correctly first.
    if (this.selectedNumber === null || this.selectedMathFunction === null) {
      alert(this.notStarted);
      return false;
    }

    // Make sure there is an answer to check.
    if (this.selectedMathFunction !== '4') {
      if (! this.verifyNumber(this.otherAnswer)) {
        return false;
      }
    }
    else {
      if (! this.verifyNumber(this.divideAnswer)) {
        alert(this.invalidNumber);
        return false;
      }
    }
    // Make sure remainder is blank or a number
    if (! this.remainder) {
      if (! this.verifyNumber(this.remainder)) {
        alert(this.invalidNumber);
        return false;
      }
    }

    // Compute answer based on math function
    // Addition
    if (this.selectedMathFunction === '1') {
      guess = Number(this.selectedNumber) + Number(this.randomNumber);

      if (Number(guess) === Number(this.otherAnswer)) {
        this.correctAnswer();

        // Reset random number
        this.randomNumber = this.getRandomInteger(12);
      } else {
        this.wrongAnswer();
      }
    }
    // Subtraction
    else if (this.selectedMathFunction === '2') {
      guess = Number(this.selectedNumber) - Number(this.randomNumber);

      if (Number(guess) === Number(this.otherAnswer)) {
        this.correctAnswer();

        // Reset random number
        this.randomNumber = this.getRandomInteger(this.selectedNumber);
      } else {
        this.wrongAnswer();
      }
    }
    // Multiplication
    else if (this.selectedMathFunction === '3') {
      guess = Number(this.selectedNumber) * Number(this.randomNumber);

      if (Number(guess) === Number(this.otherAnswer)) {
        this.correctAnswer();

        // Reset random number
        this.randomNumber = this.getRandomInteger(12);
      } else {
        this.wrongAnswer();
      }
    }
    // Division
    else if (this.selectedMathFunction === '4') {

      let remainder;
      let mod;

      if (this.remainder === null) {
        remainder = Number(0);
      }
      else {
        remainder = Number(this.remainder);
      }

      guess = Number(this.selectedNumber) / Number(this.randomNumber);
      guess = Math.floor(guess);

      mod = Number(this.selectedNumber) % Number(this.randomNumber);

      if (Number(guess) === Number(this.divideAnswer) &&
        Number(mod) === Number(this.remainder)) {
        this.correctAnswer();
        // For division get a number that gives mod zero
        this.randomNumber = this.getRandomInteger(Number(this.selectedNumber));

      } else {
        this.wrongAnswer();
      }
    }
  }

  /**
   * Set focus on the desired input field.
   */
  setFocus(element): void {
    setTimeout(() => { element.nativeElement.focus(); }, 50);
  }

  /**
   * Determine the correct answer display
   */
  answerDisplay(display): void {

    // Display for all but divide
    if (display === 'other') {

      // blank answer, set focus
      this.otherAnswer = '';

      // Show other and hide divide
      this.otherHide = false;
      this.divideHide = true;
      // this.setOtherFocus();
      this.setFocus(this.answerIn);
    }
    // Display divide answer boxes
    else if (display === 'divide') {

      // blank answer, set focus
      this.divideAnswer = '';
      this.remainder = 0;

      this.otherHide = true;
      this.divideHide = false;
      // this.setDivideFocus();
      this.setFocus(this.divideIn);
    }
    // Doh!
    else {
      alert('invalid answer display: ' + display);
    }
  }


  /**
   * Reset the score
   */
  resetScore(): void {

    // set score to blanks.
    this.numberWrong = 0;
    this.numberRight = 0;
    this.percentage = 0;

    // set counts to zero
    this.wrongCount = 0;
    this.rightCount = 0;

    if (this.selectedMathFunction === '4') {
      this.setFocus(this.divideIn);
    }
    else {
      this.setFocus(this.answerIn);
    }

    // Reset background color to white
    // this.percentage.css('background', '#FFFFFF');

  }

  setResponseBackground(): any {
    const bgColor = {
      white: this.responseText === '',
      green: this.responseText === 'Correct',
      yellow: this.responseText === 'Try again',
      red: this.responseText === 'Wrong'
    };
    return bgColor;
  }

  setPercentBackground(): any {
    const myColor = {
      white:  this.percentage === 0,
      red:    this.percentage <  70 && this.percentage > 1,
      orange: this.percentage >= 70 && this.percentage < 80,
      yellow: this.percentage >= 80 && this.percentage < 90,
      green:  this.percentage >= 90,
    };
    return myColor;
  }

  /**
   * Correct answer.
   */
  correctAnswer(): void {

    // Signal correct
    this.responseText = 'Correct';
    // this.responseText.css('background', '#40FF00');

    if (this.selectedMathFunction !== '4') {
      // Set otherAnswer to blank and focus
      this.otherAnswer = '';
      this.setFocus(this.answerIn);
    } else {
      // Set divideAnswer to blank and focus
      this.divideAnswer = '';
      this.setFocus(this.divideIn);
      this.remainder = 0;
    }


    // Increment number correct
    this.rightCount += 1;
    this.numberRight = this.rightCount;

    // Compute new percentage
    this.computePercentage();

    // reset
    this.repetition = 1;

    // hide hint button
    this.hintHide = true;
  }


  /**
   * Wrong answer.
   */
  wrongAnswer(): void {

    if (this.repetition === 2) {
      // Signal wrong answer
      this.responseText = 'Wrong';
      // this.responseText]').css('background', '#FF0000');

      if (this.selectedMathFunction !== '4') {
        this.otherAnswer = '';
        this.setFocus(this.answerIn);
      }
      else {
        this.divideAnswer = '';
        this.remainder = 0;
        this.setFocus(this.divideIn);
      }

      this.wrongCount += 1;
      this.numberWrong = this.wrongCount;

      this.repetition = 1;

      // hide hint button
      this.hintHide = true;

    } else {
      // bump by one
      this.repetition += 1;

      // Signal wrong answer
      this.responseText = 'Try again';
      // this.responseText]').css('background', '#FFFF00');

      // hide hint button
      this.hintHide = false;

    }

    // Compute new percentage
    this.computePercentage();

  }


  /**
   * Compute percentage
   */
  computePercentage(): void {

    let percent = 0.0;
    let total = 0.0;

    if (this.rightCount === 0) {
      percent = 0;
    } else {
      total = Number(this.rightCount) + Number(this.wrongCount);

      // Get percent
      percent = Number(this.rightCount) / total;

      // Move decimal 2 positions to make percent
      percent = percent * 100;

      // Get whole number
      percent = Math.round(percent);

    }

    // show percentage
    this.percentage = percent;

    // Set color for score
    if (percent >= 90) {
      // Green
      // this.percentage]').css('background', '#40FF00');
    } else if (percent >= 80) {
      // Yellow
      // this.percentage]').css('background', '#FFFF00');
    } else if (percent >= 70) {
      // Orange
      // this.percentage]').css('background', '#FF6600');
    } else if (percent >= 1) {
      // Red
      // this.percentage]').css('background', '#FF0000');
    } else {
      // White
      // this.percentage]').css('background', '#FFFFFF');
    }


  }


  /**
   * Random number generator, a java script function.
   *
   * Uses an input parameter to create the random integer for flexibility.
   */
  getRandomInteger(range): any {

    return this.randomNumber = Math.floor(Math.random() * range + 1);
  }


  /**
   * Verify that number passed in is a valid integer.
   */
  verifyNumber(num): boolean {

    if (num >= 0 && num <= 999) {
      return true;
    }

    return false;
  }


  /**
   * Hint - shows the possible correct answers from minimum to maximum.
   */
  getHint(): any {

    if (this.selectedNumber === null || this.selectedMathFunction === null) {
      alert(this.notStarted);
      return false;
    }

    // Addition
    if (this.selectedMathFunction === '1') {
      this.getAdditionHints();
      // Set focus on answer
      this.setFocus(this.answerIn);
    }
    // Subtraction
    else if (this.selectedMathFunction === '2') {
      this.getSubtractionHints();
      // Set focus on answer
      this.setFocus(this.answerIn);
    }
    // Multiplication
    else if (this.selectedMathFunction === '3') {
      this.getMultiplicationHints();
      // Set focus on answer
      this.setFocus(this.answerIn);
    }
    // Division
    else if (this.selectedMathFunction === '4') {
      this.getDivisionHints();
      // Set focus on answer
      this.setFocus(this.divideIn);
    }

    // Set focus on answer
    this.setFocus(this.answerIn);

  }


  /**
   * Get addition possibilities.
   */
  getAdditionHints(): void {

    let display = '';
    const newLine = '\n';

    for (let i = 0; i < 12; i++) {
      display += newLine + this.selectedNumber + ' + ' + Number(i + 1) + ' = ' +
        (Number(this.selectedNumber) + Number(i + 1));
    }

    alert('Hint: ' + display);
  }


  /**
   * Get division possibilities.
   */
  getDivisionHints(): void {

    let display = '';
    const newLine = '\n';

    for (let i = 0; i < this.selectedNumber; i++) {
      const mod = Number(this.selectedNumber) % Number(i + 1);
      let divNum = Number(this.selectedNumber) / Number(i + 1);
      divNum = Math.floor(divNum);

      display += newLine + this.selectedNumber + ' / ' + Number(i + 1) + ' = ' +
        divNum + ', remainder: ' + mod;
    }

    alert('Hint: ' + display);
  }


  /**
   * Get multiplication possibilities.
   */
  getMultiplicationHints(): void {

    let display = '';
    const newLine = '\n';

    for (let i = 0; i < 12; i++) {
      display += newLine + this.selectedNumber + ' x ' + Number(i + 1) + ' = ' +
        (Number(this.selectedNumber) * Number(i + 1));
    }

    alert('Hint: ' + display);
  }


  /**
   * Get subtraction possibilities.
   */
  getSubtractionHints(): void {

    let display = '';
    const newLine = '\n';

    for (let i = 0; i < this.selectedNumber; i++) {
      display += newLine + this.selectedNumber + ' - ' + Number(i + 1) + ' = ' +
        (Number(this.selectedNumber) - Number(i + 1));
    }

    alert('Hint: ' + display);
  }


  /**
   * This is the about information for the Math Tutor.
   */
  getMathAbout(): void {

    alert('This Elementary Math Tutor helps teach the basic math skills through the use of repetition. '
      + 'The tutor uses random \nnumber generation to repetitively challenge the user for answers '
      + 'to the selected number and a randomly generated number.'
      + '\n\nFollow these steps to get started:'
      + '\n\n\t 1. Select the radio button by the number you want to practice.'
      + '\n\t 2. Select the radio button by the math function you want to practice.'
      + '\n\t 3. Press the \'Start\' button to begin the training.'
      + '\n\t 4. Enter the answer for the generated problem.'
      + '\n\nThe tutor will count each time you get the answer correct. You will get 2 chances '
      + 'to enter the correct number, if you \nget them both wrong it will count as a wrong answer. '
      + 'If you want to change the answer you have entered, use the \nbackspace button on your keyboard '
      + 'to erase the answer.'
      + '\n\nYou can check your answer by pressing the \'Check Answer\' button or by pressing the \'Enter\' key.'
      + '\n\nThe problems are randomly generated so sometimes you might get the same problem 2 or 3 times '
      + 'in a row.'
      + '\n\nYou can change the number and/or math function at any time by selecting the new values and '
      + 'pressing the \'Start\' button again. '
      + '\n\nWhen you select \'Divide\' the remainder is set to \'0\' '
      + ' so you only need to change it if the remainder is not zero. '
      + '\n\nThis tool only keeps score for the current session. It shows the number correct, the number '
      + 'wrong and the percentage correct.'
      + '\n\nNeed help with the answer?  Press the \'Hint\' button for help anytime you can see it. '
      + 'The \'Hint\' button will help you \nlearn the right answers.  But, when you use hints, study them so '
      + 'you do not have to look at hints so often.'
      + '\n\nIf you have suggestions for enhancements or encounter errors, send an email '
      + 'to keelerpl@gmail.com and I will look into it. ');
  }

}
