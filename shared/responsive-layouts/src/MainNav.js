import React from "react";
import PropTypes from "prop-types";
import { Navigation } from "@instructure/ui-navigation";
import { Avatar } from "@instructure/ui-elements";
import { Badge } from "@instructure/ui-elements";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import {
  IconInstructureLine,
  IconAdminLine,
  IconCalendarMonthLine,
  IconCoursesLine,
  IconDashboardLine,
  IconInboxLine,
  IconQuestionLine
} from "@instructure/ui-icons";

import "./styles.css";

export default class MainNav extends React.Component {
  state = {
    adminSelected: false,
    coursesSelected: true
  };
  static propTypes = {
    onRequestShowAdmin: PropTypes.func,
    isMinimized: PropTypes.bool,
    onMinimized: PropTypes.func,
  };
  static defaultProps = {
    onRequestShowAdmin: () => {},
    isMinimized: false,
    onMinimized: () => {}
  };
  handleAdminClick = () => {
    this.props.onRequestShowAdmin();
    this.setState({
      adminSelected: true,
      coursesSelected: false
    });
  };

  render() {
    return (
      <Navigation
        label="Main navigation"
        toggleLabel={{
          expandedLabel: "Minimize Navigation",
          minimizedLabel: "Expand Navigation"
        }}
        onMinimized={this.props.onMinimized}
      >
        <Navigation.Item
          icon={<IconInstructureLine size="small" />}
          label={<ScreenReaderContent>Home</ScreenReaderContent>}
        />
        <Navigation.Item
          icon={<Avatar name="Ziggy Marley" size="x-small" />}
          label="Account"
        />
        <Navigation.Item
          icon={<IconAdminLine />}
          label="Admin"
          onClick={this.handleAdminClick}
          selected={this.state.adminSelected}

        />
        <Navigation.Item
          icon={<IconDashboardLine />}
          label="Dashboard"
          href="#"
        />
        <Navigation.Item
          icon={<IconCoursesLine />}
          label="Courses"
          href="#"
          selected={this.state.coursesSelected}
        />
        <Navigation.Item
          icon={<IconCalendarMonthLine />}
          label="Calendar"
          href="#"
        />
        <Navigation.Item
          icon={
            <Badge count={99}>
              <IconInboxLine />
            </Badge>
          }
          label="Inbox"
          href="#"
        />
        <Navigation.Item 
          icon={<IconQuestionLine />} 
          label="Help" 
          href="#"
        />
      </Navigation>
    );
  }
}
