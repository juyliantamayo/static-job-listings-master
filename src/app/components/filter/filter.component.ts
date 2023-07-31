import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() clearFilter = new EventEmitter();
  @Output() removeFilter = new EventEmitter();
  @Input() filters: any[] =  [];

  clearFilterAction() {
    this.clearFilter.emit();
  }

  removeFilterAction(item: any) {
    this.removeFilter.emit(item);
  }
}
