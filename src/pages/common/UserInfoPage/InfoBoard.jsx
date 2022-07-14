import { useSelector } from "react-redux";

export const InfoBoard = (props) => {
  const userInfo = useSelector((state) => state.page.userInfo);
  if (userInfo) {
    const { firstName, lastName, age, email, phone } = userInfo;
    return (
      <>
        <h2>
          <i className="fa fa-address-card" aria-hidden="true"></i> Contact Info
        </h2>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th>First Name:</th>
              <td>{firstName}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Last Name:</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Age:</th>
              <td>{age}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <a href={`mailto:${email}`}>{email}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  return null;
};
