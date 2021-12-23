module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c072c0702d3cc607d3fe3d91588564f7'),
  },
});
