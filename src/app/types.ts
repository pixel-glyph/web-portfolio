import { StaticImageData } from "next/image";

export interface NavLinkType {
  name: string;
  route: string;
  hasOnClick?: boolean;
}

export interface ProjectPreviewType {
  title: string;
  desc: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  url: string;
  hash: string;
}