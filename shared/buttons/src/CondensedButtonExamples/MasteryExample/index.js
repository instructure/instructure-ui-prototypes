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

import { View } from '@instructure/ui-view'
import { Heading, MetricsList } from '@instructure/ui-elements'
import { Flex } from '@instructure/ui-flex'
import { Table } from '@instructure/ui-table'
import { Text } from '@instructure/ui-text'
import { ScreenReaderContent } from '@instructure/ui-a11y'

import {
  IconAssignmentLine,
  IconQuizLine
} from '@instructure/ui-icons'

import { Link } from '../../Link'

const headers = [
  'Object',
  'Exceeds Mastery',
  'Mastery',
  'Nearing Mastery',
  'Well Below Mastery'
]

export const MasteryExample = ({ condensedButton: CondensedButton }) => {
  const MasteryItem = ({ percentCompleted, level, studentCount, color }) => (
    <View
      display="block"
      borderWidth="small none small small"
      textAlign="center"
    >
      <View
        display="block"
        margin="small"
      >
        <MetricsList>
          <MetricsList.Item label={level} value={`${percentCompleted}%`} />
        </MetricsList>
        <CondensedButton margin="xxx-small none none">{`${studentCount} Students`}</CondensedButton>
      </View>
      <div style={{ height: '0.3rem', background: color, }}></div>
    </View>
  )

  const MasteryTableCell = ({ percentCompleted, studentCount }) => (
    <>
      <View display="block" margin="none none xx-small none">
        <Text>{`${percentCompleted}%`}</Text>
      </View>
      <CondensedButton>{`${studentCount} Students`}</CondensedButton>
    </>
  )

  const MasteryTableRowHeader = ({ icon: Icon, name }) => (
    <Flex alignItems="center">
      <Flex.Item margin="none small xxx-small none">
        <Icon size="x-small" />
      </Flex.Item>
      <Flex.Item>
        <Link href="#" isWithinText={false}>{name}</Link>
      </Flex.Item>
    </Flex>
  )

  const MasteryTable = () => (
    <Table
      caption={<ScreenReaderContent>Student mastery</ScreenReaderContent>}
      margin="large none none"
    >
      <Table.Head>
        <Table.Row>
          {(headers || []).map((header) => (
            <Table.ColHeader
              key={header}
              id={header}
            >
              {header}
            </Table.ColHeader>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <MasteryTableRowHeader icon={IconAssignmentLine} name="Assignment 1" />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={8} studentCount={4} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={38} studentCount={18} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={43} studentCount={22} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={22} studentCount={7} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <MasteryTableRowHeader icon={IconAssignmentLine} name="Assignment 2" />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={8} studentCount={4} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={38} studentCount={18} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={43} studentCount={22} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={22} studentCount={7} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <MasteryTableRowHeader icon={IconQuizLine} name="Quiz 1" />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={8} studentCount={4} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={38} studentCount={18} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={43} studentCount={22} />
          </Table.Cell>
          <Table.Cell>
            <MasteryTableCell percentCompleted={22} studentCount={7} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )

  return (
    <View display="block" margin="medium">
      <Heading as="h2" level="h3" margin="none none medium none">Mastery in this Course</Heading>
      <View display="block" borderWidth="none small none none">
        <Flex>
          <Flex.Item shouldGrow>
            <MasteryItem
              percentCompleted={8}
              level="3pts - Exceeds Mastery"
              studentCount={4}
              color="#3366A7"
            />
          </Flex.Item>
          <Flex.Item shouldGrow>
            <MasteryItem
              percentCompleted={38}
              level="3pts - Exceeds Mastery"
              studentCount={4}
              color="#4DA837"
            />
          </Flex.Item>
          <Flex.Item shouldGrow>
            <MasteryItem
              percentCompleted={43}
              level="3pts - Exceeds Mastery"
              studentCount={4}
              color="#F5B940"
            />
          </Flex.Item>
          <Flex.Item shouldGrow>
            <MasteryItem
              percentCompleted={22}
              level="3pts - Exceeds Mastery"
              studentCount={4}
              color="#DB3027"
            />
          </Flex.Item >
        </Flex>
      </View>
      <MasteryTable />
    </View>
  )
}