import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import BookService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookItem= {
    bookId :'',
    bookName:'',
    bookCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
 
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getbook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editbook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
