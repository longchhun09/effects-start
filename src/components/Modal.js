import { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ open, children }, ref) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    
    if (open) {
      if (!modal.open) {
        modal.showModal();
      }
    } else {
      if (modal.open) {
        modal.close();
      }
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
