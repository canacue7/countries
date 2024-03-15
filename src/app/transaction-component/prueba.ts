// import { Component, EventEmitter, Output } from "@angular/core";
// import { HttpClient } from "@angular/common/http";

// @Component({
//   selector: "autocomplete-input",
//   template: `
//     <div class="wrapper">
//       <div class="control">
//         <input type="text" class="input" />
//       </div>
//       <div class="list is-hoverable">{{test}}</div>
//     </div>
//   `,
// })
// export class AutocompleteComponent {
//   @Output() public onSelect = new EventEmitter();

//   constructor(private http: HttpClient) {}
//   getItems(query: string):observable<any> {
//     const params = new HttpParams().set('q',query)
//     return this.http.get<Item[]>(this.apiUrl, { params});
//   }

//   searchitem(query:string) {
//     this.getItems(query).subscribe(res=>{
//       return res
//     })
//   }
//   ngOnInit() {
//   }
// }
