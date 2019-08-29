import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from 'search-bar-react'
import PlacesCard from "../card_places";
import JwPagination from "jw-react-pagination";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.onClear = this.onClear.bind(this);
    
    this.state = {
      search: "",
      list: this.props.places.map((element) => element),
      filteredList: this.props.places.map((element) => element),
      pageOfItems: []
    };
  }
  
  
  renderElement(element, i) {
    return (
      <Grid item key={i} xs={12} sm={6} md={3} lg={3} xl={2}>
        <PlacesCard place={element} link={'places/'+ element.id}/>
      </Grid>
    );
  };
  
  onChangeSearch = e => {
    const {search} = this.state;
    this.setState({search: e});
    this.setState({filteredList: this.state.list.filter(element => {
        return element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })});
  };
  
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }
  
  onClear(){
    this.setState({ filteredList: this.state.list });
  }
  
  render() {
    return (
      <div>
        <SearchBar
          onChange={this.onChangeSearch}
          onClear={this.onClear}
          size='large'
          width='100%'
          placeholder='Поиск...'
        />
        <br/><br/>
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={3}>
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
