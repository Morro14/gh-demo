import { useFetchV3 } from "~/utils/fetchHook";
import MediaFullView from "../MediaFullView";
import { useNavContextProvider } from "../nav/NavContextProvider";
import type { Image } from "~/types/booking";
import type { ImageRes } from "~/types/general";
import useEmblaCarousel from "embla-carousel-react";
import { ImageLoading } from "../ImageLoading";
import PlaceholderFullView from "../placeholders/PlaceholderFullView";
import PlaceholderGrayBox from "../placeholders/PlaceholderGrayBox";

import { useInView } from "react-intersection-observer";

const MEDIA_URL_BASE = import.meta.env.VITE_MEDIA_BASE_URL;

export default function CarouselWide({ tag }: { tag: string }) {
  const { fetchedData } = useFetchV3("content/wide-images/" + tag);
  const images = fetchedData?.data?.data as Array<Image>;
  const imagesDefault = images
    ? images
    : Array(3).fill(<PlaceholderGrayBox></PlaceholderGrayBox>);
  const context = useNavContextProvider();
  const [emblaRef] = useEmblaCarousel({
    startSnap: 1,
    align: "center",
    loop: true,
  });
  const imageRes: ImageRes = "main";
  const { ref, inView, entry } = useInView({
    // threshold: 0.8,
    rootMargin: "100% 0% -50% 0%",
    // triggerOnce: true,
  });
  return (
    <div
      className={`transition-[height] duration-800 ${inView ? "2xl:h-[460px] md:h-[280px] h-[160px]" : "2xl:h-[388px] md:h-[220px] h-[110px]"}`}
      ref={ref}
    >
      <div className="embla max-w-screen h-full" ref={emblaRef}>
        <div className={`embla__container h-full`} ref={ref}>
          {imagesDefault.map((img, i) => (
            <div
              key={`img-wide-${i}`}
              className={`embla__slide shrink-0 mr-3 carousel-wide-image  w-full overflow-hidden`}
            >
              {" "}
              {images ? (
                <ImageLoading
                  imageAttrs={{
                    className:
                      "object-cover hover:cursor-pointer size-full hover:scale-102 origin-center transition-scale duration-600",
                    src: `${MEDIA_URL_BASE + img.variants[imageRes]}`,
                    alt: `img-place-wide-${i}`,

                    onClick: () => {
                      context.setFullImageView(true);
                      context.setItemSelected(i % 3);
                    },
                  }}
                  placeholderStatic={<PlaceholderGrayBox></PlaceholderGrayBox>}
                ></ImageLoading>
              ) : (
                img
              )}
            </div>
          ))}
        </div>
      </div>
      {context.fullImageView ? (
        <MediaFullView>
          <div className="h-[90vh]">
            <ImageLoading
              placeholderStatic=<PlaceholderFullView></PlaceholderFullView>
              placeholderLoading=<PlaceholderFullView></PlaceholderFullView>
              imageAttrs={{
                className: "h-full object-contain",
                src: `${MEDIA_URL_BASE}${images[context.itemSelected]["variants"]["original"]}`,
                alt: `${images[context.itemSelected].alt_text}-${
                  context.itemSelected
                }-full`,
              }}
            ></ImageLoading>
          </div>
        </MediaFullView>
      ) : (
        ""
      )}
    </div>
  );
}
