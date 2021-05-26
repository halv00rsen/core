import { isValidEmail } from './email';

describe('email', () => {
  const invalidEmails = ['', 'hei', 'hei@', 'hei@hei'];
  const validEmails = [
    'e@e.no',
    'jorgen@jorgen.jorgen',
    'en@to.tre',
    'en.to.tre@fire.fem.no',
  ];

  test('valid email', () => {
    validEmails.forEach((email) => expect(isValidEmail(email)).toBeTruthy());
  });

  test('invalid emails', () => {
    invalidEmails.forEach((email) => expect(isValidEmail(email)).toBeFalsy());
  });
});
