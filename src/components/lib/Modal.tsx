import Portal from "./Portal";

interface IModal {
  open: boolean;
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  title?: string | React.ReactNode;
  className?: string;
  [otherOptions: string]: unknown;
}

const Modal: React.FC<IModal> = ({
  open,
  children,
  onClose,
  title,
  className,
  ...props
}) => {
  if (!open) {
    return null;
  }
  return (
    <Portal>
      <div className="fixed inset-0 z-50 bg-slate-300 opacity-50" />
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-md border-slate-800 border-1 ${
          className ?? ""
        }`}
        {...props}
      >
        {title && (
          <>
            <div className="flex justify-between items-center font-semibold text-base text-slate-800 p-3">
              {title}
              <div onClick={onClose} className="cursor-pointer">
                Close
              </div>
            </div>
            <div className="h-px w-full bg-gray-200" />
          </>
        )}
        <div className="p-3">{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
