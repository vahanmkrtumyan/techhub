const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://techhub.am'
    : 'http://localhost:3000';

export default baseUrl;
