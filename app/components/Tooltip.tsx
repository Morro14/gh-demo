export default function Tooltip({
  pos = { x: 0, y: 0 },
  content,
  params,
}: {
  pos: { x: number; y: number };
  content: string;
  params: any;
}) {
  return (
    <div
      className="absolute bg-[#73706f] text-sm p-2 text-center font-medium hidden group-hover:flex text-white min-w-40 rounded origin-bottom-left starting:opacity-0 opacity-100 duration-150 transition-opacity"
      style={{ left: pos.x, bottom: pos.y }}
    >
      {content}
    </div>
  );
}
