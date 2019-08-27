import React from 'react';
import * as ReactDom from "react-dom";
import UserCard from "./user_card";
import Grid from "@material-ui/core/Grid";

class SearchExample extends React.Component {
  state = {searchString: ''};
  handleChange = (e) => {
    this.setState({searchString: e.target.value});
  };
  
  render() {
    let libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }
    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={1}>
          {libraries.map(function (element, i) {
              return <UserCard user={element} link={'/users/' + element.id}/>
          })}
        </Grid>
      </div>
    );
  }
}

// Constant, library
const libraries = [
  
  {props.users.map((user, i) => user}

];

// put input and display on page
ReactDom.render(
  <SearchExample items={libraries}/>,
  document.getElementById('content')
);
