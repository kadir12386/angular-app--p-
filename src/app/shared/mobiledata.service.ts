import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mobiledata } from './mobiledata.model';
@Injectable({
  providedIn: 'root',
})
export class MobiledataService {
  selectedMobiledata: Mobiledata;
  mobiledatas: Mobiledata[];

  // readonly baseURL = 'http://localhost:8000/mobile';
  readonly baseURL = 'https://angular-phone-app.herokuapp.com/mobile';
  // readonly baseURL = 'https://6120e9a524d11c001762ee48.mockapi.io/notesapp';

  constructor(private http: HttpClient) {}

  postMobileData(mobile: Mobiledata) {
    return this.http.post(this.baseURL, mobile);
  }
  getMobileList() {
    return this.http.get(this.baseURL);
  }
  putMobileData(mobile: Mobiledata) {
    return this.http.put(this.baseURL + `/${mobile._id}`, mobile);
  }

  deleteMobileData(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
// /notesapp/:id
