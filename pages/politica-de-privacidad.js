import Head from 'next/head';

const betingelser = [
  {
    id: '1',
    title: '¿Quién es el responsable del tratamiento de sus datos?',
    description: [
      `REINA MUSICA SL | CIF: B93235901 | Dir.Postal: MALAGA (MALAGA), C.P. 29004, CALLE PACIFICO Nº 18 | E-mail: anamariagomezaguilar.secretaria@gmail.com
      `,
    ],
  },
  {
    id: '2',
    title: `¿Con qué finalidad tratamos sus datos personales?`,
    description: [
      `En REINA MUSICA SL tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión administrativa,
      contable y fiscal de los servicios solicitados, así como enviar comunicaciones comerciales sobre nuestros productos y servicios, para cuyo
      consentimiento usted haya prestado.`,
    ],
  },
  {
    id: '3',
    title: `¿Por cuánto tiempo conservaremos sus datos?`,
    description: [
      `Los datos se conservarán mientras se mantenga la relación comercial, y en su caso, durante los años necesarios para cumplir con las
      obligaciones legales que resulte de aplicación.`,
    ],
  },
  {
    id: '4',
    title: `¿Cuál es la legitimación para el tratamiento de sus datos?`,
    description: [
      `Le indicamos la base legal para el tratamiento de sus datos:`,
      `- Ejecución de un contrato: Prestación de los servicios solicitados.`,
      `- Consentimiento del interesado: Envío de comunicaciones comerciales.`,
    ],
  },
  {
    id: '5',
    title: `¿A qué destinatarios se comunicarán sus datos?`,
    description: [
      `Únicamente se cederán sus datos a los terceros para los cuales hemos recabado debidamente su consentimiento, así como para dar
      cumplimiento a las obligaciones legales.`,
    ],
  },
  {
    id: '6',
    title: `Transferencias de datos a terceros países`,
    description: [
      `No están previstas transferencias de datos a terceros países.`,
    ],
  },
  {
    id: '7',
    title: `¿Cuáles son sus derechos cuando nos facilita sus datos?`,
    description: [
      `Cualquier persona tiene derecho a obtener confirmación sobre si en REINA MUSICA SL estamos tratando datos personales que les conciernan,
      o no.`,
      `Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su
      caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sea necesarios para los fines que fueron recogidos.`,
      `En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los
      conservaremos para el ejercicio o la defensa de reclamaciones.`,
      `En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus
      datos. En este caso, REINA MUSICA SL dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles
      reclamaciones.`,
      `Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a la dirección de correo electrónico del responsable del
      tratamiento reseñado anteriormente adjuntando copia de su DNI o documento de identidad.`,
      `Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento,
      sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.`,
      `En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya
      obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección
      de Datos competente a través de su sitio web:`,
    ],
    url: 'www.agpd.es',
    href: 'https://www.agpd.es',
  },
  {
    id: '8',
    title: `¿Cómo hemos obtenido sus datos?`,
    description: [
      `Los datos personales que tratamos en REINA MUSICA SL han sido directamente proporcionados por el interesado.
      Las categorías de datos que se tratan son:`,
      `- Datos identificativos`,
      `- Direcciones postales y electrónicas`,
      `- Información comercial`,
    ],
  },
];

export default function PoliticaDePrivadidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - AIG</title>
        <meta
          name="description"
          content="Få informasjon salgs- og leveringsbetingelser for våre varmepumper. Les våre vilkår og betingelser før du foretar en bestilling eller ett kjøp."
        />
        <link
          rel="canonical"
          href="https://www.academiagalamian.com/politica-de-privacidad"
          key="canonical"
        />
      </Head>
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-gold-600">
              Cláusula Informativa
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Política de Privacidad
            </h1>
            <div className="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="text-lg font-semibold">
                  La privacidad es de gran importancia para REINA MUSICA SL y
                  queremos mantener una actitud abierta y transparente al tratar
                  sus datos personales. Por lo tanto, disponemos de una política
                  que establece cómo se tratan y protegen sus datos personales.
                </p>

                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {betingelser.slice(0, 6).map((betingelse) => (
                    <div key={betingelse.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm rounded-full text-gold-600 bg-gold-600/10 ring-1 ring-inset ring-gold-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {betingelse.id}
                        </div>
                        {betingelse.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {betingelse.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <dl className="max-w-xl mt-0 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {betingelser.slice(6, 8).map((betingelse) => (
                    <div key={betingelse.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm rounded-full text-gold-600 bg-gold-600/10 ring-1 ring-inset ring-gold-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {betingelse.id}
                        </div>
                        {betingelse.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {betingelse.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                      {betingelse.url && (
                        <div className="flex items-center justify-center mt-3 text-sm rounded-none group text-gold-600 bg-gold-600/10 ring-1 ring-inset ring-gold-600/10 py-2.5 px-4 w-fit hover:bg-gold-600/5 transition-all duration-150 ease-in-out">
                          <a
                            className="text-base font-semibold transition duration-150 ease-in-out text-neutral-700 group-hover:text-neutral-900"
                            href={betingelse.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {betingelse.url}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            {/* <div className="flex mt-10">
              <Button
                download
                href="/Entalpy-AS-salgs-og-leveringsbetingelser.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Last ned PDF
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
