import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
  {
    question: `¿Es posible compaginar mis estudios en el conservatorio con los programas de la AIG?`,
    answer_01: `Cualquiera de los programas formativos de la Academia Internacional Galamian son perfectamente compatibles con los estudios reglados de cualquier otra institución.`,
    answer_02: ``,
    answer_03: ``,
  },
  {
    question: `¿Qué beneficios obtengo al asistir a la AIG?`,
    answer_01: `El profesorado de la Academia Internacional Galamian está formado por maestros de reconocido prestigio internacional, que compaginan su actividad concertante con la pedagogía en la AIG y otros centros de reputación en Europa y Estados Unidos; los profesores de AIG saben transmitir sus refutados conocimientos a los alumnos. `,
    answer_02: `La AIG, en conjunción con sus profesores, ofrece una formación musical dedicada. Al desarrollo exahustivo de las competencias artísticas de sus alumnos, apoyándoles en su acercamiento e inclusión en los distintos campos profesionales disponibles para músicos e intérpretes profesionales.`,
    answer_03: ``,
  },
  {
    question: `¿Se puede acceder al conservatorio habiendo asistido antes a la Academia Galamian?`,
    answer_01: `El acceso al conservatorio superior depende únicamente de la superación de una prueba de acceso teorico-práctica. Es posible realizar esta prueba de forma independiente, sin haber asistido con anterioridad a un conservatorio profesional.`,
    answer_02: `En caso de ser éste el objetivo del alumno, los profesores de la AIG dedicarán una programación educativa dedicada expresamente a la superación de esta prueba.`,
    answer_03: ``,
  },
  {
    question: `¿Me da alguna ventaja o reconocimiento académico obtener el título propio de la Academia Internacional Galamian?`,
    answer_01: `Obtener el título propio de la AIG implica que tus conocimientos y habilidades están respaldados por una institución de carácter internacional, avalados por el prestigioso profesorado, la dirección, la presidencia honoraria y todo el equipo de la Academia Internacional Galamian.`,
    answer_02: `Es un elemento de valor en cualquier oposición, ya sea para un puesto público o de carácter privado, aunque no oficial. De cara a instituciones privadas, el título de la AIG tiene un valor de suma importancia.`,
    answer_03: ``,
  },
  {
    question: `¿Hay un tiempo limitado para asistir a alguno de los programas de la AIG?`,
    answer_01: `Cada alumno es libre de asistir a la AIG el tiempo que estime necesario. El profesorado siempre estará dispuesto a dar consejo y seguimiento personalizado a cada alumno.`,
    answer_02: `En caso de no desear participar en alguno de los programas de rango educativo (Precollege, Bachelor o Máster), el alumno recibirá un diploma por cada curso académico asistido a la AIG.`,
    answer_03: `La edad establecida para el alumnado del programa Junior es desde los inicios a los 16 años. Existe la posibilidad de hacer excepciones si el profesorado lo encuentra conveniente.`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQs() {
  return (
    <div className="bg-neutral-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-neutral-200">
          <h2 className="text-center text-3xl text-neutral-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>

          <dl className="mt-6 space-y-6 divide-y divide-neutral-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-neutral-400">
                        <span className="font-medium text-neutral-800">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
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
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-neutral-500">
                        {faq.answer_01}
                      </p>
                      <p className="text-base text-neutral-500 pt-2">
                        {faq.answer_02}
                      </p>
                      <p className="text-base text-neutral-500 pt-2">
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
