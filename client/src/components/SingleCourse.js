import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import InlineEdit from "react-edit-inline2";

function SingleCourse(props) {
  const changeName = (val) => {
    setName(val);
    props.updateMainData(0, props.sem, props.index, val);
  };
  const changeId = (val) => {
    setId(val);
    props.updateMainData(1, props.sem, props.index, val);
  };
  const changeCredit = (val) => {
    setCredits(val);
    props.updateMainData(2, props.sem, props.index, val);
  };
  const changeType = (val) => {
    setDropDown(val);
    props.updateMainData(3, props.sem, props.index, val);
  };

  const [name, setName] = useState(props.name.toString());
  const [id, setId] = useState(props.id.toString());
  const [credits, setCredits] = useState(props.credits);
  const [dropdown, setDropDown] = useState(props.type);

  const decideColor = () => {
    if (dropdown === "HS") {
      return "primary";
    } else if (dropdown === "BS") {
      return "info";
    } else if (dropdown === "Open Elective") {
      return "warning";
    } else if (dropdown === "Discipline Specific") {
      return "danger";
    } else if (dropdown === "ES") {
      return "success";
    } else {
      return "dark";
    }
  };

  return (
    <div className="col-md-4 col-lg-3">
      <div className={"m-2 p-2 black-shadow half-radius bg-" + decideColor()}>
        <button
          type="button"
          className="close ml-auto p-2"
          aria-label="Close"
          onClick={() => props.deleteCourse(props.sem, props.index)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div>
          <InlineEdit
            className="text-light"
            key="0"
            text={name}
            placeholder="Name"
            paramName="message"
            change={(abc) => changeName(abc.message)}
            style={{
              display: "inline-block",
              padding: 5,
              fontSize: 18,
              outline: 0,
              border: 5,
            }}
          />
        </div>

        <div>
          <InlineEdit
            className="text-light"
            key="1"
            text={id}
            placeholder="Id"
            paramName="message"
            change={(e) => changeId(e.message)}
            style={{
              display: "inline-block",
              padding: 5,
              fontSize: 18,
              outline: 0,
              border: 5,
            }}
          />
        </div>
        <div>
          <InlineEdit
            className="text-light"
            text={credits.toString()}
            placeholder="Credits"
            paramName="message"
            type="number"
            change={(e) => changeCredit(e.message)}
            validate={(e) => {
              if (isNaN(e)) {
                return false;
              }
              if (e < 0) {
                return false;
              }
              return true;
            }}
            style={{
              display: "inline-block",
              padding: 5,
              fontSize: 18,
              outline: 0,
              border: 5,
            }}
          />
        </div>

        <DropdownButton
          className="my-2"
          id="dropdown-basic-button"
          title={dropdown}
          onSelect={changeType}
          variant="light"
        >
          <div className="bg-light">
            <Dropdown.Item eventKey="HS">HS</Dropdown.Item>
            <Dropdown.Item eventKey="BS">BS</Dropdown.Item>
            <Dropdown.Item eventKey="Open Elective">
              Open Elective
            </Dropdown.Item>
            <Dropdown.Item eventKey="Discipline Specific">
              Discipline Specific
            </Dropdown.Item>
            <Dropdown.Item eventKey="ES">ES</Dropdown.Item>
            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
          </div>
        </DropdownButton>
      </div>
    </div>
  );
}

export default SingleCourse;
