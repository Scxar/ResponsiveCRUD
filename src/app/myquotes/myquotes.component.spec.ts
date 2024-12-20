import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquotesComponent } from './myquotes.component';

describe('MyquotesComponent', () => {
  let component: MyquotesComponent;
  let fixture: ComponentFixture<MyquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyquotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
