import React, { useState, useEffect } from "react";
import { EditableText, EditableNumber } from "react-editables";

function SingleCourse(props) {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [credit, setCredit] = useState(null);



  useEffect(() => {
    // Contructor
    });

  return (
    <div className="col-3">
      <div className="card px-1 my-2 bg-warning">
        <div className="card-body">
          <EditableText
            value={props.name}
            onChange={setName}
            placeholder="Name"     
            />
          <EditableText
            value={props.id}
            onChange={setId}
            placeholder="Course ID"
            />
          <EditableNumber
            value={props.credits}
            onChange={setCredit}
            placeholder="Credits"
            />
        </div>
      </div>
      </div>
  );
}

export default SingleCourse;