const posts = [
  {
    title: 'Galamían Junior',
    href: '/galamian-junior',
    sentence01: `Encuentra información sobre el curso ${new Date().getFullYear()}/${
      new Date().getFullYear() + 1
    } para el Estudio Junior de violín y
      viola.`,
    sentence02: `Los alumnos que superen las audiciones convocadas para junio de ${new Date().getFullYear()} comenzarán a estudiar en la AIG Junior a partir de septiembre de ${new Date().getFullYear()}.`,
    date: `Hasta junio de ${new Date().getFullYear()}`,
    datetime: '2020-03-10',
  },
  {
    title: 'Inscripción a las audiciones de acceso',
    href: '/estudia',
    sentence01: `La Academia Internacional Galamian abre el periodo de inscripción a las audiciones de acceso al próximo curso, ${new Date().getFullYear()}/
      ${new Date().getFullYear() + 1}.`,
    sentence02:
      'Debido a la situación causada por la pandemia, estas audiciones se llevarán a cabo a través de vídeo. La inscripción está abierta hasta el 15 de julio.',
    sentence03:
      'Abajo puedes conocer todos los detalles para participar en las audiciones.',
    date: 'Hasta el 15 de julio',
    datetime: '2020-03-16',
  },
];

export default function Noticias() {
  return (
    <section
      id="noticias"
      className="px-4 pt-16 pb-20 bg-neutral-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative max-w-lg mx-auto divide-y-2 divide-neutral-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
            Noticias
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"></div>
        </div>
        <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-neutral-500">{post.date}</p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-neutral-500">
                  {post.sentence01}
                </p>
                <p className="mt-3 text-base text-neutral-500">
                  {post.sentence02}
                </p>
                <p className="mt-3 text-base text-neutral-500">
                  {post.sentence03}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={post.href}
                  className="text-base font-semibold text-gold-600 hover:text-gold-500"
                >
                  Lee más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
