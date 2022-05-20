import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQs() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: `${t('common:faq_01')}`,
      answer_01: `${t('common:faq_01_text_1')}`,
    },
    {
      question: `${t('common:faq_02')}`,
      answer_01: `${t('common:faq_02_text_1')}`,
      answer_02: `${t('common:faq_02_text_2')}`,
    },
    {
      question: `${t('common:faq_03')}`,
      answer_01: `${t('common:faq_03_text_1')}`,
      answer_02: `${t('common:faq_03_text_2')}`,
    },
    {
      question: `${t('common:faq_04')}`,
      answer_01: `${t('common:faq_04_text_1')}`,
      answer_02: `${t('common:faq_04_text_2')}`,
    },
    {
      question: `${t('common:faq_05')}`,
      answer_01: `${t('common:faq_05_text_1')}`,
      answer_02: `${t('common:faq_05_text_2')}`,
      answer_03: `${t('common:faq_05_text_3')}`,
    },
  ];

  return (
    <div id="faqs" className="bg-neutral-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 md:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-neutral-200">
          <h2 className="text-3xl font-semibold tracking-tight text-center text-neutral-900 sm:text-4xl">
            {t('common:faq_title')}
          </h2>

          <dl className="mt-6 space-y-6 divide-y divide-neutral-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-neutral-400">
                        <span className="font-medium tracking-tight text-neutral-800">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180 text-gold-600' : 'rotate-0',
                              'h-6 w-6 transform transition duration-200 ease-in-out'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base text-neutral-600">
                        {faq.answer_01}
                      </p>
                      <p className="pt-2 text-base text-neutral-600">
                        {faq.answer_02}
                      </p>
                      <p className="pt-2 text-base text-neutral-600">
                        {faq.answer_03}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
