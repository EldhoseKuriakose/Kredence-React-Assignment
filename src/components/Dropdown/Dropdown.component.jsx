import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Dropdown({ handleDropdownChange }) {
  const classes = useStyles();
  const [dropdown, setDropdown] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setDropdown(event.target.value);
    handleDropdownChange(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Dropdown</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={dropdown}
          onChange={handleChange}
        >
          <MenuItem value="Info1">Info1</MenuItem>
          <MenuItem value="Info2">Info2</MenuItem>
          <MenuItem value="Info3">Info3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}