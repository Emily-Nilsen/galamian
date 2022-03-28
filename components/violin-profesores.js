import Image from 'next/image';
import ProfesorQuickview from './profesor-quickview';

const people = [
  {
    name: 'Jesús Reina',
    role: 'Profesor principal',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Anna Margrethe Nilsen',
    role: 'Profesor principal',
    imageUrl: '/static/anna.jpg',
  },
  {
    name: 'Laura Romero',
    role: 'Profesor asistente',
    imageUrl: '/static/laura-romero.jpeg',
  },
  {
    name: 'Alfredo García',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Grigory Kalinovsky',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Alexander Sitkovetsky',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Molly Carr',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Jordán Tejedor',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Salvador Esteve',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Joaquín Riquelme',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
  {
    name: 'Koh Gabriel Kameda',
    role: 'Profesor invitado',
    imageUrl: '/static/jesus.jpg',
  },
];

export default function ViolinProfesores() {
  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              Violín y Viola
            </h2>
            <p className="text-base text-neutral-500">
              Haga clic en el nombre para leer más sobre cada pedagogo.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                      <Image
                        className="rounded-full"
                        width={1000}
                        height={1000}
                        src={person.imageUrl}
                        alt={person.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="font-medium text-lg leading-6 space-y-1 text-neutral-900">
                      <h3>{person.name}</h3>
                      <p className="text-gold-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ProfesorQuickview />
          </div>
        </div>
      </div>
    </div>
  );
}
