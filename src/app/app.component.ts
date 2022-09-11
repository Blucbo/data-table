import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PageConfig } from './model/data-source.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mlb';

  public listData$ = this.dataService.loadData$().pipe(
    map(res => res.content || [])
  );

  public config$: Observable<PageConfig> = this.dataService.loadData$().pipe(
    map(({size, totalElements, totalPages}) => ({size, totalElements, totalPages}))
  );

  constructor(private dataService: DataService) {

  }
}
