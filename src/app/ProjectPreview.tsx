import Image from 'next/image';
import Link from 'next/link';
import { ProjectPreviewType } from './types';

export default function ProjectPreview({
  title,
  desc,
  imgSrc,
  imgAlt,
  url,
}: ProjectPreviewType) {
  return (
    <li>
      <Link href={url}>
        <div>
          <h3>{title}</h3>
          <div></div>
          <p>{desc}</p>
        </div>
        <Image
          src={imgSrc}
          alt={imgAlt}
          // width={}
          // height={}
        />
      </Link>
    </li>
  );
}
