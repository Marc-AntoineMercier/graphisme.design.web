import { useState, type ReactNode } from "react";
import { Drawer, type DrawerProps } from "@mui/material";

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

export type OptionsAnchor = DrawerProps["anchor"]

export type OptionProps = {
  render: {
    openButton: ReactNode;
    closeButton: ReactNode;
    content: ReactNode;
  },
	anchor?: OptionsAnchor;
}

export function Option({ render, anchor = "right" }: OptionProps) {
	const { openButton, closeButton, content } = render;
  const { state, close, open } = useOptions();

  return (
    <>
      <button type={"button"} onClick={open} >
        {openButton}
      </button>
      <Drawer open={state} onClose={close} anchor={anchor}>
        <div>
          <div>
            <button type={"button"} onClick={close}>
							{closeButton}
						</button>
          </div>
          <div>
            {content}
          </div>
        </div>
      </Drawer>
    </>
  )
}