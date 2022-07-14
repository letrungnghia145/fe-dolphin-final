import { useEffect } from "react";

export const AccordionItem = (props) => {
  const { name, id } = props.category;
  const { current, setCurrent, reset, resetSelected } = props;
  const check = current === id && !reset;
  const handleCheck = (event) => {
    const { checked } = event.target;
    checked ? setCurrent(id) : setCurrent(0);
    resetSelected(false);
  }
  return (
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0 cus-header">
          <a href="">{name}</a>
          <div className="cus-form-group">
            <input type="checkbox" id={id} checked={ check ? true : false}
             className={`cus-check${check || current === 0 || reset ? "": " disabled"}`} 
              onChange={(event) => handleCheck(event)}
             />
            <label htmlFor={id}></label>
          </div>
        </h5>
      </div>
    </div>
  );
};
