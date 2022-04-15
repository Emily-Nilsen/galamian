import Image from 'next/image';
import Link from 'next/link';

export default function Violin() {
  return (
    <section>
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
              Programas formativos de la AIG
            </h2>
            <h1 className="mt-1 text-4xl font-normal text-neutral-900 sm:text-5xl sm:tracking-wide lg:text-6xl">
              Estudio de <span className="text-gold-600"> violín & viola</span>
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-xl text-neutral-500">
              Información para el curso de Estudio de Violín/Viola de{' '}
              {new Date().getFullYear()}/{new Date().getFullYear() + 1}.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="relative object-cover w-full h-56 lg:absolute lg:h-full">
              <Image
                src="/static/estudia/viola_01.jpg"
                alt="Estudio de violín/viola"
                width={1920}
                height={1532}
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </div>
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="font-semibold leading-6 tracking-wide uppercase text-gold-600">
                Work with us
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                Our Process
              </h3>
              <p className="mt-8 text-lg text-neutral-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
              <div className="mt-5 prose text-neutral-500 prose-gold">
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p>
                  Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
                  sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum
                  et et et sit. Faucibus sed non gravida lectus dignissim
                  imperdiet a.
                </p>
                <p>
                  Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                  lorem arcu, metus, egestas netus cursus. In.
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <h3>How we’re different</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  Consectetur pretium in volutpat, diam. Montes, magna cursus
                  nulla feugiat dignissim id lobortis amet. Laoreet sem est
                  phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Mauris ullamcorper imperdiet nec egestas mi quis quam ante
                  vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum
                  id tellus donec. Ut metus odio sit sit varius non nunc orci.
                  Eu, mi neque, ornare suspendisse amet, nibh. Facilisi volutpat
                  lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                  imperdiet ac eros, diam mauris, tortor. Risus id sit molestie
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-16 overflow-hidden bg-white">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full mx-auto text-lg max-w-prose"
            aria-hidden="true"
          >
            <svg
              className="absolute transform translate-x-32 top-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute transform translate-x-32 bottom-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-center uppercase text-gold-600">
                Introducing
              </span>
              <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-neutral-900 sm:text-4xl">
                JavaScript for Beginners
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-neutral-500">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>
          <div className="mx-auto mt-6 prose prose-lg prose-gold text-neutral-500">
            <p>
              Faucibus commodo massa rhoncus, volutpat.{' '}
              <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
              Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim.{' '}
              <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Quis semper vulputate aliquam venenatis egestas sagittis quisque
              orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
              eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
              amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
              duis sed elit interdum dignissim.
            </p>
            <h2>From beginner to expert in 30 days</h2>
            <p>
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
            <blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <figure>
              <div className="w-full rounded-none">
                <Image
                  src="/static/estudia/viola_02.jpg"
                  alt="Estudio de violín/viola"
                  width={1920}
                  height={1441}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <figcaption>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure>
            <h2>Everything you need to get up and running</h2>
            <p>
              Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
              Amet, massa quam varius orci dapibus volutpat cras. In amet eu
              ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
              viverra ridiculus non molestie. Gravida quis fringilla amet eget
              dui tempor dignissim. Facilisis auctor venenatis varius nunc,
              congue erat ac. Cras fermentum convallis quam.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
