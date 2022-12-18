import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  fetchEmployeeDetailsURL = 'http://localhost:5115/api/Employee'

  constructor(private httpClient: HttpClient) {}
  fetchEmployeeDetails = () => {
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')
    return this.httpClient.get(this.fetchEmployeeDetailsURL,{
      headers:header
    });

  }
}
