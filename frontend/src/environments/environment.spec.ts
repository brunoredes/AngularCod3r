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
    test('should environment baseUrl port be a number with four digits', () => {
      const port = env.environment.baseUrl.substr(17);
      const validNumberPort = /[0-9]{4}/.test(port);
      expect(validNumberPort).toBe(true);
    });
  });

  describe('Production environment', () => {
    expect(environment.production).toBe(true);
  });
});
