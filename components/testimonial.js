import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/solid';

export default function Testimonial() {
  const { t } = useTranslation();

  const testimonials = [
    {
      image: `https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712311/Galamian/general/testimonial-1_nyd1u4.webp`,
      text: `${t('inicio:testimonial_text_1')}`,
      author: `${t('inicio:testimonial_author_1')}`,
      position: `${t('inicio:testimonial_source_1')}`,
    },
    {
      image: `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/JOAG_igc3qm.webp`,
      text: `${t('inicio:testimonial_text_2')}`,
      author: `${t('inicio:testimonial_author_2')}`,
      position: `${t('inicio:testimonial_source_2')}`,
    },
    {
      image: `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/Programa_Musica_de_camara_qcxbt8.webp`,
      text: `${t('inicio:testimonial_text_3')}`,
      author: `${t('inicio:testimonial_author_3')}`,
      position: `${t('inicio:testimonial_source_3')}`,
    },
    {
      image: `https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/JOVEN_ARTISTA_tn6m6w.webp`,
      text: `${t('inicio:testimonial_text_4')}`,
      author: `${t('inicio:testimonial_author_4')}`,
      position: `${t('inicio:testimonial_source_4')}`,
    },
    {
      image: `https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712312/Galamian/general/testimonial-4_lkcerl.webp`,
      text: `${t('inicio:testimonial_text_5')}`,
      author: `${t('inicio:testimonial_author_5')}`,
      position: `${t('inicio:testimonial_source_5')}`,
    },
  ];
  return (
    <div className="pt-16 bg-white lg:pt-24">
      <div className="relative px-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval="12000"
          transitionTime="500"
          useKeyboardArrows
          swipeable={false}
          stopOnHover
          showStatus={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 30,
              cursor: 'pointer',
              width: 1,
              height: 1,
              color: 'transparent',
              backgroundColor: '#E6A165',
              borderRadius: 100,
            };
            const style = isSelected
              ? { ...defStyle, backgroundColor: 'white', color: 'transparent' }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {`GA`}
              </span>
            );
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative h-full px-8 py-24 bg-gold-600 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8"
            >
              <div className="absolute inset-0 object-cover w-full h-full opacity-50 filter saturate-0 mix-blend-multiply">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  unoptimized={true}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative text-left lg:col-span-1">
                <blockquote className="mt-6 text-white">
                  <h3 className="text-lg font-normal tracking-tight sm:text-xl">
                    {testimonial.text}
                  </h3>
                  <footer className="mt-6">
                    <p className="flex flex-col font-light">
                      <span>{testimonial.author}</span>
                      <span className="font-normal brightness-110 text-cream-500">
                        {testimonial.position}
                      </span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
