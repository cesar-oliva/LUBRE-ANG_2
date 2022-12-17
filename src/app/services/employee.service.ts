import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  dtOptions: DataTables.Settings = {};
  data: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      language :{
        url:"//cdn.datatables.net/plug-ins/1.10.24/i18n/English.json",
      },
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  fetchEmployeeDetailsURL = 'http://localhost:5115/api/Gender'
    fetchEmployeeDetails = () => {
        return this.httpClient.get(this.fetchEmployeeDetailsURL);
  }
}
