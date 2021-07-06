import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../authormodel';
import { AuthorService } from '../authorservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(private AuthorService:AuthorService,private router: Router){  } 
  authorList= {
     authorId :'',
     authorName:'',
     authorCode:'',
     releaseDate:'',
     description:'',
    //  price:'',
     starRating:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.authorService.newAuthor(this.authorList);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
