import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrl: './autocomplete-input.component.css'
})
export class AutocompleteInputComponent {

  private deboucer: Subject<string> = new Subject<string>

  @Output() public onSelect = new EventEmitter();

  constructor(private http: HttpClient) {}
  // test = ['uno', 'dos']

  oKeypress( searchThere: string){
    this.deboucer.next(searchThere)
    console.log(searchThere)
  }
  ngOnInit() {
    console.log(this.deboucer)
    this.deboucer
    .pipe(
      debounceTime(1000)
    )
    .subscribe (data=> {
      this.http.get('http://localhost:3000/countries').subscribe(data=>{
        console.log("entrando")
        console.log(data)
      }
      )
      console.log('debouser value: ', data)
    })
  }

}
