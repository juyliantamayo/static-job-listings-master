import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private httpService: HttpClient) { }

  getJsonData() {
    return this.httpService.get('assets/data/data.json');
  }
}
