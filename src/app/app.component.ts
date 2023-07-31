import { Component, OnInit } from '@angular/core';
import { JsonDataService } from './service/json-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any[] = [];
  allData:any[] =[];
  filter: any[] = [];
  isFiltering: boolean = false;
  constructor(private jsonService: JsonDataService) {}
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data: any) => {
      this.data = data;
      this.allData = data;
    });
  }

  clearFilter(event: any) {
    this.filter = [];
    this.isFiltering = false;
    this.data = this.allData;
  }
  removeFilter(event: any) {
    this.filter = this.filter.filter((item) => item !== event);
    this.isFiltering = this.filter.length > 0;

    this.filterData();
  }
  addFilter(event: any) {
    if (!this.filter.includes(event)) {
      this.filter.push(event);
      this.isFiltering = true;
    }
    this.filterData();
  }
  filterData() {
    this.data = this.allData.filter((item) => {
      return (
        this.filter.includes(item.role) ||
        this.filter.includes(item.level) ||
        item.languages.some((language: any) =>
          this.filter.includes(language)
        ) ||
        item.tools.some((tool: any) => this.filter.includes(tool))
      );
    });
  }
}
