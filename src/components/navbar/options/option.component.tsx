import { type ReactNode } from "react";
import { Drawer, type DrawerProps } from "@mui/material";
import { useOptions } from "@/hook";

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
      <button className="hoverable" type={"button"} onClick={open}>
        {openButton}
      </button>
      <Drawer open={state} onClose={close} anchor={anchor}>
        <div className="drawer-container">
          <div className="drawer-container-header">
            <button className="hoverable" type={"button"} onClick={close}>
							{closeButton}
						</button>
          </div>
          <div className="drawer-container-content">
            {content}
          </div>
        </div>
      </Drawer>
    </>
  )
}