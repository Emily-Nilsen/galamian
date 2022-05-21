import Image from 'next/image';
import FAQs from './faqs';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Requisitos() {
  const { t } = useTranslation();

  const features = [
    {
      name: `${t('galamianJunior:matricula_title')}`,
      description_01: `${t('galamianJunior:matricula_text_1')}`,
      description_02: `${t('galamianJunior:matricula_text_2')}`,
      imageSrc: '/static/galamian-junior/admission.jpg',
      imageAlt: 'La matrícula de la Academia Galamian',
    },
    {
      name: `${t('common:becas_title')}`,
      description_01: `${t('common:becas_text_1')}`,
      description_02: `${t('common:becas_text_2')}`,
      description_03: `${t(
        'common:becas_text_3'
      )} ${new Date().getFullYear()}.`,
      imageSrc: '/static/galamian-junior/becas.jpg',
      imageAlt: 'La Academia Galamian y su Joven Orquesta',
    },
    {
      name: `${t('common:titulacion_title')}`,
      description_01: `${t('common:titulacion_text_1')}`,
      description_02: `${t('common:titulacion_text_2')}`,
      description_03: `${t('common:titulacion_text_3')}`,
      imageSrc: '/static/galamian-junior/titulacion.jpg',
      imageAlt: 'Joven Orquesta de la Academia Galamian',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-12 mx-auto sm:px-6 lg:py-24 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5 text-center sm:mx-auto sm:space-y-4">
          <h2 className="font-medium leading-6 tracking-tight uppercase text-neutral-900">
            {t('common:requisitos_subtitle')}
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t('common:requisitos_title_part_1')}{' '}
            <span className="font-bold text-gold-600">
              {t('common:requisitos_title_part_2')}
            </span>{' '}
          </h2>
          <p className="text-lg text-neutral-600">
            {t('common:requisitos_text')}
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-1'
                    : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-neutral-600">
                  {feature.description_01}
                </p>
                <p className="mt-2 text-base text-neutral-600">
                  {feature.description_02}
                </p>
                <p className="mt-2 text-base text-neutral-600">
                  {feature.description_03}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-6 xl:col-start-5'
                    : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="overflow-hidden aspect-w-5 aspect-h-2 bg-neutral-100">
                  <div className="overflow-hidden">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={500}
                      height={200}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQs />
    </div>
  );
}
