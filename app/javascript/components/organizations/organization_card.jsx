import React from "react";
import Title from '../shared/title'

class OrganizationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      organizations_name: props.organization.name,
      organization_description: props.organization.description,
      organization_id:  'organizations/' + props.organization.id
    };
  }
  render () {
    return (
      <React.Fragment>
        <div className="card">
          <a href={this.state.organization_id}>
            <Title content={this.state.organizations_name}></Title>
          </a>
          <span className="card-product-hover-price">{this.state.organization_description}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default OrganizationCard
