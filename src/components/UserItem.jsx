import React from "react";
import PropTypes from "prop-types";
import { formFields, UserPropTypes } from "./Form";

function UserItem({ user }) {
  return (
    <tr>
      {formFields.map((item) => (
        <td key={user.id + item}>
          {item === "Password" ? "*********" : user[item]}
        </td>
      ))}
    </tr>
  );
}

UserItem.propTypes = {
  user: PropTypes.exact(UserPropTypes),
};

export default UserItem;
