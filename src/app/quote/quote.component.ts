import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("clare","Dad","Ker Kosir Serung'ung!",490,4,new Date(2020,1,12)),
    new Quote("clare","Les Brown","Life has no limitations except the ones you make",309,5,new Date(2021,6,17)),
    new Quote("clare","Mahatma Gandhi","Live as if you were to die tomorrow. Learn as if you were to live forever.",353,10, new Date(2012,12,12))
  ];

  get sortQuotes(){
   return this.quotes.sort((a,b) => {
      return b.likes - a.likes;
    })
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  
    this.quotes.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
