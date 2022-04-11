import Image from 'next/image';
import Link from 'next/link';

const requisitos = [
  {
    name: 'Requisitos de la audicion y vídeos',
    step: '1',
    description:
      'La audición consistirá en el envío y valoración ante jurado de uno o varios vídeos proporcionados por el/la aspirante.',
    description_02: `El vídeo deberá mostrar las capacidades técnicas y musicales del/la aspirante con su instrumento, y deberá poder evidenciarse la figura de este de forma clara y visual.`,
    description_03: ``,
  },
  {
    name: 'Repertorio',
    step: '2',
    description:
      'En este vídeo necesario para la audición, el/la aspirante deberá interpretar al menos dos obras o movimientos con estilos contrastantes.',
    description_02: `Tanto la duración de estas obras como la de la totalidad del vídeo es libre.`,
    description_03: `Los/las aspirantes podrán realizar este vídeo sin acompañamiento de piano u orquesta, a pesar de que la obra esté escrita originalmente contando con ese acompañamiento.`,
  },
  {
    name: 'Documentación y plazos',
    step: '3',
    description:
      'El/la aspirante deberá haber enviado su formulario de inscripción dentro del plazo de aplicación, estando este abierto hasta el 15 de julio.',
    description_02: `El vídeo necesario para auditar al curso ${new Date().getFullYear()}/${
      new Date().getFullYear() + 1
    } será adjuntado a través de uno o varios links que dirijan a un repositorio digital en el que estos estén alojados (YouTube o Vimeo).`,
    description_03: `Los resultados de las audiciones se darán a conocer en los diez días posteriores al cierre del plazo, a través de un contacto privado con los/las aspirantes.`,
  },
];

export default function Requisitos() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-neutral-800">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              src="/static/estudia/requisitos.jpg"
              alt=""
              width={1920}
              height={1280}
            />
          </div>
          <div
            className="absolute inset-0 bg-neutral-600 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Requisitos
          </p>
          <p className="mt-6 max-w-3xl text-xl text-neutral-300">
            Estos son los requisitos comunes para todos los estudios que ofrece
            la Academia Internacional Galamian.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Requisitos de los estudios
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {requisitos.map((requisito) => (
            <div
              key={requisito.name}
              className="flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-none shadow-none pb-6"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-gold-600 rounded-none shadow-none transform -translate-y-1/2">
                  <p className="text-white">{requisito.step}</p>
                </div>
                <h3 className="text-xl font-medium text-neutral-900">
                  {requisito.name}
                </h3>
                <p className="mt-4 text-base text-neutral-500">
                  {requisito.description}
                </p>
                <p className="mt-4 text-base text-neutral-500">
                  {requisito.description_02}
                </p>
                <p className="mt-4 text-base text-neutral-500">
                  {requisito.description_03}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
