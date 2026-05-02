import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useOptions = () => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation();

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    }

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return {
        state: open,
        close: toggleDrawer(false),
        open : toggleDrawer(true)
    }
}
