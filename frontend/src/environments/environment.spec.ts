import * as env from './environment';
import { environment } from './environment.prod';

describe('Environment tests', () => {

  describe('Development environment', () => {

    test("shouldn't environment production be true", () => {
      expect(env.environment.production).toBe(false);
    });
    test('should environment baseUrl be localhost followed by a port', () => {
      expect(env.environment.baseUrl).toBe('http://localhost:3000');
    });
  });

  describe('Production environment', () => {
    expect(environment.production).toBe(true);
  });
});
