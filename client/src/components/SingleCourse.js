import React, { useEffect, useState } from "react";
import { EditableText, EditableNumber } from "react-editables";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

function SingleCourse(props) {
  useEffect(() => {

  });

  const changeName = (val) => {
    props.updateMainData("name", props.sem, props.index, val);
  };
  const changeId = (val) => {
    props.updateMainData("id", props.sem, props.index, val);
  };
  const changeCredit = (val) => {
    props.updateMainData("credits", props.sem, props.index, val);
  };
  const changeType = (val) => {
    props.updateMainData("type", props.sem, props.index, val);
  };
  

  const [dropdown, setDropDown] = useState(props.type);

  return (
    <div className="col-3">
      <div className="card px-1 my-2 bg-warning">
        <div className="card-body">
          <EditableText
            value={props.name}
            onChange={changeName}
            placeholder="Name"
          />
          <EditableText
            value={props.id}
            onChange={changeId}
            placeholder="Course ID"
          />
          <EditableNumber
            value={props.credits}
            onChange={changeCredit}
            placeholder="Credits"
          />

          <DropdownButton
            className="my-2"
            id="dropdown-basic-button"
            title={dropdown}
            onSelect={e=>{setDropDown(e); changeType(e);}}
          >
            <Dropdown.Item eventKey="HSS">HSS</Dropdown.Item>
            <Dropdown.Item eventKey="BS">BS</Dropdown.Item>
            <Dropdown.Item eventKey="Open Elective">
              Open Elective
            </Dropdown.Item>
            <Dropdown.Item eventKey="Core-Compulsory">Core-Compulsory</Dropdown.Item>
            <Dropdown.Item eventKey="Extended Core">Extended Core</Dropdown.Item>
            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
