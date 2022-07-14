import { useEffect, useState } from "react";
import { FormCreate } from "./FormCreate";
import { FormEdit } from "./FormEdit";

export const SideControl = (props) => {
  const [active, setActive] = useState(false);
  const { category, resetSelected, setSelectedCategory } = props;
  const check = category ? true : false;
  const handleCancel = () => {
    setSelectedCategory(undefined);
    resetSelected(true);
    // setActive(false);
  };
  return (
    <>
      {/* <h3>Select to edit OR click add</h3> */}
      <div className="card">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0 cus-header">
            <span>
              {category
                ? `Editing: ${category.name}`
                : "Click button to create new Category"}
            </span>
            <button
              className={`btn-${check ? "danger" : "success"} btn`}
              onClick={() => (category ? handleCancel() : setActive(!active))}
            >
              {check ? "Cancel" : "Add category"}
            </button>
          </h5>
          <div
            className={`collapse${
              active || category !== undefined ? " show" : ""
            }`}
            data-parent="#accordion"
          >
            <div className="card-body text-left">
              {category ? (
                <FormEdit
                  setSelectedCategory={setSelectedCategory}
                  setActive={setActive}
                  category={category}
                />
              ) : (
                <FormCreate setActive={setActive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
