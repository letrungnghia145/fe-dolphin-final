import { useSelector } from "react-redux";

export const InfoBoard = (props) => {
  const userInfo = useSelector((state) => state.page.userInfo);
  if (userInfo) {
    console.log(userInfo)
    const {fullname, age, email, phoneNumber} = userInfo;
    return (
        <>
          <h2>
            <i className="fa fa-address-card" aria-hidden="true"></i> Contact Info
          </h2>
          <table className="table table-borderless">
            <tbody>
            <tr>
              <th>Full Name:</th>
              <td>{fullname}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Username:</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <a href={`mailto:${email}`}>{email}</a>
              </td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{phoneNumber}</td>
            </tr>
            </tbody>
          </table>
        </>
    );
  }
  return null;
};
