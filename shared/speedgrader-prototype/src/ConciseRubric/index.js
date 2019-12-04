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
import PropTypes from 'prop-types'

import { View, Flex } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'
import { Tooltip } from '@instructure/ui-overlays'
import { Text } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconNoteLine, IconInfoLine } from '@instructure/ui-icons'
import Block from './Block'

export default class ConciseRubric extends React.Component {

  state = {
    showNoteInput: false,
    isChecked: false
  }

  handleShowNoteInput = () => {
    this.setState({
      showNoteInput: true
    })
  }

  handleHideNoteInput = () => {
    this.setState({
      showNoteInput: false
    })
  }

  render() {

    return (
      <div>
        <Block
          blockTitle="Setting"
          blockDescription="How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure."
          scale={[
            { id: "exceptional",
              name: "setting",
              value: 4,
              label: "Exceptional",
              summary: "Many vivid, descriptive words are used to tell when and where the story took place."
            },
            { id: "good",
              name: "setting",
              value: 3,
              label: "Good",
              summary: "Some vivid, descriptive words are used to tell the audience when and where the story took place."
            },
            { id: "fair",
              name: "setting",
              value: 2,
              label: "Fair",
              summary: "The reader can figure out when and where the story took place, but the author didn't supply much detail."
            },
            { id: "poor",
              name: "setting",
              value: 1,
              label: "Poor",
              summary: "The reader has trouble figuring out when and where the story took place."
            }
          ]}
        />
        <Block
          blockTitle="Characters"
          blockDescription="How well does the student flesh out their characters."
          scale={[
            { id: "exceptional",
              name: "character",
              value: 4,
              label: "Exceptional",
              summary: "The main characters are named and clearly described. Most readers could describe the characters accurately."
            },
            { id: "good",
              name: "character",
              value: 3,
              label: "Good",
              summary: "The main characters are named and described. Most readers would have some idea of what the characters looked like."
            },
            { id: "fair",
              name: "character",
              value: 2,
              label: "Fair",
              summary: "The main characters are named. The reader knows very little about the characters."
            },
            { id: "poor",
              name: "character",
              value: 1,
              label: "Poor",
              summary: "It is hard to tell who the main characters are."
            }
          ]}
        />
        <Block
          blockTitle="Dialogue"
          blockDescription="How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the social structure."
          scale={[
            { id: "exceptional",
              name: "dialogue",
              value: 4,
              label: "Exceptional",
              summary: "Many vivid, descriptive words are used to tell when and where the story took place."
            },
            { id: "good",
              name: "dialogue",
              value: 3,
              label: "Good",
              summary: "Some vivid, descriptive words are used to tell the audience when and where the story took place."
            },
            { id: "fair",
              name: "dialogue",
              value: 2,
              label: "Fair",
              summary: "The reader can figure out when and where the story took place, but the author didn't supply much detail."
            },
            { id: "poor",
              name: "dialogue",
              value: 1,
              label: "Poor",
              summary: "The reader has trouble figuring out when and where the story took place."
            }
          ]}
        />
        <Block
          blockTitle="Organization"
          blockDescription="How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the social structure."
          scale={[
            { id: "exceptional",
              name: "org",
              value: 4,
              label: "Exceptional",
              summary: "The main characters are named and clearly described. Most readers could describe the characters accurately."
            },
            { id: "good",
              name: "org",
              value: 3,
              label: "Good",
              summary: "The main characters are named and described. Most readers would have some idea of what the characters looked like."
            },
            { id: "fair",
              name: "org",
              value: "2",
              label: "Fair",
              summary: "The main characters are named. The reader knows very little about the characters."
            },
            { id: "poor",
              name: "org",
              value: 1,
              label: "Poor",
              summary: "It is hard to tell who the main characters are."
            }
          ]}
        />
    </div>
    )
  }
}
