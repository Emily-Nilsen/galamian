import {
  LibraryIcon,
  AcademicCapIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      name: `${t('inicio:feature_name_1')}`,
      description: `${t('inicio:feature_description_1')}`,
      icon: LibraryIcon,
    },
    {
      name: `${t('inicio:feature_name_2')}`,
      description: `${t('inicio:feature_description_2')}`,
      icon: AcademicCapIcon,
    },
    {
      name: `${t('inicio:feature_name_3')}`,
      description: `${t('inicio:feature_description_3')}`,
      icon: UserCircleIcon,
    },
    // {
    //   name: `${t('inicio:feature_name_4')}`,
    //   description: `${t('inicio:feature_description_4')}`,
    //   icon: UserGroupIcon,
    // },
  ];

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
                className="text-neutral-200 opacity-70"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              <span className="block font-bold text-gold-600">
                {t('inicio:feature_title_1')}
              </span>
              {t('inicio:feature_title_2')}{' '}
              <span className="font-bold text-gold-600">
                {t('inicio:feature_title_3')}
              </span>
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature, i) => (
              <div key={i}>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 bg-neutral-50 text-gold-500">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-6 tracking-tight text-neutral-800">
                    {feature.name}
                  </h3>
                </dt>
                <dd className="mt-2 text-base text-neutral-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
