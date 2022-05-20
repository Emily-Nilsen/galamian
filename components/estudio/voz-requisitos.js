import Image from 'next/image';
import FAQs from '../galamian-junior/faqs';
import useTranslation from 'next-translate/useTranslation';
import { CheckIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function VozRequisitos() {
  const { t } = useTranslation();

  const features = [
    {
      name: `${t('common:becas_title')}`,
      description_01: `${t('common:becas_text_1')}`,
      description_02: `${t('common:becas_text_2')}`,
      description_03: `${t(
        'common:becas_text_3'
      )} ${new Date().getFullYear()}.`,
      imageSrc: '/static/estudia/voice/voice-photo-img-05.webp',
      imageAlt: 'Estudio de Voz',
    },
    {
      name: `${t('common:practicas_title')}`,
      description_01: `${t('common:practicas_text_1')}`,
      description_02: `${t(
        'common:practicas_text_2'
      )}${new Date().getFullYear()}.`,
      description_03: `${t(
        'common:practicas_text_3_part_1'
      )}${new Date().getFullYear()}`,
      description_04: `${t('common:practicas_text_3_part_2')}.`,
      subtitle: `${t('common:practicas_subtitle')}`,
      list_1: `${t('common:practicas_item_1')}`,
      list_2: `${t('common:practicas_item_2')}`,
      list_3: `${t('common:practicas_item_3')}`,
      imageSrc: '/static/estudia/voice/voice-photo-img-03.webp',
      imageAlt: 'Estudio de Voz',
    },
    {
      name: `${t('common:titulacion_title')}`,
      description_01: `${t('common:titulacion_text_1')}`,
      description_02: `${t('common:titulacion_text_2')}`,
      description_03: `${t('common:titulacion_text_3')}`,
      imageSrc: '/static/estudia/voice/voice-photo-img-04.webp',
      imageAlt: 'Estudio de Voz',
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
          <p className="mt-4 text-neutral-600">{t('common:requisitos_text')}</p>
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
                  <span>{feature.description_04}</span>
                </p>
                {feature.subtitle ? (
                  <>
                    {' '}
                    <h3 className="pt-6 mb-4 text-base font-semibold text-neutral-900 sm:text-lg">
                      {feature.subtitle}
                    </h3>
                    <ul role="list">
                      <li className="pb-3 list-none text-neutral-600">
                        <CheckIcon
                          className="absolute w-6 h-6 text-lime-500"
                          aria-hidden="true"
                        />
                        <p className="text-base ml-9">{feature.list_1}</p>
                      </li>
                      <li className="pb-3 list-none text-neutral-600">
                        <CheckIcon
                          className="absolute w-6 h-6 text-lime-500"
                          aria-hidden="true"
                        />
                        <p className="text-base ml-9">{feature.list_2}</p>
                      </li>
                      <li className="pb-3 list-none text-neutral-600 ">
                        <CheckIcon
                          className="absolute w-6 h-6 text-lime-500"
                          aria-hidden="true"
                        />
                        <p className="text-base ml-9">{feature.list_3}</p>
                      </li>
                    </ul>
                  </>
                ) : (
                  ''
                )}
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
                      width={4088}
                      height={2725}
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
