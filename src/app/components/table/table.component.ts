import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity, PageConfig, UserComment } from 'src/app/model/data-source.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  @Input()
  list!: Entity[] | null;

  @Input()
  pageConfig!: PageConfig | null;

  @Output() nextPage = new EventEmitter<void>();
  @Output() previousPage = new EventEmitter<void>();

  comments: UserComment[] = []

  constructor() { }

  trackItem(_index: number, item: Entity): string {
    return item.id;
  }

  toggleComments(comments: UserComment[] | null): void {
    this.comments = comments || [];
  }

}
