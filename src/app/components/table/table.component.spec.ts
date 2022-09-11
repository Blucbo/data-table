import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Entity } from 'src/app/model/data-source.model';

import { TableComponent } from './table.component';

const mockList: Entity[] = [
  {
    "id": "d9ea570e-21d2-423f-8dd6",
    "image": "https://i.imgur.com/WYLbwn2.gif",
    "name": "BigCollection6",
    "audienceType": "INTERNAL",
    "status": "CREATED",
    "organisation": {
      "id": "97ce0753-b675-4463-b94f",
      "name": " TestOrg"
    },
    "region": "APAC",
    "campaignId": null,
    "campaignName": null,
    "watchers": ["test.user@example.com"],
    "dueDate": null,
    "lastModifiedDate": "2021-08-16T13:11:54Z",
    "lastModifiedBy": "test.user",
    "createdDate": "2021-08-16T13:11:53Z",
    "createdBy": "test.user",
    "comments": null,
    "type": "BRANDED",
    "workOrderId": 1104,
    "sceneCount": 50
  }
];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.pageConfig = { size: 1, totalElements: 15, totalPages: 1 };

    fixture.detectChanges();
  });

  it('Should show info if list empty and hide table', () => {
    component.list = []
    component.pageConfig = { size: 1, totalElements: 15, totalPages: 1 };

    fixture.detectChanges();
    const emptyBLock = fixture.nativeElement.querySelector('#emptyList');
    const tableEl = fixture.nativeElement.querySelector('table');

    expect(emptyBLock).toBeDefined();
    expect(tableEl).toBeNull();
    expect(emptyBLock.textContent).toContain('No data');
  });

  it('Should show table if list filled', () => {
    component.list = mockList;
    component.pageConfig = { size: 1, totalElements: 15, totalPages: 1 };

    fixture.detectChanges();
    const tableEl = fixture.nativeElement.querySelector('table');

    expect(tableEl).toBeDefined();
  });

});
