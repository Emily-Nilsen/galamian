import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712309/Galamian/general/estudiar_lwzhsh.jpg"
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
              <div className="grid grid-cols-2 gap-20 md:gap-40">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 1,
                    ease: 'easeOut',
                  }}
                  className="flex justify-center col-span-1"
                >
                  <div className="h-1/4">
                    <Image
                      width={77}
                      height={101}
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1661320932/Galamian/general/Fundacion_Reina-Nilsen_jlm5kx.svg"
                      alt="Fundación Reina Nilsen"
                      unoptimized={true}
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 1,
                    ease: 'easeOut',
                  }}
                  className="flex justify-center col-span-1"
                >
                  <div className="h-1/4">
                    <Image
                      width={87}
                      height={101}
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1661321274/Galamian/general/unicaja_tsxjhv.svg"
                      alt="Unicaja Fundación"
                      unoptimized={true}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
