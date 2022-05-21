import { CheckIcon, PlusIcon } from '@heroicons/react/outline';

const tiers = [
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 49,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 79,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
];

export default function RegistrationFee() {
  return (
    <div className="bg-neutral-100">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg font-semibold leading-6 tracking-wider uppercase text-gold-600">
              Pricing
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              The right price for you, whoever you are
            </h3>
            <p className="text-xl text-neutral-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 mt-8 bg-neutral-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-neutral-100" />
          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col overflow-hidden rounded-lg shadow"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-full bg-cream-400 text-gold-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>

                    <div className="px-4 py-16 bg-white sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
                      <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
                        <div>
                          <h2 className="sr-only">Price</h2>
                          <p className="relative grid grid-cols-2">
                            <span className="flex flex-col text-center">
                              <span className="text-5xl font-extrabold tracking-tight text-neutral-900">
                                $99
                              </span>
                              <span className="mt-2 text-base font-medium text-gold-600">
                                Setup fee
                              </span>
                              <span className="sr-only">plus</span>
                            </span>
                            <span
                              className="absolute flex items-center justify-center w-full h-12 pointer-events-none"
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
                                  $4
                                </span>
                                <span className="mt-2 text-base font-medium text-gold-600">
                                  Per month
                                </span>
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-lg text-neutral-500">
                      {tier.description}
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
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-neutral-800 hover:bg-neutral-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
