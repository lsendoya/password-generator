export function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecials) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_+=<>?';

  let allowedChars = '';
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSpecials) allowedChars += specialChars;

  if (allowedChars.length === 0) {
    console.error('You must select at least one character type.');
    return '';
  }

  let generatedPassword = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars.charAt(randomIndex);
  }

  return generatedPassword;
}
