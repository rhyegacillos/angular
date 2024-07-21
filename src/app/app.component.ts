import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  password = '';
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  passwordLength = 0;

  onButtonClick() {
    this.password = 'MY PASSWORD';
    console.log(`
    About to generate a password with these settings:
    Include letters: ${this.includeLetters}
    Include numbers: ${this.includeNumbers}
    Include symbols: ${this.includeSymbols}`);

    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i=0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;


  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event) {
    // @ts-ignore
    const parsedValue = parseInt(event.target.value)

    this.passwordLength = 0

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }
}
