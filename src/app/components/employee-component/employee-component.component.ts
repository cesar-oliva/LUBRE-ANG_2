import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  public employees: Array<any> = [];
  dtOptions: DataTables.Settings = {};

  constructor(private employeeService: EmployeeService) {
    this.employeeService.fetchEmployeeDetails().subscribe((resp: any) =>{
      this.employees = resp
      console.log(this.employees)
    });
   }

  ngOnInit(): void {
    this.dtOptions = {
      language :{
        url:"//cdn.datatables.net/plug-ins/1.10.24/i18n/English.json",
      },
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
}

