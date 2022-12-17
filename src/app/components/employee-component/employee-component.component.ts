import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  gender: any = [];

  constructor(private employeeService: EmployeeService) { }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.gender = this.employeeService.fetchEmployeeDetails()
                                      .subscribe((response:any) => {
                                        this.gender = response.data;
                                      });
    console.log(this.gender);
  }
}
