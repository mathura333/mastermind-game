import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortal {
  children: React.ReactNode;
  selector?: string;
}

const Portal: React.FC<IPortal> = ({
  children,
  selector = "mastermind-portal",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    return () => {
      setMounted(false);
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(`#${selector}`) as Element | DocumentFragment
      )
    : null;
};

export default Portal;
