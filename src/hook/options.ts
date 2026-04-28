import { useState } from "react";

export const useOptions = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    }

    return {
        state: open,
        close: toggleDrawer(false),
        open : toggleDrawer(true)
    }
}