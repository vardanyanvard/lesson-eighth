import React from "react";
import PropTypes from "prop-types";
import { formFields, UserPropTypes } from "./Form";
import UserItem from "./UserItem";

function Table({ users }) {
  return (
    <div className="tableWrapper">
      <div className="tableContentWrapper">
        {!!users.length && (
          <table>
            <caption>Users</caption>
            <thead>
              <tr>
                {formFields.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserItem user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact(UserPropTypes)),
};

export default Table;
