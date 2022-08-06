import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/80688428_10220717158389146_7177093031122698240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=egYsJmxiAUEAX_TTerG&_nc_ht=scontent-hou1-1.xx&oh=00_AT9gUqiNvxJrQQpnOdKD6QwscD9hPOMBpsEHzq-MnS1Qdg&oe=631424C4",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
