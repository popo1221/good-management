import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const OrderListView = () => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Page
      className={classes.root}
      title="订单管理"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results orders={orders} />
        </Box>
      </Container>
    </Page>
  );
};

export default OrderListView;
