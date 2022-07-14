import { Link } from "react-router-dom";
import { URL } from "../../../constants";

export const ItemRow = (props) => {
  const { id, title, createdDate, author, tags, countViews } = props.post;
  const { id: uid, firstName, lastName } = author;
  return (
    <tr>
      <td style={{ minWidth: 380 }} className="custom-td">
        <Link to={`${URL.POST_DETAILS_URL}/${id}`}>{title}</Link>
        <i className="fa fa-tags custom-hoverable" aria-hidden="true">
            <div>{tags.map((tag)=>`${tag.name}, `)}</div>
        </i>
      </td>
      <td>{createdDate}</td>
      <td>
        <span className="badge badge-pill badge-success p-2 px-3">{`Views: ${countViews}`}</span>
      </td>
      <td className="custom-td">
        <Link to={`${URL.USER_INFO_URL}/${uid}`}>
          {`${firstName} ${lastName}`}
        </Link>
      </td>
    </tr>
  );
};
