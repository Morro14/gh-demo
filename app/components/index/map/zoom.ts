import type { Coords } from "~/types/map";
import { MAP_OPTIONS, MAP_SIZE_INIT } from "./utils";

interface zoomMapArgs {
  mapContainer: HTMLDivElement;
  mapSurface: HTMLDivElement;
  mapContent: HTMLDivElement;
  zoomNew: number;
  anchorRatio?: Coords;
  anchor?: Coords;
  zoomCurrent?: number;
}
export function zoomMap({
  mapContainer,
  mapSurface,
  mapContent,
  zoomNew,
  anchorRatio,
  anchor,
  zoomCurrent,
}: zoomMapArgs) {
  if (zoomNew < MAP_OPTIONS.zoomMin || zoomNew > MAP_OPTIONS.zoomMax) {
    return;
  }
  // mapSurface.style.left = `${Math.floor(newLeft)}px`;
  // mapSurface.style.top = `${Math.floor(newTop)}px`;
  // const translateX = -mapSurface.offsetLeft + anchor.x;
  // const translateY = -mapSurface.offsetTop + anchor.y;
  // const mapOffsetInit = {
  //   x: mapContainer.clientWidth / 2 - MAP_SIZE_INIT.x / 2,
  //   y: mapContainer.clientHeight / 2 - MAP_SIZE_INIT.y / 2,
  // };
  const zoomNorm = Math.max(
    Math.max(
      mapContainer.clientWidth / mapSurface.clientWidth,
      mapContainer.clientHeight / mapSurface.clientHeight,
    ),
    zoomNew,
  );
  console.log("zoomNorm", zoomNorm);
  const newSizeX = MAP_SIZE_INIT.x * zoomNorm;
  const newSizeY = MAP_SIZE_INIT.y * zoomNorm;
  if (MAP_SIZE_INIT) {
  }
  let minX = Math.floor(-newSizeX + mapContainer.clientWidth);
  let maxX = 0;
  let minY = Math.floor(-newSizeY + mapContainer.clientHeight);
  let maxY = 0;
  let offsetX = 0;
  let offsetY = 0;
  const newX = newSizeX * anchorRatio.x - anchor.x;
  const newY = newSizeY * anchorRatio.y - anchor.y;
  offsetX = Math.max(Math.min(maxX, -newX), minX);
  offsetY = Math.max(Math.min(maxY, -newY), minY);

  // console.log(MAP_SIZE_INIT.x, zoomNorm, anchorRatio.x, anchor.x);
  // anchor.y * (zoomNorm - zoomCurrent);
  // console.log("zoom", zoomNorm);
  // console.log("anchor", anchor);
  // console.log("anchorRatio", anchorRatio);
  mapSurface.style.left = `${offsetX}px`;
  mapSurface.style.top = `${offsetY}px`;
  // mapSurface.style.transformOrigin = `${translateX}px ${translateY}px`;
  mapSurface.style.scale = `${zoomNorm}`;
  // labels.style.scale = `${`${Math.floor(Math.pow(1 / zoomNorm, 0.8) * 100) / 100}`}`;
  // mapContent.style.scale = `${zoomNew}`;
}
