import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function JoagCTA() {
  const { t } = useTranslation();

  return (
    <div className="bg-gold-600">
      <div className="max-w-2xl px-4 pt-6 pb-16 mx-auto text-center sm:pb-20 sm:pt-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{t('common:joag_cta_title_1')}</span>
          <span className="block">{t('common:joag_cta_title_2')}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-cream-400">
          {t('common:joag_cta_text')}
        </p>
        <Link href="/joag" passHref>
          <a className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-semibold no-underline transition duration-300 ease-in-out bg-white border border-transparent rounded-none text-neutral-900 hover:bg-neutral-900 hover:text-white sm:w-auto">
            {t('common:joag_cta_button')}
          </a>
        </Link>
      </div>
    </div>
  );
}
