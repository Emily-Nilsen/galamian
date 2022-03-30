import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    id: 1,
    name: 'Estudiar en la Academia Internacional Galamian',
    summary:
      'Formar parte de la Academia Galamian es una decisión crucial para tu desarrollo artístico.  Los profesionales que conforman esta institución se dedican íntegramente a garantizar tu aprendizaje con las metodologías más actuales y avanzadas del panorama musical.',
    href: '#',
    imageSrc: '/static/galamian-junior/estudiar.jpg',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Estudio de Violín / Viola Junior',
    summary:
      'Los alumnos que ingresen en el Estudio de Violín/Viola Junior de la AIG en el Semestre de Otoño recibirán estas lecciones desde septiembre de 2022 hasta junio de 2023.',
    href: '#',
    imageSrc: '/static/galamian-junior/estudio.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Profesores del Estudio Violín / Viola Junior',
    summary:
      'La Academia Internacional Galamian cuenta con un equipo de pedagogos del mayor prestigio internacional, cuya convergencia tan sólo es posible en este centro educativo.',
    href: '#',
    imageSrc: '/static/galamian-junior/teachers.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Requisitos de admisión y matrícula',
    summary:
      'El proceso de admisión y matriculación para estudiantes que ingresan por primera vez en la academia se realiza a través de la página web durante todo el año.',
    href: '#',
    imageSrc: '/static/galamian-junior/admission.jpg',
    imageAlt: '',
  },
];

export default function NavigationJunior() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {sections.map((section) => (
            <div key={section.id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-neutral-100">
                <div className="object-center object-cover">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    width={400}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div
                  className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 text-sm font-medium text-neutral-900 text-center">
                    Leer más
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-neutral-900 space-x-8">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {section.name}
                  </a>
                </h3>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{section.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
