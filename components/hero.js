import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-neutral-100" />
            <div className="mx-auto max-w-7xl">
              <div className="relative h-[50vh]">
                <div className="absolute inset-0">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover w-full h-full"
                  >
                    <Image
                      unoptimized={true}
                      src="/media/estudiar.jpg"
                      alt="Sala Unicaja Maria Christina"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 mix-blend-multiply" />
                </div>
                <div className="relative flex items-end justify-center h-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <motion.h1
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      type: 'fade',
                    }}
                    className="text-4xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
                  >
                    <span className="block font-bold text-gold-500">
                      {t('inicio:title_1')}
                    </span>
                    <span className="block tracking-tighter text-white">
                      {t('inicio:title_2')}
                    </span>
                    <span className="block font-bold text-gold-500">
                      {t('inicio:title_3')}
                    </span>
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="flex items-center justify-center bg-neutral-100">
            <div className="px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-10">
              <div className="flex justify-center">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 1,
                    ease: 'easeOut',
                  }}
                  className="flex justify-center"
                >
                  <Image
                    width={220}
                    height={81}
                    src="/media/fundacion-unicaja-logo.png"
                    alt="Fundación Unicaja"
                    unoptimized={true}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
