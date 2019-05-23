import React from "react";
import { Button } from "@instructure/ui-buttons";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import { Menu } from "@instructure/ui-menu";
import {
  IconMoreLine,
  IconIndentLine,
  IconEditLine,
  IconDuplicateLine,
  IconUpdownLine,
  IconTrashLine
} from "@instructure/ui-icons";
import "./styles.css";

export default function settingsMenu() {
  return (
    <Menu
      placement="bottom"
      trigger={
        <Button variant="icon" icon={IconMoreLine} size="small">
          <ScreenReaderContent>Settings Menu</ScreenReaderContent>
        </Button>
      }
      mountNode={() => document.getElementById("main")}
    >
      <Menu.Item value="indent">
        <IconIndentLine /> Increase Indent
      </Menu.Item>
      <Menu.Item value="edit">
        <IconEditLine /> Edit
      </Menu.Item>
      <Menu.Item value="duplicate">
        <IconDuplicateLine /> Duplicate
      </Menu.Item>
      <Menu.Item value="move">
        <IconUpdownLine /> Move To...
      </Menu.Item>
      <Menu.Item value="remove">
        <IconTrashLine /> Remove
      </Menu.Item>
    </Menu>
  );
}
