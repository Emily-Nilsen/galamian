import Image from 'next/image';
import { motion } from 'framer-motion';

const image_1 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/Galamian%20Junior/estudio_cfejpd.jpg`;
const image_2 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/voice/voice-photo-img-05_acbsra.webp`;
const image_3 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-gallery-img-2_h9qctq.webp`;
const image_4 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-gallery-img-1_d2tip6.webp`;
const image_5 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/piano_studio_k67fog.webp`;
const image_6 = `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-gallery-img-3_qbt2bs.webp`;

export default function ViolinGalleryTwo() {
  return (
    <section className="overflow-hidden">
      {/* Large screens */}
      <div className="flex-wrap hidden -m-1 md:flex md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_1}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_2}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-full p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_3}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-full p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_4}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_5}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_6}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Small screens */}
      <div className="flex flex-wrap -m-1 md:hidden md:-m-2">
        <div className="flex flex-wrap w-full">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-none">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_1}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-1/2 p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_2}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="w-full p-1 md:p-2"
          >
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                unoptimized={true}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src={image_3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
