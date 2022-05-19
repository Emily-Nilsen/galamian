import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Requisitos() {
  const { t } = useTranslation();

  const requisitos = [
    {
      name: `${t('estudia:requirement_1_title')}`,
      step: '1',
      description: `${t('estudia:requirement_1_para_1')}`,
      description_02: `${t('estudia:requirement_1_para_2')}`,
    },
    {
      name: `${t('estudia:requirement_2_title')}`,
      step: '2',
      description: `${t('estudia:requirement_2_para_1')}`,
      description_02: `${t('estudia:requirement_2_para_2')}`,
      description_03: `${t('estudia:requirement_2_para_3')}`,
    },
    {
      name: `${t('estudia:requirement_3_title')}`,
      step: '3',
      description: `${t('estudia:requirement_3_para_1')}`,
      description_02: `${t(
        'estudia:requirement_3_para_2_1'
      )}${new Date().getFullYear()}/${new Date().getFullYear() + 1}${t(
        'estudia:requirement_3_para_2_2'
      )}`,
      description_03: `${t('estudia:requirement_2_para_3')}`,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-neutral-800">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
            <Image
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              src="/static/estudia/requisitos.jpg"
              alt=""
              width={1920}
              height={1280}
            />
          </div>
          <div
            className="absolute inset-0 bg-neutral-600 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
            {t('estudia:requisitos_title')}
          </h2>
          <p className="max-w-3xl mt-6 text-xl text-neutral-300">
            {t('estudia:requisitos_subtitle')}
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          {t('estudia:requisitos_sr')}
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {requisitos.map((requisito) => (
            <div
              key={requisito.name}
              className="flex flex-col pb-6 rounded-none shadow-none bg-gradient-to-b from-neutral-50 to-neutral-100"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block px-6 py-4 transform -translate-y-1/2 rounded-none rounded-full shadow-none bg-gold-600">
                  <h2 className="text-lg font-bold text-white">
                    {requisito.step}
                  </h2>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  {requisito.name}
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {requisito.description}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {requisito.description_02}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {requisito.description_03}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
