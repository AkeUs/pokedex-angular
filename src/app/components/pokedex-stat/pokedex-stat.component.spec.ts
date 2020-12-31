import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexStatComponent } from './pokedex-stat.component';

describe('PokedexStatComponent', () => {
  let component: PokedexStatComponent;
  let fixture: ComponentFixture<PokedexStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
