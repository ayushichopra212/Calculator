import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 public employees =[
  {"id": 1, "name": "ayushi", "age": 21},
  {"id": 2, "name": "ayush", "age": 22},
  {"id": 3, "name": "ayus", "age": 23},
  {"id": 4, "name": "ayu", "age": 24},
]
  constructor(private router: Router) { }

  ngOnInit() {
   
  }
 onSelect(employee: { id: any; }){
   this.router.navigate(['/employees', employee.id])
 }
}
