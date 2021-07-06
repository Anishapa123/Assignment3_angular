import { Component } from '@angular/core';
import { AuthorService } from '../authorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  pageTitle: string = 'Authors List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  authors=[{
    authorId :'',
    authorName:'',
    authorBook:'',
    releaseDate:'',
    description:'',
    // price:'',
    starRating:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.authorService.getProducts().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
 
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['update']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a!== author);
      })
  

  }
}
  
