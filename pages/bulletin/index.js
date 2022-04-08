import Image from 'next/image';
import Link from 'next/link';

export default function Bulletin() {
  return (
    <>
      <main className="pb-16 bg-white lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="/static/bulletin.jpg"
            alt="Los eventos vienen pronto"
            className="relative object-cover object-center w-full h-96"
            width={1920}
            height={724}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative pt-14">
            <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
              <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
                El bulletin
              </p>
              <h2 className="mt-2 text-4xl text-gold-600 tracking-wide sm:text-5xl">
                ¡vienen pronto!
              </h2>
              <p className="mt-2 text-lg font-medium text-neutral-500">
                Estén atentos a nuestro bulletin.
              </p>
              <div className="mt-6">
                <Link href="/" passHref>
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-neutral-900 hover:text-gold-600 transition duration-200 ease-in-out">
                    Volver &nbsp;<span aria-hidden="true"> &rarr;</span>{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
