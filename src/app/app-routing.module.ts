import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';


const routes: Routes = [
  { path:'', redirectTo: 'books', pathMatch: 'full' },
  { path:'books', component: BooksListComponent },
  { path:'books/id', component: BookDetailsComponent },
  { path:'add', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
