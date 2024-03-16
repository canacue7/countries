import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrl: './autocomplete-input.component.css'
})
export class AutocompleteComponent {
[x: string]: any;

  private deboucer: Subject<string> = new Subject<string>

  @Output() public onSelect = new EventEmitter();

  
  constructor(private http: HttpClient) {}
  
  isLoading: boolean = false;
 
  paises: string [] = [];
  ngOnInit() {

    this.deboucer
    .pipe(
      debounceTime(1500)
    )
    .subscribe (query=> {
      this.http.get<string[]>(`https://example.com/api/items?q=${query}`).subscribe(data=>{
        this.paises = data;
        // array metido a la fuerza :v
        // this.paises = ['Italy', 'Polony', 'Spain', 'Germany']
        this.isLoading = false
      }
      )
    })
  }

  oKeypress( searchThere: string){
    this.isLoading = true;
    this.deboucer.next(searchThere)
  }

  onEmitValue(pais:string){
    this.onSelect.emit(pais)
  }
}
