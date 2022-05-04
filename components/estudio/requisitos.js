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
          <div className="w-full h-full object-cover">
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
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {t('estudia:requisitos_title')}
          </p>
          <p className="mt-6 max-w-3xl text-xl text-neutral-300">
            {t('estudia:requisitos_subtitle')}
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          {t('estudia:requisitos_sr')}
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {requisitos.map((requisito) => (
            <div
              key={requisito.name}
              className="flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-none shadow-none pb-6"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-gold-600 rounded-none shadow-none transform -translate-y-1/2">
                  <p className="text-white">{requisito.step}</p>
                </div>
                <h3 className="text-xl font-medium text-neutral-900">
                  {requisito.name}
                </h3>
                <p className="mt-4 text-base text-neutral-500">
                  {requisito.description}
                </p>
                <p className="mt-4 text-base text-neutral-500">
                  {requisito.description_02}
                </p>
                <p className="mt-4 text-base text-neutral-500">
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
