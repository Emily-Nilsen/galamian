import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export default function SusFundadores() {
  const { t } = useTranslation();
  return (
    <section
      id="fundadores"
      className="py-16 overflow-hidden bg-neutral-50 lg:py-24"
    >
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-3xl font-bold leading-8 tracking-tight text-center text-gold-600 sm:text-4xl">
            {t('academia:fundadores_title')}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-center text-neutral-600">
            {t('academia:fundadores_subtitle')}
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Jesús Reina
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              {t('academia:jesus_para_1')}
            </p>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              {t('academia:jesus_para_2')}
            </p>
          </div>

          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="relative mx-auto shadow-none w-[410px]">
              <Image
                width={1024}
                height={1200}
                src="/static/profesores/jesus.jpg"
                alt="Jesús Reina"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>

        <svg
          className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Anna Margrethe Nilsen
              </h2>
              <p className="mt-3 text-base leading-7 text-neutral-600">
                {t('academia:anna_para_1')}
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-600">
                {t('academia:anna_para_2')}
              </p>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div className="relative mx-auto shadow-none w-[410px]">
                <Image
                  width={1024}
                  height={1200}
                  src="/static/profesores/anna.jpg"
                  alt="Anna Margrethe Nilsen"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
