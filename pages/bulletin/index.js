import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Bulletin() {
  const { t } = useTranslation();

  return (
    <>
      <main className="pb-16 bg-white lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="/static/eventos.jpg"
            alt={t('common:blogpost_preview_1')}
            className="relative object-cover object-center w-full h-96"
            width={1500}
            height={758}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative pt-0">
            <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
              <h2 className="text-base font-semibold tracking-tight uppercase text-neutral-900">
                {t('common:blog')}
              </h2>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gold-600 sm:text-5xl">
                {t('common:blog_coming')}
              </h2>
              <p className="mt-2 text-lg text-neutral-600">
                {t('common:blogpost_preview_1')}
              </p>
              <div className="mt-6">
                <Link href="/" passHref>
                  <a className="inline-flex items-center px-4 py-2 text-base font-medium tracking-tight transition duration-300 ease-in-out border border-transparent rounded-md text-neutral-900 hover:text-gold-600">
                    {t('common:button_back')} &nbsp;
                    <span aria-hidden="true"> &rarr;</span>{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
