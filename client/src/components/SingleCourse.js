import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import InlineEdit from "react-edit-inline2";

function SingleCourse(props) {
  const changeName = (val) => {
    props.updateMainData(0, props.sem, props.index, val);
  };
  const changeId = (val) => {
    props.updateMainData(1, props.sem, props.index, val);
  };
  const changeCredit = (val) => {
    props.updateMainData(2, props.sem, props.index, val);
  };
  const changeType = (val) => {
    props.updateMainData(3, props.sem, props.index, val);
  };

  const [dropdown, setDropDown] = useState(props.type);

  return (
    <div className="col-3">
      <div className="card px-1 my-2 bg-warning">
        <div className="card-body">
          <div>
            <InlineEdit
              text={props.name}
              placeholder="Name"
              paramName="message"
              change={(e) => changeName(e.message)}
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
              text={props.id}
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
              text={props.credits}
              placeholder="Credits"
              paramName="message"
              type="number"
              change={(e) => changeCredit(e.message)}
              validate={e=>(isNaN(e)===false)}
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
            onSelect={(e) => {
              setDropDown(e);
              changeType(e);
            }}
          >
            <Dropdown.Item eventKey="HSE">HSE</Dropdown.Item>
            <Dropdown.Item eventKey="BSE">BSE</Dropdown.Item>
            <Dropdown.Item eventKey="Open Elective">
              Open Elective
            </Dropdown.Item>
            <Dropdown.Item eventKey="Discipline Specific">
              Discipline Specific
            </Dropdown.Item>
            <Dropdown.Item eventKey="Compulsory">Compulsory</Dropdown.Item>
            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
