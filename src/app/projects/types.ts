import { StaticImageData } from "next/image";

export interface ProjectType {
  id: string;
  title: string;
  copy: string;
  imgSrc: StaticImageData | StaticImageData[];
  externalData?: {
    url: string,
    linkText: string,
  };
}