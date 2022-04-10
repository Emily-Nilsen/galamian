import Formulario from '../../components/estudio/formulario';
import Image from 'next/image';

const FormularioDeInscripcion = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Formulario />
        </div>
      </div>
      {/* Logo cloud */}
      <div className="bg-neutral-100 flex items-center justify-center mt-20">
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:gap-14 gap-6">
            <div className="col-span-1 flex justify-self-start">
              <div className="h-1/2">
                <Image
                  width={255}
                  height={69}
                  src="/static/reina-nilsen-grey.svg"
                  alt="Fundación Reina Nilsen"
                />
              </div>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-1/2">
                <Image
                  width={204}
                  height={55}
                  src="/static/unicaja-grey.svg"
                  alt="Unicaja Fundación"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioDeInscripcion;
