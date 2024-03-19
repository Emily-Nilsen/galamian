import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function SalaUnicaja() {
  const { t } = useTranslation();

  const features = [
    {
      name: `${t('academia:unicaja_subtitle')}`,
      sentence_01: `${t('academia:unicaja_text_1')}`,
      sentence_02: `${t('academia:unicaja_text_2')}`,
      sentence_03: `${t('academia:unicaja_text_3')}`,
    },
  ];
  return (
    <section id="salaUnicaja" className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="pb-10 border-b border-neutral-200">
              <h2 className="font-medium tracking-tight text-neutral-900">
                {t('academia:unicaja_title_1')}
              </h2>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gold-600 sm:text-4xl">
                {t('academia:unicaja_title_2')}
              </h2>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-xl font-bold tracking-tight text-neutral-900">
                    <h3>{feature.name}</h3>
                  </dt>
                  <dd className="mt-3 text-base text-neutral-600">
                    {feature.sentence_01}
                  </dd>
                  <dd className="mt-3 text-base text-neutral-600">
                    {feature.sentence_02}
                  </dd>
                  <dd className="mt-3 text-base text-neutral-600">
                    {feature.sentence_03}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a
                href="https://www.fundacionunicaja.com/cultura/nuestros-centros/sala-unicaja-de-conciertos-maria-cristina/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold tracking-tight transition duration-300 ease-in-out hover:text-neutral-900 text-gold-600"
              >
                {' '}
                {t('common:button_unicaja')}{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>

          <div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="overflow-hidden shadow-none aspect-w-1 aspect-h-1 bg-neutral-100"
            >
              <div className="object-cover object-center w-full h-full">
                <Image
                  unoptimized={true}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712312/Galamian/general/unicaja-2_f8u4e2.webp"
                  alt="Sala Fundación Unicaja Mª Cristina"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden shadow-none aspect-w-1 aspect-h-1 bg-neutral-100"
              >
                <div className="object-cover object-center w-full h-full">
                  <Image
                    unoptimized={true}
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712312/Galamian/general/unicaja-3_gcatci.webp"
                    alt="Sala Fundación Unicaja Mª Cristina"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden shadow-none aspect-w-1 aspect-h-1 bg-neutral-100"
              >
                <div className="object-cover object-center w-full h-full">
                  <Image
                    unoptimized={true}
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712312/Galamian/general/unicaja-1_qmlb6b.webp"
                    alt="Sala Fundación Unicaja Mª Cristina"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
