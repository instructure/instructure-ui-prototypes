import React from "react";
import PropTypes from "prop-types";
import { View, Flex } from "@instructure/ui-layout";
import { Heading, List } from "@instructure/ui-elements";
import { Button } from "@instructure/ui-buttons";
import { Tray } from "@instructure/ui-overlays";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import { IconXLine } from "@instructure/ui-icons";
import "./styles.css";

export default class AdminTray extends React.Component {
  static propTypes = {
    onRequestHideAdmin: PropTypes.func,
    showAdmin: PropTypes.bool
  };
  static defaultProps = {
    onRequestHideAdmin: () => {},
    showAdmin: false
  };
  handleAdminClose = () => {
    this.props.onRequestHideAdmin();
  };
  render() {
    console.log(this.props.open);
    return (
      <Tray
        label="Tray Example"
        open={true}
        onDismiss={this.handleAdminClose}
        size="small"
        placement="start"
      >
        <View
          as="div"
          height="100%"
          width="16em"
          padding="small medium"
          textAlign="start"
        >
          <Flex justifyItems="space-between" margin="0 0 medium 0">
            <Flex.Item grow>
              <Heading level="h4">Admin</Heading>
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
            <List variant="unstyled">
              <List.Item>Super University</List.Item>
              <List.Item>Mega University</List.Item>
              <List.Item>User Sandbox</List.Item>
              <List.Item>Site Admin</List.Item>
              <List.Item>separator?</List.Item>
              <List.Item>Super University</List.Item>
            </List>
          </View>
        </View>
      </Tray>
    );
  }
}
