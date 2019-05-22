import React from "react";
import { DrawerLayout, View } from "@instructure/ui-layout";

import CourseNav from "./CourseNav";
import ActionTray from "./ActionTray";
import MainContent from "./MainContent";

import "./styles.css";

export default class DrawerContainer extends React.Component {
  state = {
    showCourseNav: false,
    showActions: false,
    showBurgerBtn: true,
    showActionsBtn: true,
    showAdmin: false
  };
  handleShowCourseNav = () => {
    this.setState({
      showCourseNav: true,
      showBurgerBtn: false
    });
  };
  handleHideCourseNav = () => {
    this.setState({
      showCourseNav: false,
      showBurgerBtn: true
    });
  };
  handleShowActions = () => {
    this.setState({
      showActions: true,
      showActionsBtn: false
    });
  };
  handleHideActions = () => {
    this.setState({
      showActions: false,
      showActionsBtn: true
    });
  };

  render() {
    return (
      <View as="div" height="100vh" margin="0 auto">
        <DrawerLayout minWidth="41.875rem">
          <DrawerLayout.Tray
            label="Course Actions"
            open={this.state.showActions}
            placement="end"
            onDismiss={() => {
              this.setState({ showActions: false });
            }}
          >
            <ActionTray onRequestHideActions={this.handleHideActions} />
          </DrawerLayout.Tray>
          <DrawerLayout.Content label="Course Modules">
            <DrawerLayout>
              <DrawerLayout.Tray
                label="Course Navigation"
                open={this.state.showCourseNav}
                placement="start"
                onDismiss={() => {
                  this.setState({ showCourseNav: false });
                }}
              >
                <CourseNav onRequestHideCourseNav={this.handleHideCourseNav} />
              </DrawerLayout.Tray>
              <DrawerLayout.Content label="Drawer content example containing a responsive ">
                <MainContent
                  onRequestShowCourseNav={this.handleShowCourseNav}
                  onRequestShowActions={this.handleShowActions}
                  onRequestShowBurgerBtn={this.state.showBurgerBtn}
                  onRequestShowActionsBtn={this.state.showActionsBtn}
                />
              </DrawerLayout.Content>
            </DrawerLayout>
          </DrawerLayout.Content>
        </DrawerLayout>
      </View>
    );
  }
}
