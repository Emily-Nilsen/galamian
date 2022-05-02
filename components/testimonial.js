import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Testimonial() {
  const { t } = useTranslation();

  const testimonials = [
    {
      image: `/static/testimonial-1.webp`,
      text: `${t('inicio:testimonial_text_1')}`,
      author: `${t('inicio:testimonial_author_1')}`,
      position: `${t('inicio:testimonial_source_1')}`,
    },
    {
      image: `/static/testimonial-2.webp`,
      text: `${t('inicio:testimonial_text_2')}`,
      author: `${t('inicio:testimonial_author_2')}`,
      position: `${t('inicio:testimonial_source_2')}`,
    },
    {
      image: `/static/estudia/violin/violin-photo-02.webp`,
      text: `${t('inicio:testimonial_text_3')}`,
      author: `${t('inicio:testimonial_author_3')}`,
      position: `${t('inicio:testimonial_source_3')}`,
    },
    {
      image: `/static/testimonial-2.webp`,
      text: `${t('inicio:testimonial_text_4')}`,
      author: `${t('inicio:testimonial_author_4')}`,
      position: `${t('inicio:testimonial_source_4')}`,
    },
    {
      image: `/static/testimonial-4.webp`,
      text: `${t('inicio:testimonial_text_5')}`,
      author: `${t('inicio:testimonial_author_5')}`,
      position: `${t('inicio:testimonial_source_5')}`,
    },
  ];
  return (
    <div className="bg-white pt-16 lg:pt-24">
      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <Carousel
          infiniteLoop
          autoPlay
          interval="10000"
          useKeyboardArrows
          swipeable
          stopOnHover
          showStatus={false}
          // centerMode
          // dynamicHeight
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative py-24 px-8 bg-gold-600 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8 h-full"
            >
              <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply w-full h-full object-cover">
                <Image
                  width={1000}
                  height={600}
                  src={testimonial.image}
                  alt={testimonial.author}
                  className=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative lg:col-span-1">
                <blockquote className="mt-6 text-white">
                  <p className="text-xl font-medium sm:text-2xl italic">
                    {testimonial.text}
                  </p>
                  <footer className="mt-6">
                    <p className="flex flex-col font-medium">
                      <span>{testimonial.author}</span>
                      <span className="text-cream-500">
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
