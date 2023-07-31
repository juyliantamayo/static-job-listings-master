import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
}
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
/*
 {
    id: 10,
    company: 'The Air Filter Company',
    logo: '/assets/images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
*/
export class CardListComponent {
  @Input() job!: Job;
  @Output() filter = new EventEmitter();

  filterAction(item: string) {
    this.filter.emit(item);
  }

  constructor() {}
}
