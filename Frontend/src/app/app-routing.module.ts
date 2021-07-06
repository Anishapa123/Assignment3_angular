import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component'
import { NewBookComponent } from './newbook/newbook.component';
import {LoginComponent} from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorsComponent } from './authors/authors.component'
import { NewAuthorComponent } from './newauthor/newauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewBookComponent,
},
{
  path:'update',
  component:UpdateBookComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
