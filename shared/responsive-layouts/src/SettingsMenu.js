/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { Menu } from '@instructure/ui-menu'
import {
  IconMoreLine,
  IconIndentLine,
  IconEditLine,
  IconDuplicateLine,
  IconUpdownLine,
  IconTrashLine
} from '@instructure/ui-icons'

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
  )
}
