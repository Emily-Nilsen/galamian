import Image from 'next/image';

export default function Testimonial() {
  return (
    <div className="bg-white pt-16 lg:pt-24">
      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="relative py-24 px-8 bg-gold-600 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <Image
              width={1920}
              height={1280}
              src="/static/playing-violin.jpg"
              alt="Estudiante de Academia Internaciónal Galamian"
              className="w-full h-full object-cover"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative lg:col-span-1">
            {/* <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            /> */}
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas semper, quam sed ultricies varius, enim augue mollis
                nunc, vel placerat lacus neque non diam.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>María Blanca</span>
                  <span className="text-cream-500">Estudiante, Málaga</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
