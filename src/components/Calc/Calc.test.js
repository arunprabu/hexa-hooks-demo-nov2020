import Calc, { add } from './Calc';

it('should be defined', () => {
  expect(Calc).toBeDefined();
});

it('should add two numbers', () => {
  expect(add(10, 20)).toEqual(30);
});
