import React from "react";
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
import AdminTray from "./AdminTray";

import "./styles.css";

export default class MainNav extends React.Component {
  state = {
    showAdmin: false
  };
  handleShowAdmin = () => {
    console.log("hey you got clicked");
    this.setState({
      showAdmin: true
    });
  };
  handleHideAdmin = () => {
    this.setState({
      showAdmin: false
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
          onClick={this.handleShowAdmin}
        >
          <AdminTray
            showAdmin={this.state.showAdmin}
            onRequestHideAdmin={this.handleHideAdmin}
          />
        </Navigation.Item>
        <Navigation.Item
          icon={<IconDashboardLine />}
          label="Dashboard"
          href="#"
        />
        <Navigation.Item
          selected
          icon={<IconCoursesLine />}
          label="Courses"
          href="#"
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
        <Navigation.Item icon={<IconQuestionLine />} label="Help" href="#" />
      </Navigation>
    );
  }
}
