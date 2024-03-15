import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction-component.component.html', //transaction-component
  styleUrl: './transaction-component.component.css'   //transaction-component
})
export class TransactionComponentComponent {  //TransactionDetailsComponent

  @Input()
  public currency!: string;

  @Input()
  public timeOfTransaction!: Date;

  @Input()
  public amount!: number;

  @Input()
  public fee!: number;

}
