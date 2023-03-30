import Link from 'next/link';

export default function PageFooter() {
  return (
    <footer>
      <p>
        Copyright © {new Date().getFullYear()} Andrew Jensen-Battaglia •
        Frontend Developer
      </p>
      <div>
        <Link href="https://github.com/pixel-glyph" target="_blank">
          {/* SVG goes here */}
        </Link>
        <Link
          href="https://www.linkedin.com/in/ajensenbattaglia"
          target="_blank"
        >
          {/* SVG goes here */}
        </Link>
      </div>
    </footer>
  );
}
