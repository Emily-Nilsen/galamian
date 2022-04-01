import Image from 'next/image';
import Link from 'next/link';
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

const lecciones = [
  {
    title: 'Clases individuales',
    href: '#',
    icon: UserIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Clases individuales con las profesoras residentes del Estudio de Violín/Viola Junior, Irene Ortega y Laura Romero, además de poder asisitir a las lecciones impartidas a todos los compañeros del estudio.`,
    item_01: `Las clases mensuales se distribuirán en un 50% con cada una de las profesoras residentes.`,
    item_02: `7 clases al mes con una duración de 45 min.`,
    item_03: ``,
  },
  {
    title: 'Clases magistrales',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Clases magistrales con los profesores principales del Estudio de Violín/Viola, Jesús Reina y Anna Margrethe Nilsen, directores de la AIG.`,
    item_01: `1 clase al mes con una duración de 45 min.`,
    item_02: `Total de 8 clases individuales mensuales con una duración de 45 min.`,
    item_03: ``,
  },
  {
    title: 'Clases grupales',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Clases grupales de técnica, lectura musical conjunta y práctica performativa para desarrollar las técnicas de interpretación sobre el escenario, compartiendo experiencias prácticas junto a los compañeros del Estudio.`,
    item_01: `3 clases grupales para los menores de 12 años o alumnos que no formen parte de la JOAG.`,
    item_02: `2 clases grupales para los alumnos que formen parte de la JOAG .`,
    item_03: ``,
  },
  {
    title: 'Repertorista',
    href: '#',
    icon: ColorSwatchIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Repertorista para un número determinado de clases (30%).`,
    item_01: ``,
    item_02: ``,
    item_03: ``,
  },
  {
    title: 'Joven Orquesta de la Academia Galamian',
    href: '#',
    icon: LibraryIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Joven Orquesta de la Academia Galamian para aquellos alumnos de entre 12 y 16 años, quienes disfrutan de su primera experiencia orquestal en un programa tutelado por José Andrés Fernández Camacho y otros profesores de la Orquesta de la Academia Galamian.`,
    item_01: `2 sesiones de ensayos al mes + un concierto trimestral.`,
    item_02: ``,
    item_03: ``,
  },
  {
    title: 'Método Brainin Desarrollo del intelecto musical',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Método Brainin Desarrollo del intelecto musical cuyo objetivo principal es la percepción auditiva anticipatoria, será impartido por la pianista Natalia Kuchaeva.`,
    item_01: `El método ofrece una formación musical integral, que abarca todos los niveles, desde la educación musical temprana hasta el nivel profesional.`,
    item_02: `En estas clases se prestará una atención especial al desarrollo del oído absoluto, pseudo-absoluto y relativo, desarrollo de la memoria musical, comprensión profunda de la música clásica y desarrollo de habilidades, orientadas a la composición de música.`,
    item_03: `2 horas semanales.`,
  },
  {
    title: 'Principios fundamentales de la interpretación musica',
    href: '#',
    icon: BookOpenIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Principios fundamentales de la interpretación musical con el director de orquesta Vicente Chuliá.`,
    item_01: `Estas sesiones servirán como complemento a las clases semanales del Método Brainin.`,
    item_02: `3 sesiones intensivas al año.`,
    item_03: ``,
  },
  {
    title: 'Conciertos',
    href: '#',
    icon: UserGroupIcon,
    iconForeground: 'text-gold-600',
    iconBackground: 'bg-neutral-50',
    description: `Conciertos en la sala principal y otros espacios de la Academia.
    La icónica Sala María Cristina aloja la gran mayoría de los eventos de la Academia Internacional Galamian.`,
    item_01: `Una localización con una acústica y estética alabadas por los grandes artistas que cada temporada pasan por ella.`,
    item_02: `Un concierto de violín/viola al trimestre + un concierto de orquesta con la JOAG.`,
    item_03: ``,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Lecciones() {
  return (
    <div className="rounded-lg bg-neutral-200 overflow-hidden shadow divide-y divide-neutral-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px lg:col-span-2 relative">
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
              <leccion.icon className="h-6 w-6" aria-hidden="true" />
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
            className="pointer-events-none absolute top-6 right-6 text-neutral-300 group-hover:text-neutral-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
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
