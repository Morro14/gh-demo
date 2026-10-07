import type { Review } from "~/types/index";

export default function Review({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  // separating the reviewer's name and country with the review's content
  // TODO separate in API response
  const regexContent = /^[\s\S]+?(?=\r?\n\r?\n[^\r\n]+$)/;
  const matchContent = review.content.match(regexContent);
  const contentStripped = matchContent ? matchContent[0].trim() : "";
  const regexName = /(?<=(?:\r?\n){2})[^\r\n]+$/;

  const matchName = review.content.match(regexName);
  const name = matchName ? matchName[0].trim() : "";
  return !review ? (
    ""
  ) : (
    <div
      key={`review-${index}`}
      className="p-3 rounded-sm items-center h-full w-full flex flex-col justify-between group hover:text-accent transition-colors duration-300"
    >
      <div className="">{review.date}</div>
      <div className="transition-all overflow-clip bg-bg text-center h-36 text-base font-sans italic text-pretty starting:opacity-0 opacity-100 duration-300 whitespace-pre-wrap">
        {contentStripped}
      </div>
      {/* <div className="group-hover:opacity-0 opacity-100 absolute bottom-0 w-full h-6 bg-linear-to-t from-bg to-transparent"></div> */}
      <div className="italic text-sm">{name}</div>
    </div>
  );
}
