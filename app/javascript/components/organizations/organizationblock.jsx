import React from "react";
import OrganizationCard from "./organizationcard";

class OrganizationBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { organizations: JSON.parse(props.organizations) };
  }

  render () {
    return (
      <React.Fragment>
        <div className='adasd'>
          { this.state.organizations.map((organization, i) => <OrganizationCard organization={ organization } key = {i} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default OrganizationBlock
