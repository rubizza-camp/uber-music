import React from 'react';
import Select from 'react-select';

class MusicianSkillSelect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption }); 
  };
  render() {
    const { selectedOption } = this.state;
    let options = []
    {
      options = this.props.musician_skills_array.map((skill) =>
      ( { value: skill.id, label: skill.name } ))
    }
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti
      />
    );
  }
}
export default MusicianSkillSelect;
