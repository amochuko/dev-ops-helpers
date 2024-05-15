import { isValidURL } from '../validations';

describe('Validations', () => {
  it('should return true if url is valid', () => {
    const urls = [
      'http://windows.com',
      'https://windows.com',
      'ftp://windows.com',
      'ftps://windows.com',
    ];
    urls.forEach(url => {
      const res = isValidURL(url);

      expect(res).toBeTruthy();
    });
  });

  it('should return false  if url is invalid', () => {
    const urls = ['htt://windows', '//windows.com'];
    urls.forEach(url => {
      const res = isValidURL(url);

      expect(res).not.toBeTruthy();
    });
  });
});
