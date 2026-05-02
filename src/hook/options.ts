import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export type UseOptionsContext = {
  autoClose?: boolean;
}

export const useOptions = ({ autoClose = true }: UseOptionsContext?) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  }

  useEffect(() => {
    if (autoClose) {
      setOpen(false);
    }  
  }, [location.pathname]);

  return {
    state: open,
    close: toggleDrawer(false),
    open : toggleDrawer(true)
  }
}
