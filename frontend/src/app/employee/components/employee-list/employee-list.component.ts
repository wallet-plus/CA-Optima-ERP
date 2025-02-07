import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  vehicles = [
    {
      id: 'VOL-159145',
      location: 'Paris 19, France',
      startingRoute: 'Paris',
      endingRoute: 'Dresden',
      warnings: 'No Warnings',
      progress: 60
    },
    {
      id: 'VOL-182964',
      location: 'Saintes, France',
      startingRoute: 'Saintes',
      endingRoute: 'Roma',
      warnings: 'Fuel Problems',
      progress: 82
    },
    {
      id: 'VOL-276904',
      location: 'Aulnay-sous-Bois, France',
      startingRoute: 'Aulnay-sous-Bois',
      endingRoute: 'Torino',
      warnings: 'Temperature Not Optimal',
      progress: 30
    },
    {
      id: 'VOL-300198',
      location: 'West Palm Beach, USA',
      startingRoute: 'West Palm Beach',
      endingRoute: 'Dresden',
      warnings: 'Ecu Not Responding',
      progress: 90
    },
    {
      id: 'VOL-302781',
      location: 'Köln, Germany',
      startingRoute: 'Köln',
      endingRoute: 'Laspezia',
      warnings: 'Oil Leakage',
      progress: 24
    }
  ];
}