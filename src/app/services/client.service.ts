import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { ClientProject } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients (): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS)
  }

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllClientProjects (): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL +  Constant.API_METHOD.GET_ALL_PROJECTS)
  }

  getAllEmployee (): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL +  Constant.API_METHOD.GET_ALL_EMP)
  }



  addUpdate (obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL +  "AddUpdateClient", obj)
  }

  deleteClientById (id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL +  "DeleteClientByClientId?clientId=" +id)
  }
 getEmployeeById (id: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL +  "GetEmployeeByEmployeeId?id=" +id)
  }

  addClientProjectUpdate (obj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL +  "AddUpdateClientProject", obj)
  }

  updateClientProject(obj: ClientProject): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`${environment.API_URL}AddUpdateClientProject`, obj);
  }
  
}
