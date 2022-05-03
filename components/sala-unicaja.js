import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

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
      <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="border-b border-neutral-200 pb-10">
              <h2 className="font-medium text-neutral-900 tracking-wide">
                {t('academia:unicaja_title_1')}
              </h2>
              <h2 className="mt-2 text-3xl tracking-wide text-gold-600 sm:text-4xl">
                {t('academia:unicaja_title_2')}
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
                {t('common:button_unicaja')}{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1 shadow-none bg-neutral-100 overflow-hidden">
              <div className="w-full h-full object-center object-cover">
                <Image
                  width={540}
                  height={560}
                  src="/static/unicaja-2.webp"
                  alt="Sala Unicaja de Conciertos María Cristina"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <div className="aspect-w-1 aspect-h-1 shadow-none bg-neutral-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    width={540}
                    height={560}
                    src="/static/unicaja-3.webp"
                    alt="Sala Unicaja de Conciertos María Cristina"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="aspect-w-1 aspect-h-1 shadow-none bg-neutral-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    width={540}
                    height={560}
                    src="/static/unicaja-1.webp"
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
