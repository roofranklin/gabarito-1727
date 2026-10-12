import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve retornar o texto inalterado quando menor ou igual ao limite', () => {
    expect(pipe.transform('Texto curto', 20)).toBe('Texto curto');
  });

  it('deve truncar o texto e adicionar reticencias quando maior que o limite', () => {
    expect(pipe.transform('Texto muito longo para o limite', 10)).toBe('Texto muit...');
  });

  it('deve retornar string vazia para valores nulos ou indefinidos', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
