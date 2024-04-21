import * as React from "react";
import { useSelector } from "react-redux";
// material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  Chip,
} from "@material-ui/core";

import image1 from "../../asserts/images/image1.jpg";

// assets
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";

// table data
function createData(id, name, company, type, qty, date, status) {
  return { id, name, company, type, qty, date, status };
}

const rowsInitial = [
  createData(
    "790841",
    "Joseph William 1",
    "Toronto",
    "Credit Card",
    2500,
    "12.07.2018",
    3
  ),
  createData(
    "790842",
    "Anshan Handgun 2",
    "Toronto",
    "Paytm",
    5000,
    "12.07.2018",
    2
  ),
  createData(
    "798699",
    "Larry Doe 3",
    "Toronto",
    "Net Banking",
    2500,
    "12.07.2018",
    1
  ),
  createData(
    "790752",
    "Sara Soudan 4",
    "Toronto",
    "Upi",
    5000,
    "12.07.2018",
    1
  ),
  createData(
    "790955",
    "Joseph William 5",
    "Toronto",
    "Credit Card",
    2500,
    "12.07.2018",
    2
  ),
  createData(
    "790785",
    "Anshan Handgun 6",
    "Toronto",
    "Upi",
    5000,
    "12.07.2018",
    3
  ),
  createData(
    "800837",
    "Larry Doe 7",
    "Toronto",
    "Paytm",
    2500,
    "12.07.2018",
    3
  ),
  createData(
    "810365",
    "Sara Soudan 8",
    "Toronto",
    "Net Banking",
    5000,
    "12.07.2018",
    2
  ),
  createData(
    "810814",
    "Sara Soudan 20",
    "Toronto",
    "Upi",
    2500,
    "12.07.2018",
    1
  ),
  createData(
    "820385",
    "Joseph William 9",
    "Toronto",
    "Net Banking",
    5000,
    "12.07.2018",
    1
  ),
  createData(
    "820885",
    "Anshan Handgun 10",
    "Toronto",
    "Credit Card",
    2500,
    "12.07.2018",
    1
  ),
  createData(
    "830390",
    "Larry Doe 11",
    "Toronto",
    "Paytm",
    5000,
    "12.07.2018",
    2
  ),
  createData(
    "830879",
    "Sara Soudan 12",
    "Toronto",
    "Upi",
    2500,
    "12.07.2018",
    3
  ),
  createData(
    "900111",
    "Joseph William 13",
    "Toronto",
    "Upi",
    5000,
    "12.07.2018",
    3
  ),
  createData(
    "900836",
    "Anshan Handgun 14",
    "Toronto",
    "Credit Card",
    2500,
    "12.07.2018",
    2
  ),
  createData(
    "900112",
    "Larry Doe 15",
    "Toronto",
    "Paytm",
    5000,
    "12.07.2018",
    2
  ),
  createData(
    "900871",
    "Sara Soudan 16",
    "Toronto",
    "Upi",
    2500,
    "12.07.2018",
    1
  ),
  createData(
    "910232",
    "Joseph William 17",
    "Toronto",
    "Upi",
    5000,
    "12.07.2018",
    2
  ),
  createData(
    "910886",
    "Anshan Handgun 18",
    "Toronto",
    "Credit Card",
    2500,
    "12.07.2018",
    3
  ),
  createData(
    "910232",
    "Larry Doe 19",
    "Toronto",
    "Net Banking",
    5000,
    "12.07.2018",
    2
  ),
];

// table sort
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// style constant
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
}));

const OrderList = () => {
  const classes = useStyles();
  const theme = useTheme();

  const counter = useSelector(state => state.cart)

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState("");
  const [rows, setRows] = React.useState(counter);

  const handleSearch = (event) => {
    const newString = event.target.value;
    setSearch(newString);

    if (newString) {
      const newRows = rows.filter((row) => {
        let matches = true;

        const properties = ["name", "company", "type", "qty", "id"];
        let containsQuery = false;

        properties.forEach((property) => {
          if (
            row[property]
              .toString()
              .toLowerCase()
              .includes(newString.toString().toLowerCase())
          ) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
        return matches;
      });
      setRows(newRows);
    } else {
      setRows(rowsInitial);
    }
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <CardContent>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearch}
              placeholder="Search Order"
              value={search}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </CardContent>

      {/* table */}
      <TableContainer>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      onClick={(event) => handleClick(event, row.name)}
                      sx={{ cursor: "pointer" }}
                    >
                      <img src={image1} width="50" />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      onClick={(event) => handleClick(event, row.name)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            theme.palette.mode === "dark"
                              ? "grey.600"
                              : "grey.900",
                        }}
                      >
                        {" "}
                        {row.name}{" "}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">{row.price}</TableCell>

                    <TableCell align="center">
                      <Chip label="Add More" size="small" chipcolor="primary" />
                    </TableCell>
                    <TableCell align="center" sx={{ pr: 3 }}>
                      <IconButton color="secondary">
                        <DeleteIcon sx={{ fontSize: "1.3rem" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* table pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default OrderList;
