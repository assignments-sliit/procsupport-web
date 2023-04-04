import React from "react";
import PropTypes from "prop-types";

const UserListItem = ({
  userRec: { name, username, usertype, userstatus },
}) => {
  return (
    <div className="viewUserList">
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{username}</td>
          <td>{usertype}</td>
          <td>{userstatus}</td>
        </tr>
      </tbody>
    </div>
  );
};

UserListItem.propTypes = {
  userRec: PropTypes.object.isRequired,
};

export default UserListItem;
