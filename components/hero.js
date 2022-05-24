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
                  <div className="object-cover w-full h-full">
                    <Image
                      width={275}
                      height={183}
                      src="/static/estudiar.jpg"
                      alt="Maria Christina"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 mix-blend-multiply" />
                </div>
                <div className="relative flex items-end justify-center h-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-4xl font-normal tracking-tight text-center sm:text-5xl lg:text-6xl">
                    <span className="block font-bold text-gold-500">
                      {t('inicio:title_1')}
                    </span>
                    <span className="block tracking-tighter text-white">
                      {t('inicio:title_2')}
                    </span>
                    <span className="block font-bold text-gold-500">
                      {t('inicio:title_3')}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="flex items-center justify-center bg-neutral-100">
            <div className="px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-10">
              <div className="grid grid-cols-2 gap-6 md:gap-14">
                <div className="flex col-span-1 justify-self-start">
                  <div className="h-1/2">
                    <Image
                      width={255}
                      height={69}
                      src="/static/reina-nilsen-grey.svg"
                      alt="Fundación Reina Nilsen"
                    />
                  </div>
                </div>
                <div className="flex justify-center col-span-1">
                  <div className="h-1/2">
                    <Image
                      width={204}
                      height={55}
                      src="/static/unicaja-grey.svg"
                      alt="Unicaja Fundación"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
