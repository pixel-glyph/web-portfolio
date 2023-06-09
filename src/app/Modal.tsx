import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Modal.module.scss';

interface ModalProps {
  show: boolean;
  toggle: () => void;
  children: ReactNode;
}

export default function Modal({ show, toggle, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [show]);

  const handleDialogClose = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
      toggle();
    }
  };

  const handleDialogCanel = () => {
    toggle();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => handleDialogClose(e)}
      onCancel={handleDialogCanel}
      className={styles.dialog}
    >
      <div className={styles.content}>
        <button className={styles.close} onClick={toggle}>
          <Image src="/close.svg" alt="close" width={25} height={25} />
        </button>
        {children}
      </div>
    </dialog>
  );
}
