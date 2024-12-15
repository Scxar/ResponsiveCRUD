import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myquotes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './myquotes.component.html',
  styleUrl: './myquotes.component.scss'
})
export class MyquotesComponent {
  quotes: { id: number; text: string }[] = [
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
    { id: 4, text: '' },
    { id: 5, text: '' }
  ];
  
  constructor() {
    this.loadQuotes();
  }

  saveQuote(quote: { id: number; text: string }): void {   

    if (!quote.text.trim()) {
      quote.text = '';
      console.log(`Quote #${quote.id} is saved as empty.`);
    } else {
      console.log(`Quote #${quote.id} saved: ${quote.text}`);
    }
    this.saveQuotes();
  }

  saveQuotes(): void {
    localStorage.setItem('myQuotes', JSON.stringify(this.quotes));
  }

  loadQuotes(): void {
    const savedQuotes = localStorage.getItem('myQuotes');
    if (savedQuotes) {
      this.quotes = JSON.parse(savedQuotes);
    }

    this.ensureFiveQuotes();
  }
  
  ensureFiveQuotes(): void {
    while (this.quotes.length < 5) {
      const newId = this.quotes.length + 1;
      this.quotes.push({ id: newId, text: '' });
    }
  }
}
