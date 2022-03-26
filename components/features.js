/* This example requires Tailwind CSS v2.0+ */
import {
  LibraryIcon,
  AcademicCapIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'La Academia',
    description:
      'Una iniciativa liderada por Jesús Reina y Anna Margrethe Nilsen, con la estimable colaboración de Fundación Unicaja.',
    icon: LibraryIcon,
  },
  {
    name: 'Estudiar en la AIG',
    description:
      'Cuando decides estudiar en la Academia Internacional Galamian, estás apostando por una educación musical de calidad, y emprendes el primer paso hacia la profesionalización de tu carrrera artística.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Los Profesores',
    description:
      'La Academia Internacional Galamian cuenta con un equipo de pedagogos del mayor prestigio internacional, cuya convergencia tan sólo es posible en este centro educativo.',
    icon: UserCircleIcon,
  },
  {
    name: 'Galamian Junior',
    description:
      'Los profesionales que conforman esta institución se dedican íntegramente a garantizar tu aprendizaje con las metodologías más actuales y avanzadas del panorama musical.',
    icon: UserGroupIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
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
                className="text-neutral-200"
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
            <h2 className="text-3xl text-neutral-900 sm:text-4xl tracking-wide">
              Academia Internacional{' '}
              <span className="text-gold-600">Galamian</span>
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 bg-neutral-50 text-gold-500">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-neutral-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-neutral-500">
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
