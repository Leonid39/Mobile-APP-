import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsSinglePage } from './news-single.page';

describe('NewsSinglePage', () => {
  let component: NewsSinglePage;
  let fixture: ComponentFixture<NewsSinglePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
