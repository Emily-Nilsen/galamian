import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Noticias() {
  const { t } = useTranslation();

  const posts = [
    // {
    //   title: `${t('inicio:post_1_title')}`,
    //   href: '/galamian-junior',
    //   sentence01: `${t(
    //     'inicio:post_1_sent_1_part_1'
    //   )}${new Date().getFullYear()}/${new Date().getFullYear() + 1} ${t(
    //     'inicio:post_1_sent_1_part_2'
    //   )}`,
    //   sentence02: `${t(
    //     'inicio:post_1_sent_2_part_1'
    //   )}${new Date().getFullYear()} ${t(
    //     'inicio:post_1_sent_2_part_2'
    //   )}${new Date().getFullYear()}.`,
    //   date: `${t('inicio:post_1_date')}${new Date().getFullYear()}`,
    // },
    {
      title: `${t('inicio:post_2_title')}`,
      href: '/estudia',
      sentence01: `${t('inicio:post_2_sent_1')}${new Date().getFullYear()}/${
        new Date().getFullYear() + 1
      }.`,
      sentence02: `${t('inicio:post_2_sent_2')}`,
      sentence03: `${t('inicio:post_2_sent_3')}`,
      date: `${t('inicio:post_2_date')}${new Date().getFullYear()}`,
      datetime: '2020-03-16',
    },
  ];

  return (
    <section
      id="noticias"
      className="px-4 pt-16 pb-20 bg-neutral-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative max-w-lg mx-auto divide-y-2 divide-neutral-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gold-600 sm:text-4xl">
            {t('inicio:noticias_title')}
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"></div>
        </div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: 'fade',
            ease: 'easeIn',
          }}
          className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
        >
          {posts.map((post, i) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                type: 'fade',
              }}
              key={i}
            >
              <p className="pb-2 text-sm font-semibold text-gold-600">
                {post.date}
              </p>
              <Link href="#" passHref className="block mt-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-800">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-neutral-600">
                    {post.sentence01}
                  </p>
                  <p className="mt-3 text-base text-neutral-600">
                    {post.sentence02}
                  </p>
                  <p className="mt-3 text-base text-neutral-600">
                    {post.sentence03}
                  </p>
                </div>
              </Link>
              <div className="mt-3">
                <button>
                  <Link href={post.href}>
                    <a className="text-base font-semibold tracking-tight transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900">
                      {t('inicio:noticias_readmore')}
                    </a>
                  </Link>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
