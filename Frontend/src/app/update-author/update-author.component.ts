import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../authorservice.service'

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  
  authorList= {
    authorId :'',
    authorName:'',
    authorCode:'',
    releaseDate:'',
    description:'',
    // price:'',
    starRating:'',
    imageUrl:''}
 
  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editauthorId");
    this.authorService.getbook(authorId).subscribe((data)=>{
      this.authorList=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editbook(this.authorList);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}


