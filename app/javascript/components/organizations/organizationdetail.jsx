import React from "react";

class OrganizationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      organizations_name: props.organization.name,
      organization_description: props.organization.description,
      organization_id:  props.organization.id,
      organization_users: props.users,
      approved_events: props.approved_events
    };
  }
  render () {
    return (
      <React.Fragment>
        <div className="card">
          <h1>{this.state.organizations_name}</h1>
          <div>
            <div className='users'>
              { this.state.organization_users.map((user, i) => <h1>user_name = { user.first_name }</h1>)}
            </div>
            <div>
              { this.state.approved_events.map((event, i) => <h1>event_name = { event.name }</h1>)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrganizationCard
