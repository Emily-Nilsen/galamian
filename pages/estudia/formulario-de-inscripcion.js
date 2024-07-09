import Formulario from '../../components/estudio/formulario';
import Image from 'next/image';
import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

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
        <div className="flex justify-center mb-16 group">
          <a
            download
            href="/FORMULARIO_INSCRIPCION_ACADEMIA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500/20 py-1.5 px-3 rounded-full font-semibold text-neutral-700 group-hover:bg-gold-500/30 group-hover:text-neutral-900 transition-all duration-150 ease-in-out"
          >
            Descarga Formulario de Inscripción
          </a>
        </div>
        <p className="my-10 text-center">
          Descargue y rellene el Formulario de Inscripción y envíelo a:
        </p>
        <div></div>
        <a
          className=" hover:text-neutral-900 hover:underline"
          href="mailto:secretaria.academiagalamian@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <dd className="flex items-center justify-center text-base text-neutral-700">
            <MailIcon
              className="flex-shrink-0 w-6 h-6 text-cream-500"
              aria-hidden="true"
            />
            <span className="ml-3 overflow-visible tracking-tight lg:leading-5 xl:leading-normal">
              secretaria.academiagalamian
              <span className="lg:block xl:inline">@gmail.com</span>
            </span>
          </dd>
        </a>
      </div>
      {/* Logo cloud */}
      <div className="flex items-center justify-center mt-16 sm:mt-20 bg-neutral-100">
        <div className="px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 md:gap-14">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
              }}
              className="flex col-span-1 justify-self-start"
            >
              <div className="h-1/2">
                <Image
                  width={255}
                  height={69}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712310/Galamian/general/reina-nilsen-grey_jds7oo.svg"
                  alt="Fundación Reina Nilsen"
                  unoptimized={true}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
              }}
              className="flex justify-center col-span-1"
            >
              <div className="h-1/2">
                <Image
                  width={204}
                  height={55}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712312/Galamian/general/unicaja-grey_jvqdqp.svg"
                  alt="Unicaja Fundación"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormularioDeInscripcion;
