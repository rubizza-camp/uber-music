import React from "react";
import Search from "../shared/search/user_search";

class UserIndexLandingPage extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        <Search users={users}/>
      </div>
    );
  }
}

export default UserIndexLandingPage;
