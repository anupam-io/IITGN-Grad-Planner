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



  return (
    <div className="col-3">
      <div className="card px-1 my-2">
        <div className="card-body">
          <div>
            <InlineEdit
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
              text={credits}
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
            onSelect={changeType}
          >
            <div className="bg-secondary">

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
            </div>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
