export const __is_prod__ = process.env.NODE_ENV === 'production';

export const __jwt__ = {
  name: process.env.JWT_NAME || 'krouspy-twitter-clone-dev',
  secret: process.env.JWT_SECRET || 'krouspy-twitter-clone-secret-dev',
};

export const colors = {
  dark: '#000101',
  white: '#fff',
  gray: '#6F777D',
  darkGray: '#14191C',
};
