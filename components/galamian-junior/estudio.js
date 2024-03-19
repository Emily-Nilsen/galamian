import Image from 'next/image';
import Link from 'next/link';
import Lecciones from './lecciones';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function EstudioJunior() {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="font-medium leading-6 tracking-tight uppercase text-neutral-900">
              {t('galamianJunior:estudio_subtitle')}
            </h2>
            <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
              {t('galamianJunior:estudio_title')}{' '}
              <span className="font-bold text-gold-600">Junior</span>
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
                    width={4}
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
                      duration: 0.8,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover object-center overflow-hidden shadow-none"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653713700/Galamian/Galamian%20Junior/estudio_cfejpd.jpg"
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
                <figcaption className="flex mt-3 text-sm text-neutral-600">
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
              <p className="text-lg text-neutral-600">
                {t('galamianJunior:estudio_para_01_part_1')}{' '}
                {new Date().getFullYear()}{' '}
                {t('galamianJunior:estudio_para_01_part_2')}{' '}
                {new Date().getFullYear() + 1}
                {t('galamianJunior:estudio_para_01_part_3')}
              </p>
            </div>
            <div className="pb-6 mx-auto mt-5 prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1 lg:pb-0">
              <ul role="list">
                <li>{t('galamianJunior:estudio_list_item_01')}</li>
                <li>{t('galamianJunior:estudio_list_item_02')}</li>
                <li>{t('galamianJunior:estudio_list_item_03')}</li>
                <li>{t('galamianJunior:estudio_list_item_04')}</li>
                <li>{t('galamianJunior:estudio_list_item_05')}</li>
                <li>
                  {t('galamianJunior:estudio_list_item_06_part_1')}{' '}
                  <span className="italic">
                    {t('galamianJunior:estudio_list_item_06_part_2')}
                  </span>
                </li>
                <li>{t('galamianJunior:estudio_list_item_07')}</li>
                <li>{t('galamianJunior:estudio_list_item_08')}</li>
              </ul>
              <p>{t('galamianJunior:estudio_para_02')}</p>
              <p>{t('galamianJunior:estudio_para_03')}</p>
              <h3 className="tracking-tight">
                {t('galamianJunior:lecciones_title')}
              </h3>
              <p>{t('galamianJunior:lecciones_text')}</p>
            </div>
          </div>
          <Lecciones />
          <div className="mt-10">
            <Link href="/estudia/formulario-de-inscripcion" passHref>
              <a className="text-base font-semibold tracking-tight no-underline transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900">
                {' '}
                {t('common:button_solicita_una_plaza')}{' '}
                {new Date().getFullYear()}/{new Date().getFullYear() + 1}{' '}
                {t('common:button_course')}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
