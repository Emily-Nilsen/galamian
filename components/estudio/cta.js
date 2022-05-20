import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function CTA() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl">
          <span className="block">{t('estudia:cta_question')}</span>
          <span className="block font-bold text-gold-600">
            {t('estudia:cta_call')}
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-none">
            <Link href="/estudia/formulario-de-inscripcion" passHref>
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold tracking-tight text-white transition duration-300 ease-in-out border border-transparent rounded-none bg-gold-600 hover:bg-neutral-900">
                {t('estudia:cta_form')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
