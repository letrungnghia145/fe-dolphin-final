import { Link } from "react-router-dom";
import { URL } from "../../../constants";

export const UserItem = (props) => {
  const { fullname, createdDate, email, role, id } = props.user;
    console.log(props.user)
  return (
    <tr>
      <td>
        <img style={{marginTop: 10}}
          src="https://user-images.githubusercontent.com/30195/34457818-8f7d8c76-ed82-11e7-8474-3825118a776d.png"
          alt=""
        />
        <a href="#" className="user-link">
            {`${fullname}`}
        </a>
        <span className="user-subhead">{role}</span>
      </td>
      <td>{createdDate}</td>
      <td className="text-center">
        <span className="badge badge-pill badge-success p-2 px-3">Active</span>
      </td>
      <td>
        <a href={`mailto:${email}`}>{email}</a>
      </td>
      <td style={{ width: "20%" }}>
        <Link to={`/admin/users/info/${id}`} className="table-link">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x" />
            <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
          </span>
        </Link>
        <a href="#" className="table-link">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x" />
            <i className="fa fa-pencil fa-stack-1x fa-inverse" />
          </span>
        </a>
        <a href="#" className="table-link danger">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x" />
            <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
          </span>
        </a>
      </td>
    </tr>
  );
};
