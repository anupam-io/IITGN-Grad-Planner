import React from 'react';
// Basic Sidedrawer
import { Div, Button, SideDrawer, Icon, Text } from "atomize";
import Guidelines from './Guidelines';

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: "4rem" }}>
        
        <Guidelines/>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Okay
        </Button>
        
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showSideDrawer: true })}
        >
          Guidelines
        </Button>
        <BasicSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;