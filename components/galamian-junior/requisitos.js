import Image from 'next/image';
import FAQs from './faqs';

const features = [
  {
    name: 'Matrícula',
    description_01: `La matrícula anual es de 3.500€.`,
    description_02: `Las tasas de matriculación son de carácter anual y pueden dividirse hasta en 3 pagos porcentuales distribuidos a lo largo del curso académico.`,
    description_03: ``,
    imageSrc: '/static/galamian-junior/admission.jpg',
    imageAlt: 'La matrícula de la Academia Galamian',
  },
  {
    name: 'Becas',
    description_01: `La Fundación Reina Nilsen ofrece una reducción en los costes de matriculación para aquellos alumnos meritorios y de motivación excepcional —poniendo en especial valor la situación económica familiar— de hasta el 50% del coste total de matriculación.`,
    description_02: `Los solicitud de esta reducción en la matriculación se llevará a cabo una vez el aspirante supere la audición de acceso.`,
    description_03: `Hecha su inscripción, la Fundación Reina Nilsen pondrá en valor su solicitud junto con un tribunal de la Academia Internacional Galamian, siendo la concesión de esta reducción y su cuantía comunicadas al alumno antes del comienzo del curso en septiembre de ${new Date().getFullYear()}.`,
    imageSrc: '/static/galamian-junior/becas.jpg',
    imageAlt: 'La Academia Galamian y su Joven Orquesta',
  },
  {
    name: 'Titulación',
    description_01: `Los programas educativos de la Academia Internacional Galamian se dividen en tres rangos, dependiendo de la edad y el nivel del alumno: Precollege, Bachelor y Máster.`,
    description_02: `La participación en uno de estos rangos educativos será determinada por el jurado de la Academia en la audición de acceso del aspirante, entrando en valor su edad, recorrido académico y nivel interpretativo.`,
    description_03: `La AIG dispone de un título propio para aquellos alumnos que, a juicio de sus profesores principales, superen uno de estos programas.`,
    imageSrc: '/static/galamian-junior/titulacion.jpg',
    imageAlt: 'Joven Orquesta de la Academia Galamian',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Requisitos() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:max-w-7xl lg:px-8">
        <div className="space-y-5 sm:mx-auto sm:space-y-4 max-w-3xl mx-auto text-center">
          <h2 className="leading-6 text-neutral-900 tracking-wide uppercase">
            Requisitos de
          </h2>
          <h2 className="text-3xl tracking-wide text-neutral-900 sm:text-4xl">
            admisión y <span className="text-gold-600">matrícula</span>{' '}
          </h2>
          <p className="mt-4 text-neutral-500">
            El proceso de admisión y matriculación para estudiantes que ingresan
            por primera vez en la academia se realiza a través de la página web
            durante todo el año. Aquí también puedes encontrar preguntas
            frecuentes.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-1'
                    : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-xl font-medium text-neutral-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-neutral-500">
                  {feature.description_01}
                </p>
                <p className="mt-2 text-base text-neutral-500">
                  {feature.description_02}
                </p>
                <p className="mt-2 text-base text-neutral-500">
                  {feature.description_03}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-6 xl:col-start-5'
                    : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 bg-neutral-100 overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={500}
                      height={200}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQs />
    </div>
  );
}
