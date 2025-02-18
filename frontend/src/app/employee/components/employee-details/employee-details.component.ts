import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  animations: [
    trigger('tabChange', [
      transition(':increment', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class EmployeeDetailsComponent {
  selectedTab = 0;
}
