import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataResponse } from '../model/data-source.model';
import { defaultResponse } from './mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loadData$(): Observable<DataResponse> {
    return of(defaultResponse);
  }

}
