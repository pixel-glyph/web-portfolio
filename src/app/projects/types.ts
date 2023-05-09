import { StaticImageData } from "next/image";

export interface ProjectType {
  id: string;
  title: string;
  copy: string[];
  images: Array<{
    src: StaticImageData,
    size?: 'mobile' | 'tablet',
  }>;
  externalData?: {
    url: string,
    linkText: string,
  };
}