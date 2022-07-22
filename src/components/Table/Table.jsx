import "./table.css";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

export const TableList = ({ cities }) => {
  return (
    <TableContainer className="table">
      <Table>
        <TableHead>
          <TableRow className="heading">
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((item, index) => {
            return item.name ? (
              <TableRow key={item.name}>
                <TableCell sx={index}>{item.id}</TableCell>
                <TableCell sx={index}>{item.name}</TableCell>
                <TableCell sx={index}>{item.type}</TableCell>
              </TableRow>
            ) : (
              <div>
                <h1>Not Found</h1>
              </div>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
