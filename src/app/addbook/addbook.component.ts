import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
  standalone: true,
})
export class AddBookComponent {


  bookForm: FormGroup;
  showImageModal: boolean = false;
  imageSourceInput: string = '';
  editIndex: number | null = null;
  imageExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      authorName: ['', Validators.required],
      year: ['', Validators.required],
      description: [''],
      coverImage: [''],
    });
  }
  
  ngOnInit(): void {
    const navigationState = history.state;
  
    if (navigationState && navigationState.book) {
      const book: Book = navigationState.book;
      this.editIndex = navigationState.index;
  
      this.bookForm.patchValue({
        title: book.title || '',
        authorName: book.authorName || '',
        year: book.year || '',
        description: book.description || '',
        coverImage: book.coverImage || '',
      });
  
      if (book.coverImage) {
        this.imageSourceInput = book.coverImage;
        this.imageExists = true;
      }
    }
  }

  openModal(): void {
    this.showImageModal = true;
  }

  closeModal(): void {
    this.showImageModal = false;
  }

  saveImage(): void {

    const coverImageControl = this.bookForm.get('coverImage');
    if (coverImageControl?.value) {
      this.imageSourceInput = coverImageControl.value;
      console.log('Image Url:', this.imageSourceInput);
      this.imageExists = true;

    }
    else {
      this.imageExists = false;
    }
    this.closeModal();
  }

  onImageError(): void {
    this.imageExists = false;
    console.error('Invalid image URL');
  }

  reset(): void {
    this.bookForm.reset();
    this.imageExists = false;
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookData: Book = this.bookForm.value;
  
      if (this.editIndex !== null) {
        this.bookService.updateBook(this.editIndex, bookData);
      } else {
        this.bookService.addBook(bookData);
      }

      console.log(this.bookForm.value);
  
      this.router.navigate(['/']);
    } else {
      console.error('Form is invalid');
      this.bookForm.markAllAsTouched();
    }
  }
}
