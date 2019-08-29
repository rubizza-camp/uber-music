import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from 'search-bar-react'
import EventCard from "../event_card";
import JwPagination from "jw-react-pagination";
import EventsCard from "../card_events";
import DialogWindow from "../navigation/dialog_window";
import MediumButton from "../button";

function UserHasOrganizationsButton() {
  return (
    <MediumButton content={'СОЗДАТЬ СОБЫТИЕ'} href = {`/events/new`}/>
  );
}

function UserHasNotOrganizationsButton() {
  return (
    <DialogWindow/>
  );
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.onClear = this.onClear.bind(this);

    this.state = {
      organizations: this.props.organizations,
      search: "",
      list: this.props.events.map((element) => element),
      filteredList: this.props.events.map((element) => element),
      pageOfItems: []
    };
  }

  state = {
    search: "",
  };

  renderElement(element, i) {
    return (
      <Grid item key={i} xs={12} sm={6} md={3} lg={3} xl={3}>
        <EventsCard name={element.name} start_time={element.start_time} end_time={element.end_time}
                    image={element.first_image_url}/>
      </Grid>
    );
  };

  onChangeSearch = e => {
    const {search} = this.state;
    this.setState({search: e});
    this.setState({
      filteredList: this.state.list.filter(element => {
        return element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
    });
  };

  onChangePage(pageOfItems) {
    this.setState({pageOfItems});
  }
  
  onClear() {
    this.setState({filteredList: this.state.list});
  }

  render() {
    return (
      <div>
        {this.state.organizations.length
          ? <UserHasOrganizationsButton/>
          : <UserHasNotOrganizationsButton/>}
        <br/><br/>
        <SearchBar
          onChange={this.onChangeSearch}
          onClear={this.onClear}
          size='large'
          width='100%'
          placeholder='Поиск...'
        />
        <br/><br/>
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={1}>
          {this.state.pageOfItems.map((element, i) => {
            return this.renderElement(element, i);
          })}
        </Grid>
        <br/>
        <center><JwPagination items={this.state.filteredList} onChangePage={this.onChangePage} pageSize={12}/></center>
      </div>
    );
  }
}

export default Search;
