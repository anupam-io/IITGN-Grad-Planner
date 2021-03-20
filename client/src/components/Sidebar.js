import React from "react";
// Basic Sidedrawer
import { Div, SideDrawer, Icon, Text } from "atomize";
import Guidelines from "./Guidelines";
import { Button } from "react-bootstrap";

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: "4rem" }}>
        <Guidelines />
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false,
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <div className="p-2">
        <div className="float-left">
          <Button
            // style={{position: "fixed"}}
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() => this.setState({ showSideDrawer: !this.state.showSideDrawer })}
          >
            Show guidelines
          </Button>
        </div>
        <BasicSideDrawer
          isOpen={showSideDrawer}
        />
      </div>
    );
  }
}

export default Drawer;
