import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Schools() {
  const { t } = useTranslation();
  const schools = [
    { name: `${t('academia:school_01')}` },
    { name: `${t('academia:school_02')}` },
    { name: `${t('academia:school_03')}` },
    { name: `${t('academia:school_04')}` },
    { name: `${t('academia:school_05')}` },
    { name: `${t('academia:school_06')}` },
    { name: `${t('academia:school_07')}` },
    { name: `${t('academia:school_08')}` },
    { name: `${t('academia:school_09')}` },
    { name: `${t('academia:school_10')}` },
    { name: `${t('academia:school_11')}` },
    { name: `${t('academia:school_12')}` },
  ];

  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        interval="3000"
        useKeyboardArrows
        swipeable={false}
        stopOnHover
        showStatus={false}
        renderIndicator={false}
        showArrows={false}
      >
        {schools.map((school) => (
          <div className="text-left" key={school.name}>
            {school.name}
          </div>
        ))}
      </Carousel>
    </div>
  );
}