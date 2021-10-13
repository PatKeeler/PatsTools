import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})

export class PasswordsComponent implements OnInit {

  /**
   * The range of characters to make up the passwords.
   */
  passwordImage = [
    // 16 chars - Hex
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F",

    // 62 chars - all but special characters
    "G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",

    // 74 chars - all.
    "!","@","#","$","%","^","*","(",")","_","+","="
  ];

  pwdLength:     number = 16;

  excludeChars:  string = '';

  hexOnly:       string = '';
  hexUpperLower: string = '';
  hexAllSpecial: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  getPasswords() {

    let pwdLen = Number(this.pwdLength);

    let range = 0;
    let pwds = ['','','',''];

    //Loop and generate a password for each depth level.
    for (let n = 0; n < 3; n++) {
      switch(n) {
        case 0:
          range = 15;
          break;
        case 1:
          range = 61;
          break;
        default:
          range = 73
      }

      let buffer = "";

      for (let i = 0; buffer.length < pwdLen; i++) {
        let karacter = this.passwordImage[this.getRandomInteger(range)];
        if (this.excludeChars.includes(karacter)) {
          continue;
        }
        buffer += karacter;
      }

      pwds[n] = buffer;
    }

    this.setPassowrdsOnPage(pwds);
  }


  /**
   * Insure password length is numeric.
   */
  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    return pattern.test(event.key);
  }


  /**
   * Random number generator.
   */
  getRandomInteger(range) {

    return Math.floor(Math.random() * range + 1);
  }


  /**
   * Load the passwords onto the page forms.
   */
  setPassowrdsOnPage(pwds) {

    this.hexOnly = pwds[0];
    this.hexUpperLower = pwds[1];
    this.hexAllSpecial = pwds[2];
  }


  /*
 * This is the user information for Password Generator.
 */
  getPasswordAbout() {

    alert("This Password Generator creates 3 levels of password strength "
      + "\n   which are defined in the table under the \"Generate\" button. "
      + "\n"
      + "\n  First - enter the password length you want. "
      + "\n     The default is 16, you can change it to any length less "
      + "\n     than 100. "
      + "\n"
      + "\n  Next - Add in any characters you do not want in the passwords. "
      + "\n     This space is used if some of the special characters are not "
      + "\n     allowed in passwords for the system you are logging into."
      + "\n"
      + "\n  Next - Select the \"Generate\" button to generate the passwords, "
      + "\n     you can select this button as many times as you want until "
      + "\n     you get a password you like. "
      + "\n"
      + "\n  Finally - Select the password you want and paste it into your "
      + "\n     systems new password settings. "
      + "\n"
      + "\n  Have fun! ");

    return true;
  }

}
