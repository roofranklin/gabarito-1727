import { DiscountPipe } from './discount-pipe';

describe('DiscountPipe', () => {
  const pipe = new DiscountPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve aplicar 10% de desconto corretamente', () => {
    expect(pipe.transform(100, 10)).toBe(90);
  });

  it('deve aplicar 15% de desconto corretamente', () => {
    expect(pipe.transform(200, 15)).toBe(170);
  });

  it('deve retornar 0 para valores nulos ou indefinidos', () => {
    expect(pipe.transform(null)).toBe(0);
    expect(pipe.transform(undefined)).toBe(0);
  });
});
