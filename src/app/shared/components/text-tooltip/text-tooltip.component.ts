import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-tooltip',
  templateUrl: './text-tooltip.component.html',
  styleUrls: ['./text-tooltip.component.scss']
})
export class TextTooltipComponent implements OnInit {
  @Input() fullText: string;

  @Input() maxLength: number;

  preparedText = '';

  lastWord = '';

  showTooltip = false;

  ngOnInit(): void {
    if (this.isTextTooLong()) {
      this.preparedText = this.cutAndSetTextToLastSpace();
      this.lastWord = this.findAndCutLastWord();
      this.showTooltip = true;
    }
  }

  isTextTooLong(): boolean {
    return this.fullText.length > this.maxLength ? true : false;
  }

  cutAndSetTextToLastSpace(): string {
    let cutText = this.fullText.substr(0, this.maxLength);
    cutText = cutText.substr(0, cutText.lastIndexOf(' '));
    return cutText;
  }

  findAndCutLastWord(): string {
    const tempArray = this.preparedText.split(' ');
    const lastWordOfString = tempArray[tempArray.length - 1];
    tempArray.pop();
    this.preparedText = tempArray.join(' ');
    return lastWordOfString;
  }
}
