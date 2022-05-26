import Formulario from '../../components/estudio/formulario';
import Image from 'next/image';
import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';

const FormularioDeInscripcion = () => {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:enrol_title')}
      description={t('layout:enrol_description')}
      keywords={t('layout:enrol_keywords')}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Formulario />
        </div>
      </div>
      {/* Logo cloud */}
      <div className="flex items-center justify-center mt-20 bg-neutral-100">
        <div className="px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 md:gap-14">
            <div className="flex col-span-1 justify-self-start">
              <div className="h-1/2">
                <Image
                  width={255}
                  height={69}
                  src="/static/reina-nilsen-grey.svg"
                  alt="Fundación Reina Nilsen"
                />
              </div>
            </div>
            <div className="flex justify-center col-span-1">
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
    </Layout>
  );
};

export default FormularioDeInscripcion;
