import http from 'http';

export default function request(url: string) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch user data from an API.
    // This module is being mocked in __mocks_/request.ts

    http.get({ path: url }, res => {
      let data = '';
      res.on('data', _data => (data += _data));
      res.on('end', () => resolve(data));
    });
  });
}
