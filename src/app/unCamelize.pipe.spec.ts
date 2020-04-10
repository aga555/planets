import { UnCamelizePipe } from './unCamelize.pipe';

describe('UncamelizePipe', () => {
  it('create an instance', () => {
    const pipe = new UnCamelizePipe();
    expect(pipe).toBeTruthy();
  });
});
