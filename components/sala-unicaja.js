import Image from 'next/image';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: 'Sede de la Academia Galamian',
    sentence_01:
      'A partir del curso 2018/2019 y por un acuerdo de colaboración con la Fundación Unicaja, la Academia Galamian realizará sus actividades en el complejo de la Sala Unicaja de Conciertos María Cristina de Málaga.',
    sentence_02:
      'Aunque los edificios que componen esta sala de conciertos fueron concebidos en el siglo XV como estancia para un colectivo franciscano, en 1843 cambiaron su funcionalidad, convirtiéndose en uno de los primeros conservatorios que se promovieron en España durante el siglo XIX.',
    sentence_03:
      'Tras su recuperación por la Fundación Unicaja en 2009, el complejo se ha convertido en una de las estancias más emblemáticas de Málaga y diez años más tarde vuelven a alojar una institución académica, cuya trascendencia internacional busca devolver a este histórico conservatorio su funcionalidad como centro educativo y de difusión cultural de calidad.',
  },
];

export default function SalaUnicaja() {
  return (
    <section id="salaUnicaja" className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="border-b border-neutral-200 pb-10">
              <h2 className="font-medium text-neutral-900 tracking-wide">
                Sala Unicaja de
              </h2>
              <h2 className="mt-2 text-3xl tracking-wide text-gold-600 sm:text-4xl">
                Conciertos María Cristina
              </h2>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-base font-medium text-neutral-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-base text-neutral-500">
                    {feature.sentence_01}
                  </dd>
                  <dd className="mt-3 text-base text-neutral-500">
                    {feature.sentence_02}
                  </dd>
                  <dd className="mt-3 text-base text-neutral-500">
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
                className="text-base font-medium text-gold-600"
              >
                {' '}
                Sala Unicaja de Conciertos María Cristina{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1 shadow-xl bg-neutral-100 overflow-hidden">
              <div className="w-full h-full object-center object-cover">
                <Image
                  width={540}
                  height={560}
                  src="/static/sala-unicaja.jpg"
                  alt="Sala Unicaja de Conciertos María Cristina"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <div className="aspect-w-1 aspect-h-1 shadow-xl bg-neutral-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    width={540}
                    height={560}
                    src="/static/sala-maria.jpg"
                    alt="Sala Unicaja de Conciertos María Cristina"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="aspect-w-1 aspect-h-1 shadow-xl bg-neutral-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    width={540}
                    height={560}
                    src="/static/sala-unicaja-2.jpg"
                    alt="Sala Unicaja de Conciertos María Cristina"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
