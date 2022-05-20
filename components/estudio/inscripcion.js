import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/estudio/cta';
import { CheckIcon } from '@heroicons/react/outline';
import { CameraIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Inscripcion() {
  const { t } = useTranslation();

  const documentos = [
    {
      name: `${t('estudia:enrolment_list_title_1')}`,
      description: `${t('estudia:enrolment_list_text_1')}`,
    },
    {
      name: `${t('estudia:enrolment_list_title_2')}`,
      description: `${t('estudia:enrolment_list_text_2')}`,
    },
    {
      name: `${t('estudia:enrolment_list_title_3')}`,
      description: `${t('estudia:enrolment_list_text_3')}`,
    },
    {
      name: `${t('estudia:enrolment_list_title_4')}`,
      description: `${t('estudia:enrolment_list_text_4')}`,
    },
  ];

  return (
    <section className="overflow-hidden bg-white">
      <div>
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="font-normal leading-6 tracking-tight uppercase text-neutral-900">
                {t('estudia:enrolment_title_1')}
              </h2>
              <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                <span className="font-bold text-gold-600">
                  {t('estudia:enrolment_title_2')}
                </span>
                <span className="block">{t('estudia:enrolment_title_3')}</span>

                <span className="font-bold text-gold-600">
                  {t('estudia:enrolment_title_4')}
                </span>
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={2}
                      height={4}
                      className="text-neutral-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <div className="object-cover object-center overflow-hidden shadow-none">
                      <Image
                        src="/static/estudia/inscripcion.jpeg"
                        alt="Sala Unicaja de Conciertos María Cristina"
                        width={1720}
                        height={1147}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    </div>
                  </div>
                  <figcaption className="flex mt-3 text-sm text-neutral-700">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      {t('common:estudiar_photo_caption_1')}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <h2>
                  <span className="block mt-2 text-xl font-semibold leading-8 tracking-tight text-neutral-800 sm:text-2xl">
                    {t('estudia:enrolment_title_5')}
                  </span>
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  {t('estudia:enrolment_para_1_1')} {new Date().getFullYear()}/
                  {new Date().getFullYear() + 1}
                  {t('estudia:enrolment_para_1_2')}
                </p>
              </div>
              <div className="mx-auto mt-5 prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  {t('estudia:enrolment_para_2_1')}{' '}
                  <span className="font-bold">
                    {t('estudia:enrolment_para_2_2')}
                  </span>
                  .
                </p>
                <p>
                  {t('estudia:enrolment_para_3_1')}{' '}
                  <span className="font-bold">
                    {' '}
                    {t('estudia:enrolment_para_3_2')}
                    {new Date().getFullYear()}
                  </span>
                  .
                </p>
                <p>{t('estudia:enrolment_para_4')}</p>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-800">
                  {t('estudia:enrolment_subtitle')}
                </h3>
                <div className="lg:mt-0">
                  <dl className="space-y-10 ">
                    {documentos.map((documento) => (
                      <div key={documento.name} className="relative">
                        <dt>
                          <CheckIcon
                            className="absolute w-6 h-6 text-lime-500"
                            aria-hidden="true"
                          />
                          <p className="text-lg font-semibold leading-6 ml-9 text-neutral-800">
                            {documento.name}
                          </p>
                        </dt>
                        <dd className="-mt-4 text-base ml-9 text-neutral-600">
                          {documento.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
