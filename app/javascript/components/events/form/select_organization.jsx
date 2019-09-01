import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginBottom: 10,
    minWidth: 130,
    maxWidth: 300,
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function OrganizationSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(props.currentElements);

  function handleChange(event) {
    setPersonName(event.target.value);
    props.dataSender(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={props.id}>{props.name}</InputLabel>
        <Select
          value={personName}
          onChange={handleChange}
          input={<Input id={props.id}/>}
          MenuProps={MenuProps}
        >
          {props.map.map(element => (
            <MenuItem key={element.id} value={element.id} style={getStyles(element.name, personName, theme)}>
              {element.name}
            </MenuItem>
          ))}
        </Select>
        {props.hasError && <FormHelperText>Это поле обязательно!</FormHelperText>}
      </FormControl>
    </div>
  );
}
