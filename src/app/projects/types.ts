import { StaticImageData } from "next/image";

export interface ProjectType {
  title: string;
  copy: string;
  imgSrc: StaticImageData | StaticImageData[];
  externalData?: {
    url: string,
    linkText: string,
  };
}