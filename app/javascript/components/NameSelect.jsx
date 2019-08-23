import React from 'react';
import Select from 'react-select';

class NameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null };
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption }); 
  };
  options = this.props.input_array.map((element) =>
     { value: element.id, label: element.name } ); 
  render() {
    const { selectedOption } = this.state;
   return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.options}
        isMulti
      />
    );
  }
}
export default NameSelect;
