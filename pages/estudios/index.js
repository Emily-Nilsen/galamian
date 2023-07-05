import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const estudios = [
  {
    id: 1,
    title: 'Estudio de Violín y Viola',
    href: '/estudios/violin',
    description: `Clases magistrales individuales, música de cámara, conciertos y proyectos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-study-img-3_cnh2ey.webp',
    category: [{ title: 'Violín' }, { title: `Viola` }],
    details: {
      age: 'Todas las edades',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Estudio de Piano',
    href: '/estudios/piano',
    description: `Lecciones individuales, clases magistrales, música de cámara, conciertos y prácticas de desarrollo de proyectos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/Piano_thumbnail_rd3cg7.webp',
    category: [{ title: 'Piano' }],
    details: {
      age: 'Todas las edades',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Estudio de Violonchelo',
    href: '/estudios/violonchelo',
    description: `Formación integral: clases individuales, clases grupales, profesores invitados, música de cámara, conciertos y más.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/Violonchelo_thumbnail_ujeqen.webp',
    category: [{ title: `Violonchelo` }],
    details: {
      age: 'Todas las edades',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Estudio de Voz',
    href: '/estudios/voz',
    description: `Alumnos reciben instrucción dedicada a través de clases magistrales, talleres y eventos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/voice/voice-photo-img-05_acbsra.webp',
    category: [{ title: `Voz` }],
    details: {
      age: 'Todas las edades',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Galamian Junior',
    href: '/galamian-junior',
    description: `Para los mas jóvenes desde los inicios hasta un nivel mas avanzado.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/Galamian_Junior_jiqymj.webp',
    category: [{ title: 'Violín' }, { title: `Viola` }],
    details: {
      age: 'Approx. 4-10 años',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'Jóvenes Artistas',
    href: '/estudios/jovenes-artistas',
    description: `Clases particulares y magistrales, interpretación en grupo. Incluye participación en la Joven Orquesta Academia Galamian.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/JOVEN_ARTISTA_tn6m6w.webp',
    category: [
      { title: 'Violín' },
      { title: `Viola` },
      { title: `Violonchelo` },
    ],
    details: {
      age: 'Approx. 8-16 años',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 7,
    title: 'Artist Diploma «Yehudi Menuhin»',
    href: '/estudios/artist-diploma',
    description: `Diploma para músicos profesionales. Enfoque en repertorio, clases, recitales y actividades adicionales opcionales.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-photo-08_a81srr.webp',
    category: [
      { title: 'Violín' },
      { title: `Viola` },
      { title: `Violonchelo` },
    ],
    details: {
      age: 'Haber terminado el Superior o nivel similar',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 8,
    title: 'Programa de Sonatas «George Enescu» para pianistas',
    href: '/estudios/programa-de-sonatas',
    description: `Programa para pianistas que exploran el repertorio de sonatas a dúo con clases colaborativas y conciertos públicos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/piano/piano-study-img-1_raeugc.webp',
    category: [{ title: 'Piano' }],
    details: {
      age: 'Edad libre',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 9,
    title: 'Programa de Música de Cámara «Lucien Capet» - para grupos formados',
    href: '/estudios/programa-de-musica-de-camara',
    description: `Música de cámara destaca en formación de Academia Galamian. Programa con clases magistrales y conciertos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/estudia_eabbpn.jpg',
    category: [{ title: 'Dúos' }, { title: 'Tríos' }, { title: 'Cuartetos' }],
    details: {
      age: 'Edad libre',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 10,
    title: 'Joven Orquesta Academia Galamian',
    href: '/estudios/joag',
    description: `La JOAG ofrece oportunidades sinfónicas a jóvenes músicos, fomentando capacidades y experiencias profesionales.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/JOAG_igc3qm.webp',
    category: [{ title: 'JOAG' }],
    details: {
      age: '10-17 años',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 11,
    title: 'Orquesta Academia Galamian',
    href: '/estudios/oag',
    description: `La OAG promueve la interpretación orquestal con ensayos meticulosos, profesionales destacados y exigentes conciertos.`,
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/OAG_orquesta_2_xj67es.webp',
    category: [{ title: 'OAG' }],
    details: {
      age: '18 años en adelante',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Estudios() {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('layout:estudios_title')}
      description={t('layout:estudios_description')}
      keywords={t('layout:estudios_keywords')}
    >
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-center">
              <h2 className="mt-1 text-4xl font-semibold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                {t('estudios:estudios_title_part_1')}{' '}
                <span className="font-bold text-gold-600">
                  {' '}
                  {t('estudios:estudios_title_part_2')}
                </span>{' '}
                {t('estudios:estudios_title_part_3')}
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-xl text-neutral-600">
                {t('estudios:estudios_text')}
              </p>
            </div>
            <div className="flex justify-center mt-10 group">
              <a
                download
                href="/Programas-de-estudio-Academia-Galamian-2023-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500/20 py-1.5 px-3 rounded-full font-semibold text-neutral-700 group-hover:bg-gold-500/30 group-hover:text-neutral-900 transition-all duration-150 ease-in-out"
              >
                Descarga PDF
              </a>
            </div>
          </div>
          <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {estudios.map((estudio) => (
              <article
                key={estudio.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    src={estudio.imageUrl}
                    alt={estudio.title}
                    className="aspect-[16/9] w-full rounded-none bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-none ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="flex items-center mt-8 text-xs gap-x-1">
                    {estudio.category.map((cat, i) => (
                      <div
                        key={i}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                      >
                        {cat.title}
                      </div>
                    ))}
                  </div>
                  <div className="relative w-full group">
                    <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a className="font-bold" href={estudio.href}>
                        <span className="absolute inset-0" />
                        {estudio.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {estudio.description}
                    </p>
                  </div>
                  <div className="relative flex items-center justify-between w-full mt-8">
                    <div className="flex items-center gap-x-4">
                      <div className="flex flex-none">
                        <Image
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/edad_recommendada_ozzhrv.webp"
                          alt="Edad recomendada"
                          className="w-10 h-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="leading-6">
                        <p className="text-sm text-gray-600">
                          {estudio.details.age}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none ml-2">
                      <p className="mr-2 text-sm text-gray-900">
                        <Link href={estudio.href}>
                          <a className="font-bold rounded-full bg-gray-50 px-3 py-1.5 hover:bg-gray-100 transition duration-150 ease-in-out">
                            <span className="absolute inset-0" />
                            Ver más detalles{' '}
                            <span aria-hidden="true">&rarr;</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
