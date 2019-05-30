import React from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { View, Flex } from "@instructure/ui-layout";
import { Heading, List } from "@instructure/ui-elements";
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
            <Heading level="h4" margin="0 0 0 small">Course Menu</Heading>
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
        <List variant="unstyled" itemSpacing="xx-small">
          <List.Item>
            <Button variant="link" href="https://www.canvaslms.com/try-canvas">Home</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.getbridge.com">Announcements</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.arcmedia.com">Assignments</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.canvaslms.com/try-canvas">Discussions</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.getbridge.com">Grades</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.arcmedia.com">People</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.canvaslms.com/try-canvas">Pages</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.getbridge.com">Files</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.arcmedia.com">Syllabus</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.canvaslms.com/try-canvas">Outcomes</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.getbridge.com">Quizzes</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.arcmedia.com">Modules</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.canvaslms.com/try-canvas">Conferences</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.getbridge.com">Collaborations</Button>
          </List.Item>
          <List.Item>
            <Button variant="link" href="https://www.arcmedia.com">Settings</Button>
          </List.Item>
        </List>
      </View>
    );
  }
}
