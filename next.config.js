/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
  async redirects() {
    return [
      // The old "estudia" landing page held outdated info — fold it into the
      // enrolment page, which now lives at the cleaner /inscripcion URL.
      {
        source: '/estudia',
        destination: '/inscripcion',
        permanent: true,
      },
      {
        source: '/estudia/formulario-de-inscripcion',
        destination: '/inscripcion',
        permanent: true,
      },
    ];
  },
};
