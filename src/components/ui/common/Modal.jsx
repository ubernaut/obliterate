import './Modal.css';

/**
 * Modal Component
 * Provides overlay backdrop for menus and dialogs
 */
export default function Modal({
  children,
  onClose,
  showCloseButton = false,
  backdrop = true,
  ...props
}) {
  return (
    <div className="modal-overlay" onClick={backdrop && onClose ? onClose : undefined}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {showCloseButton && onClose && (
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  );
}