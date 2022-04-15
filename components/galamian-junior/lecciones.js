import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BookOpenIcon,
  LibraryIcon,
  UsersIcon,
  UserIcon,
  UserGroupIcon,
  ColorSwatchIcon,
} from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Lecciones() {
  const { t } = useTranslation();

  const lecciones = [
    {
      title: `${t('galamianJunior:leccion_title_1')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: UserIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_1_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_1_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_1_text_3')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_2')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: BadgeCheckIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_2_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_2_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_2_text_3')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_3')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: UsersIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_3_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_3_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_3_text_3')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_4')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: ColorSwatchIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_4_text_1')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_5')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: LibraryIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_5_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_5_text_2')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_6')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: AcademicCapIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_6_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_6_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_6_text_3')}`,
      item_03: `${t('galamianJunior:leccion_title_6_text_4')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_7')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: BookOpenIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_7_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_7_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_7_text_3')}`,
    },
    {
      title: `${t('galamianJunior:leccion_title_8')}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: UserGroupIcon,
      iconForeground: 'text-gold-600',
      iconBackground: 'bg-neutral-50',
      description: `${t('galamianJunior:leccion_title_8_text_1')}`,
      item_01: `${t('galamianJunior:leccion_title_8_text_2')}`,
      item_02: `${t('galamianJunior:leccion_title_8_text_3')}`,
    },
  ];

  return (
    <div className="relative overflow-hidden divide-y rounded-lg shadow bg-neutral-200 divide-neutral-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px lg:col-span-2">
      {lecciones.map((leccion, leccionIdx) => (
        <div
          key={leccion.title}
          className={classNames(
            leccionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            leccionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            leccionIdx === lecciones.length - 2 ? 'sm:rounded-bl-lg' : '',
            leccionIdx === lecciones.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gold-500'
          )}
        >
          <div>
            <span
              className={classNames(
                leccion.iconBackground,
                leccion.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <leccion.icon className="w-6 h-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={leccion.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {leccion.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              {leccion.description}
            </p>
            <p className="mt-2 text-sm text-neutral-500">{leccion.item_01}</p>
            <p className="mt-2 text-sm text-neutral-500">{leccion.item_02}</p>
            <p className="mt-2 text-sm text-neutral-500">{leccion.item_03}</p>
          </div>
          <span
            className="absolute pointer-events-none top-6 right-6 text-neutral-300 group-hover:text-neutral-400"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
