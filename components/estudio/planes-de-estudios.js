import Image from 'next/image';
import Link from 'next/link';

const instruments = [
  {
    id: 1,
    name: 'Estudio de Violín/Viola',
    href: '/estudia/violin',
    imageSrc: '/static/estudia/violin.jpg',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Estudio de Piano',
    href: '/estudia/piano',
    imageSrc: '/static/estudia/piano_02.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Estudio de Violoncelo',
    href: '/estudia/violoncelo',
    imageSrc: '/static/estudia/cello.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Estudio de Voz',
    href: '/estudia/voz',
    imageSrc: '/static/estudia/voz.jpg',
    imageAlt: '',
  },
];

export default function PlanesDeEstudios() {
  return (
    <section id="planesDeEstudios" className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-normal tracking-wide text-neutral-900">
          Planes de Estudios
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {instruments.map((instrument) => (
            <div key={instrument.id} className="group relative">
              <div className="w-full min-h-80 bg-neutral-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75  lg:aspect-none lg:h-80 transition duration-200 ease-in-out">
                <div className="w-full h-full object-center object-cover lg:w-full lg:h-full">
                  <Image
                    src={instrument.imageSrc}
                    alt={instrument.imageAlt}
                    width={640}
                    height={960}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    className=""
                  />
                </div>
              </div>
              <div className="mt-1 lg:mt-4 flex justify-between">
                <div>
                  <h3 className="text-base text-neutral-700">
                    <Link href={instrument.href} passHref>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {instrument.name}
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
