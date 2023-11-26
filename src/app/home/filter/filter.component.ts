import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  @Input() jobFilter: string = '';
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  onFilterChange(event: any) {
    this.filterChanged.emit(event.target.value);
  }
}