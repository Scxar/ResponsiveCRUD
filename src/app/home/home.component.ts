import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  bookToDeleteIndex: number | null = null;
  
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  editBook(index: number): void {
    const bookToEdit = this.books[index];

    if(bookToEdit){
      this.router.navigate(['/addbook'], { state: { book: bookToEdit, index }});

    }
    else {
      console.error('No book found to edit')
    }
  }


  confirmDelete(index: number):  void {
    this.bookToDeleteIndex = index;
  }

  cancelDelete(): void {
    this.bookToDeleteIndex = null;
  }

  deleteBook(): void {
    if (this.bookToDeleteIndex !== null) {
      this.bookService.removeBook(this.bookToDeleteIndex);
      this.books = this.bookService.getBooks();
      this.bookToDeleteIndex = null;
    }
  } 
}
