import { Link } from "react-router-dom";

export const Heading = (props) => {
  return (
    <>
      <h1 className="mt-4 mb-3">{props.pageText}</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="">Home</Link>
        </li>
      </ol>
    </>
  );
};
