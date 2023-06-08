import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  isFirstText = true;
  contor = -1;

  firstText = [
    'M',
    'a',
    't',
    'e',
    'r',
    'i',
    'e',
    ' ',
    'B',
    'a',
    'c',
    'a',
    'l',
    'a',
    'u',
    'r',
    'e',
    'a',
    't',
  ];
  secondText = [
    'Î',
    'n',
    ' ',
    'c',
    'u',
    'r',
    'â',
    'n',
    'd',
    ' ',
    '.',
    '.',
    '.',
  ];

  ngOnInit(): void {
    this.isFirstText = true;
    this.contor = -1;
    setInterval(() => {
      this.contor++;

      if (this.isFirstText) {
        this.title += this.firstText[this.contor];
        if (this.contor === this.firstText.length) {
          this.isFirstText = false;
          this.contor = -1;
          this.title = '';
        }
      } else {
        this.title += this.secondText[this.contor];
        if (this.contor === this.secondText.length) {
          this.isFirstText = true;
          this.contor = -1;
          this.title = '';
        }
      }
    }, 200);
  }
}
