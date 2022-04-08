import Image from 'next/image';
import Link from 'next/link';

export default function Success() {
  return (
    <>
      <div className="min-h-full flex flex-col bg-white h-screen w-screen">
        <main className="flex-grow flex flex-col justify-center items-center -mt-40 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" passHref>
              <a className="inline-flex">
                <span className="sr-only">Academia Internacional Galamian</span>
                <div>
                  <Image
                    src="/static/galamian-gold-dark.svg"
                    alt="Galamian logo"
                    width={60}
                    height={60}
                    layout="fixed"
                  ></Image>
                </div>
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-gold-600 uppercase tracking-wide">
                Mensaje enviado
              </p>
              <h3 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                ¡Gracias!
              </h3>
              <p className="mt-4 text-base text-gray-500 max-w-lg">
                Hemos recibido el envío de su formulario y nos pondremos en
                contacto con usted lo antes posible.
              </p>
              <div className="mt-6">
                <Link href="/" passHref>
                  <a className="text-base font-medium text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                    Volver<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
