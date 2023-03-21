import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Array<any> = [];
  dtOptions: DataTables.Settings = {};

  constructor(private employeeService: EmployeeService) {
    
   }

  ngOnInit(): void {
    this.dtOptions = {
      language :{
        url:"//cdn.datatables.net/plug-ins/1.10.24/i18n/English.json",
      },
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.employeeService.fetchEmployeeDetails().subscribe((resp: any) =>{
      this.employees = resp
      console.log(this.employees);
      // Calling the DT trigger to manually render the table

    });
  }
}

