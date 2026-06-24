import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';

// Lista sencilla de los programas que ofrece la Academia.
// Los detalles completos viven en el PDF descargable, así que esta lista
// es fácil de editar aquí mismo cuando cambie la oferta.
const programasES = [
  'Estudio de Violín y Viola',
  'Cursos Intensivos (cuerda, piano, viento y voz)',
  'Programa de Sonatas «George Enescu» (para pianistas)',
  'Programa de Música de Cámara «Lucien Capet» (para grupos formados)',
  'Agrupaciones Orquestales: JOAG y OAG',
];

const programasEN = [
  'Violin & Viola Study',
  'Intensive Courses (strings, piano, wind & voice)',
  '«George Enescu» Sonatas Programme (for pianists)',
  '«Lucien Capet» Chamber Music Programme (for formed groups)',
  'Orchestral Ensembles: JOAG & OAG',
];

export default function Estudios() {
  const { t, lang } = useTranslation();
  const programas = lang === 'en' ? programasEN : programasES;

  return (
    <Layout
      title={t('layout:estudios_title')}
      description={t('layout:estudios_description')}
      keywords={t('layout:estudios_keywords')}
    >
      <div className="py-24 bg-white sm:py-32">
        <div className="max-w-3xl px-6 mx-auto lg:px-8">
          <div className="text-center">
            <h2 className="mt-1 text-4xl font-semibold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {t('estudios:estudios_title_part_1')}{' '}
              <span className="font-bold text-gold-600">
                {t('estudios:estudios_title_part_2')}
              </span>{' '}
              {t('estudios:estudios_title_part_3')}
            </h2>
            <p className="max-w-xl mx-auto mt-5 text-xl text-neutral-600">
              {t('estudios:estudios_text')}
            </p>
          </div>

          {/* Lista de programas */}
          <ul
            role="list"
            className="max-w-2xl mx-auto mt-12 border-t border-b divide-y border-neutral-200 divide-neutral-200"
          >
            {programas.map((programa) => (
              <li
                key={programa}
                className="flex items-start py-5 text-lg text-neutral-800"
              >
                <span
                  className="mr-4 font-bold text-gold-600"
                  aria-hidden="true"
                >
                  &#9834;
                </span>
                {programa}
              </li>
            ))}
          </ul>

          {/* Descarga PDF con la información detallada */}
          <div className="flex justify-center mt-12 group">
            <a
              download
              href="/Programas-de-estudio-Academia-Galamian-2026-2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500/20 py-2 px-4 rounded-full font-semibold text-neutral-700 group-hover:bg-gold-500/30 group-hover:text-neutral-900 transition-all duration-150 ease-in-out"
            >
              {t('estudios:download_pdf')}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
