import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data: any[] = [
    {name: 'John', age: 30, job: 'Developer', company: 'ABC'},
    {name: 'Jane', age: 25, job: 'Designer', company: 'XYZ'},
    {name: 'Bob', age: 35, job: 'Manager', company: 'DEF'},
    {name: 'Alice', age: 28, job: 'Engineer', company: 'GHI'},
    {name: 'Eve', age: 32, job: 'Designer', company: 'JKL'}
  ];
  headers: any[] = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
    {key: 'company', label: 'Company'}
  ];

}
