import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, orders, ...rest }) => {
  const classes = useStyles();
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    let newSelectedOrderIds;

    if (event.target.checked) {
      newSelectedOrderIds = orders.map(order => order.id);
    } else {
      newSelectedOrderIds = [];
    }

    setSelectedOrderIds(newSelectedOrderIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrderIds.indexOf(id);
    let newSelectedOrderIds = [];

    if (selectedIndex === -1) {
      newSelectedOrderIds = newSelectedOrderIds.concat(selectedOrderIds, id);
    } else if (selectedIndex === 0) {
      newSelectedOrderIds = newSelectedOrderIds.concat(
        selectedOrderIds.slice(1)
      );
    } else if (selectedIndex === selectedOrderIds.length - 1) {
      newSelectedOrderIds = newSelectedOrderIds.concat(
        selectedOrderIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedOrderIds = newSelectedOrderIds.concat(
        selectedOrderIds.slice(0, selectedIndex),
        selectedOrderIds.slice(selectedIndex + 1)
      );
    }

    setSelectedOrderIds(newSelectedOrderIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedOrderIds.length === orders.length}
                    color="primary"
                    indeterminate={
                      selectedOrderIds.length > 0 &&
                      selectedOrderIds.length < orders.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>订单编号</TableCell>
                <TableCell>订单类型</TableCell>
                <TableCell>商品</TableCell>
                <TableCell>顾客</TableCell>
                <TableCell>已收金额</TableCell>
                <TableCell>购买时间</TableCell>
                <TableCell>状态</TableCell>
                <TableCell>备注</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(0, limit).map(order => (
                <TableRow
                  hover
                  key={order.id}
                  selected={selectedOrderIds.indexOf(order.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedOrderIds.indexOf(order.id) !== -1}
                      onChange={event => handleSelectOne(event, order.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      {order.id}
                    </Box>
                  </TableCell>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>
                    {order.type === '定制'
                      ? order.productExtension
                      : order.product.name}
                  </TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.paidAmount}</TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY HH:mm')}
                  </TableCell>
                  <TableCell>
                    {order.status}
                  </TableCell>
                  <TableCell>
                    {order.remark}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={orders.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
