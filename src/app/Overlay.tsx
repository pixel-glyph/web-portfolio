import clsx from 'clsx';
import styles from './Overlay.module.scss';

interface OverlayProps {
  show: boolean;
  toggle: () => void;
}

export default function Overlay({ show, toggle }: OverlayProps) {
  return (
    <div
      onClick={toggle}
      className={clsx({
        [styles.overlay]: true,
        [styles.show]: show,
      })}
    ></div>
  );
}
