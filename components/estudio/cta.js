import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-normal tracking-wide text-neutral-900 md:text-4xl">
          <span className="block">¿Listo para aplicar?</span>
          <span className="block text-gold-600">
            Inscríbete en las audiciones.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <Link href="/estudia/formulario-de-inscripcion" passHref>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-gold-600 hover:bg-gold-500 transition duration-200 ease-in-out rounded-md">
                Formulario de Inscripción
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
