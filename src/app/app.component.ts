import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stringInput') stringInput!: ElementRef;
  @ViewChild('numberInput') numberInput!: ElementRef;

  inputString: string = '';
  inputNumber: number = 7;
  joinedContent: string = '';


  // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

 solution(A: number[]): number {
  // Implement your solution here
  // integers
  const positiv = A.filter(num => num >0)
  let whole = [1]
  for(let i=1; 5; i++){
       whole.push(i)
  }
  const bWhole = new Set(whole)
  const dif = positiv.filter(num => !bWhole.has(num))
  // for (let i=1; A.length; i++){
  //     if (A[i]>0){

  //     }else{
  //         return 1
  //     }
  // }
  return Math.min(...dif)
}
  
  readonly alf = 'abcdefghijklmnopqrstuvwxyz'
  // static text:string='holamun'

  ngAfterViewInit() {
    // Focus on the first input field after the view has initialized
    this.stringInput.nativeElement.focus();
  }

  public getPresetDate(){
    // const myDate = new Date();
    return new Date(1997,6,1,12,32)
  }

  showContent() {
    let text: string = "Carlos";
    // this.joinedContent = `${this.inputString} - ${this.inputNumber}`;
    console.log(text.toLowerCase().match(/[a-z]/gi)?.map(data=>      this.alf.indexOf(data)+1
    ).join(' '))
    console.log(text.toLowerCase().match(/[a-z]/gi)?.map((letter) => this.alf.indexOf(letter) + 1).join(' '))
  }
}
