import { StaticImageData } from "next/image";

export interface NavLinkType {
  name: string;
  route: string;
}

export interface ProjectPreviewType {
  title: string;
  desc: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  url: string;
  hash: string;
}