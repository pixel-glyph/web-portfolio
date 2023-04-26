import { clsx } from 'clsx';
import styles from './Toast.module.scss';

interface Props {
  show: boolean;
  text: string;
}

export default function Toast({ show, text }: Props) {
  return (
    <div
      className={clsx({
        [styles.toast]: true,
        [styles.show]: show,
      })}
    >
      {text}
    </div>
  );
}
