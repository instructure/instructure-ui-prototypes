import React from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { View, Flex } from "@instructure/ui-layout";
import { Heading, List, Link } from "@instructure/ui-elements";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import { IconXLine } from "@instructure/ui-icons";

import "./styles.css";

export default class CourseNav extends React.Component {
  static propTypes = {
    onRequestHideCourseNav: PropTypes.func
  };
  static defaultProps = {
    onRequestHideCourseNav: () => {}
  };
  handleCourseNavClose = () => {
    this.props.onRequestHideCourseNav();
  };
  render() {
    return (
      <View
        as="div"
        height="100%"
        width="16em"
        padding="small medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h4">Course Menu</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleCourseNavClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <List variant="unstyled" itemSpacing="small">
          <List.Item>
            <Link href="https://www.canvaslms.com/try-canvas">Home</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.getbridge.com">Announcements</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.arcmedia.com">Assignments</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.canvaslms.com/try-canvas">Discussions</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.getbridge.com">Grades</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.arcmedia.com">People</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.canvaslms.com/try-canvas">Pages</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.getbridge.com">Files</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.arcmedia.com">Syllabus</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.canvaslms.com/try-canvas">Outcomes</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.getbridge.com">Quizzes</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.arcmedia.com">Modules</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.canvaslms.com/try-canvas">Conferences</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.getbridge.com">Collaborations</Link>
          </List.Item>
          <List.Item>
            <Link href="https://www.arcmedia.com">Settings</Link>
          </List.Item>
        </List>
      </View>
    );
  }
}
