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
    description:
      'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
  },
  {
    name: 'Comfort handle',
    description: 'Shaped for steady pours and insulated to prevent burns.',
  },
  {
    name: 'One-button control',
    description:
      'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
  },
  {
    name: 'Long spout',
    description:
      "Designed specifically for controlled pour-overs that don't slash or sputter.",
  },
];

export default function SalaUnicaja() {
  return (
    <div className="bg-white">
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
                  <dd className="mt-3 text-sm text-neutral-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
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
    </div>
  );
}
