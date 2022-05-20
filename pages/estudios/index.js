import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Estudios() {
  const { t } = useTranslation();

  const estudios = [
    {
      id: 1,
      name: `${t('estudios:estudio_violin')}`,
      href: '/estudios/violin',
      imageSrc: '/static/estudia/violin.jpg',
    },
    {
      id: 2,
      name: `${t('estudios:estudio_piano')}`,
      href: '/estudios/piano',
      imageSrc: '/static/estudia/piano/piano_02.jpg',
    },
    {
      id: 3,
      name: `${t('estudios:estudio_violonchelo')}`,
      href: '/estudios/violonchelo',
      imageSrc: '/static/estudia/cello.jpg',
    },
    {
      id: 4,
      name: `${t('estudios:estudio_voz')}`,
      href: '/estudios/voz',
      imageSrc: '/static/estudia/voice/voz.jpg',
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto bg-white max-w-7xl sm:py-24 sm:px-6 lg:px-8">
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

      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {estudios.map((estudio) => (
            <div key={estudio.id} className="relative group">
              <div className="overflow-hidden rounded-none bg-neutral-100 aspect-w-4 aspect-h-3">
                <div className="object-cover object-center">
                  <Image
                    src={estudio.imageSrc}
                    alt={estudio.name}
                    width={640}
                    height={960}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
                <div
                  className="flex items-start p-4 transition duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center bg-white bg-opacity-50 rounded-none text-neutral-900 backdrop-filter backdrop-blur">
                    {t('estudios:estudio_ver')}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-lg font-bold tracking-tight text-neutral-900">
                <h3>
                  <a href={estudio.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {estudio.name}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
