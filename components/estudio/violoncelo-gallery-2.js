import Image from 'next/image';

export default function ViolonceloGalleryTwo() {
  return (
    <section className="overflow-hidden bg-neutral-50 md:pb-6">
      {/* Large screens */}
      <div className="hidden md:flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-06.webp"
              />
            </div>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-04.webp"
              />
            </div>
          </div>
          <div className="w-full p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-07.webp"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/group-photo-07.webp"
              />
            </div>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-violin-photo-03.webp"
              />
            </div>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-violin-photo-02.webp"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Small screens */}
      <div className="md:hidden flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-none">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-06.webp"
              />
            </div>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-04.webp"
              />
            </div>
          </div>
          <div className="w-full p-1 md:p-2">
            <div className="block object-cover object-center w-full h-full rounded-lg">
              <Image
                width={1500}
                height={1000}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="gallery"
                src="/static/estudia/cello/cello-photo-07.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
