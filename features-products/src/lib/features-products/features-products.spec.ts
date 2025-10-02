import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesProducts } from './features-products';

describe('FeaturesProducts', () => {
  let component: FeaturesProducts;
  let fixture: ComponentFixture<FeaturesProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
