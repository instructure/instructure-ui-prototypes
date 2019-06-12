import React from "react";
import { DrawerLayout, View } from "@instructure/ui-layout";

import CourseNav from "./CourseNav";
import ActionTray from "./ActionTray";
import AdminTray from "./AdminTray";
import MainContent from "./MainContent";
import MainNav from "./MainNav";

import "./styles.css";

export default class DrawerContainer extends React.Component {
  state = {
    showCourseNav: false,
    showActions: false,
    showBurgerBtn: true,
    showActionsBtn: true,
    showAdmin: false,
    isMinimized: false
  };
  handleShowAdmin = () => {
    this.setState({
      showAdmin: true
    });
  };
  handleHideAdmin = () => {
    this.setState({
      showAdmin: false
    });
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
  handleNavToggle = (e, isMinimized) => {
    this.setState({
      isMinimized
    })
  }
  render() {
    return (
      <View as="div" height="100vh" width="100%" margin="0 auto">
        <div className="mainNav" id="cake">
          <MainNav
            onRequestShowAdmin={this.handleShowAdmin}
            isMinimized={this.state.isMinimized}
            onMinimized={this.handleNavToggle}
          />
        </div>
        <div className={this.state.isMinimized ? "mainContent--Minimized" : "mainContent--Expanded"}>
          <DrawerLayout>
            <DrawerLayout.Tray
              label="Admin"
              open={this.state.showAdmin}
              placement="start"
              onDismiss={this.handleHideAdmin}
            >
              <AdminTray onRequestHideAdmin={this.handleHideAdmin} />
            </DrawerLayout.Tray>
            <DrawerLayout.Content label="Main Nav">
                <DrawerLayout>
                  <DrawerLayout.Tray
                    label="Course Actions"
                    open={this.state.showActions}
                    placement="end"
                    onDismiss={this.handleHideActions}
                  >
                    <ActionTray onRequestHideActions={this.handleHideActions} />
                  </DrawerLayout.Tray>
                  <DrawerLayout.Content label="Course Modules">
                    <DrawerLayout>
                      <DrawerLayout.Tray
                        label="Course Navigation"
                        open={this.state.showCourseNav}
                        placement="start"
                        onDismiss={this.handleHideCourseNav}
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
            </DrawerLayout.Content>
          </DrawerLayout>
        </div>
      </View>
    );
  }
}
