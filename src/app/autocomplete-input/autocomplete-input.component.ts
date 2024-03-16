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
  
  isLoading: boolean = false;
 
  ngOnInit() {

    this.deboucer
    .pipe(
      debounceTime(500)
    )
    .subscribe (data=> {
      this.http.get('http://localhost:3000/countries').subscribe(data=>{
        console.log("entrando")
        console.log(data)
        this.isLoading = false
      }
      )
      console.log('debouser value: ', data)
    })
  }

  oKeypress( searchThere: string){
    this.isLoading = true;
    this.deboucer.next(searchThere)
    console.log(searchThere)
  }


}
