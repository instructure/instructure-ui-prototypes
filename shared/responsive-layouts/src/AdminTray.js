import React from "react";
import PropTypes from "prop-types";
import { View, Flex } from "@instructure/ui-layout";
import { Heading, List } from "@instructure/ui-elements";
import { Button } from "@instructure/ui-buttons";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import { IconXLine } from "@instructure/ui-icons";
import "./styles.css";

export default class AdminTray extends React.Component {
  static propTypes = {
    onRequestHideAdmin: PropTypes.func
  };
  static defaultProps = {
    onRequestHideAdmin: () => {}
  };
  handleAdminClose = () => {
    this.props.onRequestHideAdmin();
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
            <Heading level="h4" margin="0 0 0 small">Admin</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleAdminClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <View borderWidth="small 0">
          <List variant="unstyled" itemSpacing="xx-small">
            <List.Item>
              <Button variant="link" href="#">Super University</Button>
            </List.Item>
            <List.Item>
              <Button variant="link" href="#">Mega University</Button>
              </List.Item>
            <List.Item>
              <Button variant="link" href="#">User Sandbox</Button>
              </List.Item>
            <List.Item>
              <Button variant="link" href="#">Site Admin</Button>
            </List.Item>
            <hr/>
            <List.Item>
              <Button variant="link" href="#">Super University</Button>
            </List.Item>
          </List>
        </View>
      </View>
    );
  }
}
