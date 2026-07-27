import { useEffect, useState } from "react";
import Loader from "./Loader";

const DelayedLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return show ? <Loader /> : null;
};

export default DelayedLoader;
