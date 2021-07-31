import { React, useState } from "react";
import "./form.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import API from '../api/index'
import { InputLabel  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Basic = () => {
  const classes = useStyles();
  const initialValues = {
    method: "",
    url: "",
  };

  const [values, setValues] = useState(initialValues);
  const [method, setMethod] = useState();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setMethod(event.target.value);
  };

  const methods = [
    {
      value: "get",
      label: "GET",
    },
    {
      value: "post",
      label: "POST",
    },
    {
      value: "put",
      label: "PUT",
    },
    {
      value: "delete",
      label: "DELETE",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: values.method,
          url: values.url,
        })
    };
      e.target.reset();
      const response = await API.post('users/create',requestOptions)
      console.log('response', response);
      if(response.status){
        
      }

  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="field">
        <InputLabel>Method</InputLabel>
        <TextField
          id="outlined-basic"
          select
          label="select"
          value={method}
          onChange={handleChange}
          // helperText="Please select your currency"
          variant="outlined"
        >
          {methods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="field">
      <InputLabel>Url</InputLabel>

        <TextField
          id="outlined-basic"
          label="URL"
          variant="outlined"
          multiline
        />
      </div>
      <div className="field">
        <Button variant="contained" color="primary" onSubmit={handleSubmit}>
          Generate
        </Button>
      </div>
    </form>
  );
};

export default Basic;
