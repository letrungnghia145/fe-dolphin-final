export const InfoBoard = (props) => {
  const { user } = props;
  return (
      <>
        <h2>
          <i className="fa fa-address-card" aria-hidden="true"></i> User Info
        </h2>
        <table className="table table-borderless">
          <tbody>
          <tr>
            <th>Id:</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>Full Name:</th>
            <td>{user.fullname}</td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          </tbody>
        </table>
      </>
  );
};
