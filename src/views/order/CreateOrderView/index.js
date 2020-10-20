import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  InputLabel,
  FormControl,
  Input,
  InputAdornment,
  TextField,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
// import SimpleForm from './SimpleForm'
// import Results from './Results';
// import Toolbar from './Toolbar';
// import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(1)
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  }
}));

const CreateOrderView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="创建订单">
      <Container maxWidth={false}>
        <Box mt={3}>
          <form className={classes.form}>
            <div>
              <TextField
                id="select-customer"
                label="选择客户"
                variant="outlined"
              ></TextField>
              <Button>选择客户</Button>
            </div>
            <div>
              <TextField
                id="select-customer"
                label="选择商品"
                variant="outlined"
              ></TextField>
              <Button>选择商品</Button>
            </div>
          </form>
          {/* <SimpleForm /> */}
        </Box>
      </Container>
    </Page>
  );
};

export default CreateOrderView;
