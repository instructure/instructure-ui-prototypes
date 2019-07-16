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
import { themeable } from '@instructure/ui-themeable'
import { Heading } from '@instructure/ui-elements'
import { Flex, View } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { Checkbox, FileDrop, TextArea } from '@instructure/ui-forms'
import { NumberInput } from '@instructure/ui-number-input'
import { Billboard } from '@instructure/ui-billboard'
import { IconEyeLine, IconOffLine, IconLinkLine, IconQuizSolid } from '@instructure/ui-icons'

import SingleSelect from '../SingleSelect'
import ValidatedInput from '../ValidatedInput'
import PreviewCard from '../PreviewCard'
import theme from './theme'
import styles from './styles.css'

class DetailsTab extends React.Component {

  render() {
    return (
    <div>
    <Flex alignItems="start" justifyItems="space-between" wrapItems>
      <Flex.Item grow>
        <Flex margin="medium 0 0 0" alignItems="end" wrapItems>
          <Flex.Item margin="0 small small 0" >
            <SingleSelect
              selectLabel="Visibility"
              selectedOptionId="1"
              options={[
                { id: '1', label: 'Visible', icon: <IconEyeLine inline={false} /> },
                { id: '2', label: 'Hidden', icon: <IconOffLine inline={false} /> },
                { id: '3', label: 'Private Link', icon: <IconLinkLine inline={false} /> }
              ]}
            />
          </Flex.Item>
          <Flex.Item margin="0 0 small 0">
            <Checkbox label="Open For Enrollment" value="open" variant="toggle" />
          </Flex.Item>
        </Flex>
        <Flex margin="medium 0" alignItems="center" wrapItems>
          <Flex.Item margin="0 small small 0">
            <NumberInput renderLabel="Student Cap" placeholder="0 (Unlimited)" />
          </Flex.Item>
          <Flex.Item margin="0 small small 0">
            <NumberInput renderLabel="Enrollment Fee" placeholder="$0.00 (Free)" />
          </Flex.Item>
          <Flex.Item align="end" margin="0 0 small 0">
            <div className={styles.formAlignment}>
              <Checkbox label="Display 'Free' Banner" value="free" />
            </div>
          </Flex.Item>
        </Flex>
        <Flex margin="medium 0" alignItems="center" wrapItems>
          <Flex.Item margin="0 small small 0">
            <NumberInput renderLabel="Days to Complete" placeholder="0 (self-paced)" />
          </Flex.Item>
          <Flex.Item margin="0 0 small 0">
            <NumberInput renderLabel="Credits" placeholder="0" />
          </Flex.Item>
        </Flex>
        <View as="div" width="28.125rem" margin="0 0 small 0">
          <SingleSelect
              selectLabel="Catalog"
              selectPlaceholder="Select a Catalog"
              options={[
                { id: '1', label: 'Catalog One' },
                { id: '2', label: 'Catalog Two' },
                { id: '3', label: 'Catalog Three' }
              ]}
            />
        </View>
        <View as="div" width="28.125rem" padding="medium 0 0" margin="0 0 small 0">
          <ValidatedInput
            label="URL Listing Path"
            placeholder="/course-title"
            hint="Lower-case letter, numbers and dashes"
            error="Create a unique URL Listing Path"
            pattern={/^[a-z0-9\-/]*$/}
          />
        </View>
        <View as="div" width="28.125rem" padding="medium 0 0" margin="0 0 small 0">
          <SingleSelect
              selectLabel="Section for New Enrollments"
              selectPlaceholder="Select a Section"
              options={[
                { id: '1', label: 'Section One' },
                { id: '2', label: 'Section Two' },
                { id: '3', label: 'Section Three' }
              ]}
            />
        </View>
        <View as="div" width="28.125rem" padding="medium 0 0" margin="0 0 small 0">
          <ValidatedInput
            label="List Order"
            error="Provide a list order integer"
            placeholder="0"
            pattern={/^[0-9]*$/}
          />
        </View>
        <View as="div" width="13.625rem" padding="medium 0 0" margin="0 0 small 0">
          <NumberInput
            renderLabel="List Order"
            placeholder="0"
          />
        </View>
        <View as="div" padding="medium 0 0" margin="0 0 small 0">
          <TextArea
            label="Full Description"
            height="15rem"
          />
        </View>
        <View as="div" padding="medium 0 0" margin="0 0 small 0">
          <TextArea
            label="Teaser"
            messages={[{ text: 'A brief paragraph summarizing the listing', type: 'hint' }]}
            height="10rem"
          />
        </View>
        <View as="div" padding="medium 0 0" margin="0 0 small 0">
          <Checkbox label="Use first 50 words from description" value="mini-description" />
        </View>
        <View as="div" padding="medium 0 0" margin="0 0 small 0">
          <FileDrop
            label={
              <Billboard
                size="large"
                heading="Drag an image here, or"
                message="Choose a file to upload"
                headingLevel="h1"
                hero={<IconQuizSolid />}
              />
            }
          />
        </View>
      </Flex.Item>
      <Flex.Item margin="0 0 0 xx-large">
        <Heading level="h3" margin="medium 0">Preview</Heading>
        <PreviewCard/>
      </Flex.Item>
    </Flex>
    <View as="div" borderWidth="small 0 0 0" textAlign="end" margin="large 0 medium 0">
      <Button margin="small">Delete</Button>
      <Button variant="primary">Save</Button>
    </View>
    </div>
    )
  }
}

export default themeable(theme, styles)(DetailsTab)
