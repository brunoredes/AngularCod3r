import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('Home component Tests', () => {
  test('CreateHomeComponent', () => {
    expect(HomeComponent).toBeTruthy();
  });

  test('should return title of HomeComponent', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.welcome).toEqual('Bem vindo!');
  });

});
