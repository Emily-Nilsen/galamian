import Image from 'next/image';
import Link from 'next/link';
import ClasesDeApoyo from './clases-de-apoyo';

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
];

export default function Content() {
  return (
    <div className="relative pb-16 bg-white sm:pb-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full right-1/2 bg-neutral-50 lg:right-72" />
            <svg
              className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Student*/}
            <div className="relative pb-10 overflow-hidden rounded-none shadow-none pt-80">
              <div className="absolute inset-0 object-cover w-full h-full">
                <Image
                  src="/static/joag-img-2.webp"
                  alt="Frida Gandía"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              {/* <div className="absolute inset-0 bg-gold-500 mix-blend-multiply" /> */}
              <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-neutral-600 via-neutral-600" />
              <div className="relative px-8">
                <div>
                  {/* <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  /> */}
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    {/* <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet.
                    </p> */}
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-medium text-white">
                      Frida Gandía, JOAG
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div>
            {/* Clases de Apoyo */}
            <ClasesDeApoyo />
          </div>
        </div>
      </div>
    </div>
  );
}
