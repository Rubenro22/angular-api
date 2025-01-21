import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciopracticaService {

  private endpoint:string="http://localhost:8080/api/datos";//endpoint de Spring Boot
  private endpoint2:string="https://fakestoreapiserver.reactbd.com/photos";

  constructor(private http:HttpClient) { }//inyectar la depencendia de HttpClient
  public getDatos():Observable<any[]>{
    return this.http.get<any[]>(this.endpoint2);
  }
  
}
