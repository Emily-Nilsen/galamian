import Image from 'next/image';

/* This example requires Tailwind CSS v2.0+ */
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
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-neutral-100" />
            <div className="max-w-7xl mx-auto">
              <div className="relative h-[50vh]">
                <div className="absolute inset-0">
                  <div className="h-full w-full object-cover">
                    <Image
                      width={275}
                      height={183}
                      src="/static/maria.jpeg"
                      alt="Maria Christina"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-end justify-center h-full">
                  <h1 className="text-center text-4xl  sm:text-5xl lg:text-6xl tracking-wide">
                    <span className="block text-white">
                      Academia Internacional
                    </span>
                    <span className="block text-gold-500">Galamian</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-neutral-100 flex items-center justify-center">
            <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
              <div className="grid grid-cols-2 md:gap-14 gap-6">
                <div className="col-span-1 flex justify-self-start">
                  <div className="h-1/2">
                    <Image
                      width={255}
                      height={69}
                      src="/static/reina-nilsen-grey.svg"
                      alt="Fundación Reina Nilsen"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className="h-1/2">
                    <Image
                      width={230}
                      height={62}
                      src="/static/unicaja-grey.svg"
                      alt="Unicaja Fundación"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
