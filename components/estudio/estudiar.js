import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function Estudiar() {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="font-normal leading-6 tracking-tight uppercase text-neutral-900">
              {t('common:estudiar_subtitle')}
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
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover object-center overflow-hidden shadow-none"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712311/Galamian/general/sala-unicaja_y7yrjh.jpg"
                      alt="Sala Fundación Unicaja Mª Cristina"
                      width={1720}
                      height={1147}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
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
                  {t('estudia:estudiar_title')}
                </span>
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                {t('estudia:estudiar_para_1')}
              </p>
            </div>
            <div className="mx-auto mt-5 prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                {t('estudia:estudiar_para_2_1')}
                {new Date().getFullYear()}/{new Date().getFullYear() + 1}
                {t('estudia:estudiar_para_2_2')}
              </p>
              <ul role="list">
                <li>{t('estudia:estudiar_list_1')}</li>
                <li>{t('estudia:estudiar_list_2')}</li>
                <li>{t('estudia:estudiar_list_3')}</li>
                <li>{t('estudia:estudiar_list_4')}</li>
                <li>{t('estudia:estudiar_list_5')}</li>
                <li>{t('estudia:estudiar_list_6')}</li>
                <li>{t('estudia:estudiar_list_7')}</li>
                <li>{t('estudia:estudiar_list_8')}</li>
                <li>{t('estudia:estudiar_list_9')}</li>
              </ul>

              <div className="mt-10">
                <Link href="/estudia/formulario-de-inscripcion" passHref>
                  <a className="text-base font-semibold tracking-tight no-underline transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900">
                    {' '}
                    {t('common:button_solicita_1')}
                    {new Date().getFullYear()}/{new Date().getFullYear() + 1}{' '}
                    {t('common:button_solicita_2')}{' '}
                    <span aria-hidden="true">&rarr;</span>{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
