import useEmblaCarousel from "embla-carousel-react";
import type { Review as ReviewType } from "~/types";
import { useFetchWithTranslation } from "~/utils/fetchHook";
import Review from "../index/Review";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PlaceholderGrayBox from "../placeholders/PlaceholderGrayBox";

export default function CarouselReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 40,
    align: "center",
  });
  const { i18n } = useTranslation();
  const { fetchedData } = useFetchWithTranslation({
    pathname: "content/reviews?limit=5",
    dependencies: [i18n.language],
  });
  const reviews: ReviewType[] | undefined = fetchedData?.data?.results;
  const reviewsConcat = reviews?.concat(reviews).concat(reviews);

  // autoplay
  const [autoScroll, setAutoScroll] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!emblaApi || autoScroll) {
      return;
    }

    const interval = setInterval(() => {
      emblaApi.goToNext();
    }, 6000);
    emblaApi.on("pointerdown", () => {
      clearInterval(interval);
    });
    setAutoScroll(interval);
  }, [autoScroll, emblaApi]);
  return (
    <div
      className="overflow-y-visible relative"
      style={{ anchorName: `--slideAnchor` }}
    >
      <div className="2xl:block hidden reviews-overlay absolute size-full pointer-events-none z-49 overflow-y-visible"></div>
      <div
        className={`"embla__viewport overflow-x-hidden overflow-y-visible w-screen pb-2 border-t border-b border-gray-warm-light select-none `}
        ref={emblaRef}
      >
        <div className={`embla__container h-64 overflow-y-visible`}>
          {reviewsConcat ? (
            reviewsConcat.map((item, i) => (
              <div
                key={`review-slide-${i}`}
                className="embla__slide shrink-0 w-90 mx-4 h-full overflow-y-visible "
              >
                <Review review={item} index={i}></Review>
              </div>
            ))
          ) : (
            <PlaceholderGrayBox></PlaceholderGrayBox>
          )}
        </div>
        {/* <div className="flex w-full justify-between px-4 pt-2"> */}
        {/*   <button */}
        {/*     className="text-sm text-gray-warm-mid" */}
        {/*     onClick={() => { */}
        {/*       clearInterval(autoScroll); */}
        {/*       emblaApi.goToPrev(); */}
        {/*     }} */}
        {/*   > */}
        {/*     {t("prev")} */}
        {/*   </button> */}
        {/*   <button */}
        {/*     className="text-sm text-gray-warm-mid" */}
        {/*     onClick={() => { */}
        {/*       clearInterval(autoScroll); */}
        {/*       emblaApi.goToNext(); */}
        {/*     }} */}
        {/*   > */}
        {/*     {t("next")} */}
        {/*   </button> */}
        {/* </div> */}
      </div>
    </div>
  );
}
