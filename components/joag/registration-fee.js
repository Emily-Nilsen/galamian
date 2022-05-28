import { CheckIcon, PlusIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function RegistrationFee() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: `${t('joag:pricing_standard')}`,
      priceMonthly: `${t('joag:standard_cost')}`,
      description_start: `${t('joag:option_one_start')}`,
      description_middle: `${t('joag:option_one_middle')}`,
      description_end: `${t('joag:option_one_end')}`,
      features: [`${t('joag:participation')}`],
    },
    {
      name: `${t('joag:pricing_intensive')}`,
      priceMonthly: `${t('joag:intensive_cost')}`,
      description_start: `${t('joag:option_two_start')}`,
      description_middle: `${t('joag:option_two_middle')}`,
      description_end: `${t('joag:option_two_end')}`,
      features: [
        `${t('joag:participation')}`,
        `${t('joag:class_duration')}`,
        `${t('joag:tailored_classes')}`,
      ],
    },
  ];

  return (
    <div className="bg-gold-600">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg font-semibold leading-6 tracking-wide uppercase text-cream-400">
              {t('joag:pricing_subtitle')}
            </h2>
            <h2 className="text-3xl font-extrabold tracking-normal text-white uppercase sm:text-4xl lg:text-5xl">
              {t('joag:pricing_title')}
            </h2>
            <p className="text-xl text-cream-500 brightness-110">
              {t('joag:pricing_text')}
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 mt-8 bg-neutral-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gold-600" />
          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier, i) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.3,
                    ease: 'easeOut',
                  }}
                  key={i}
                  className="flex flex-col overflow-hidden rounded-none shadow"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-full text-gold-600 bg-cream-400"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>

                    <div className="pt-10 pb-6 sm:pt-12 sm:pb-8 lg:bg-none lg:flex lg:items-center lg:justify-start">
                      <div className="max-w-lg space-y-8 w-fit lg:mx-0">
                        <div>
                          <h2 className="sr-only">Price</h2>
                          <h3 className="relative grid grid-cols-2 tracking-tight">
                            <span className="flex flex-col text-center">
                              <span className="pr-10 text-5xl font-extrabold text-neutral-900">
                                {t('joag:registration_fee_cost')}
                              </span>
                              <span className="mt-2 text-base font-medium text-left text-gold-600">
                                {t('joag:registration_fee_text')}
                              </span>
                              <span className="sr-only">plus</span>
                            </span>
                            <span
                              className="absolute flex items-center justify-center w-full h-12 pr-4 pointer-events-none"
                              aria-hidden="true"
                            >
                              <PlusIcon
                                className="w-6 h-6 text-cream-500"
                                aria-hidden="true"
                              />
                            </span>
                            <span>
                              <span className="flex flex-col text-center">
                                <span className="text-5xl font-extrabold tracking-tight text-neutral-900">
                                  {tier.priceMonthly}
                                </span>
                                <span className="pr-6 mt-2 text-base font-medium text-gold-600">
                                  {t('joag:per_month')}
                                </span>
                              </span>
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-lg text-neutral-500">
                      {tier.description_start}{' '}
                      <span className="font-semibold">
                        {tier.description_middle}
                      </span>{' '}
                      {tier.description_end}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-neutral-50 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="w-6 h-6 text-lime-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-neutral-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
