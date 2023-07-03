import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { tableHeader } from "../../models/constants";
import { FormValueType, TableHeaderType } from "../../models/types";
import { Card } from "../UI/Card/Card";
import Table from "@mui/material/Table";

export const UserInfo = (props: {
  onDelete: (arg0: FormValueType) => void;
  onEdit: (arg0: FormValueType) => void;
  userDetails: FormValueType[];
}) => {
  const deleteHandler = (item: FormValueType) => {
    props.onDelete(item);
  };

  const editHandler = (item: FormValueType) => {
    props.onEdit(item);
  };

  const cellDataJSX = (colHeader: TableHeaderType, userInfo: FormValueType) => {
    if (colHeader.id === "profilePic") {
      return (
        <img
          className="w-20 h-20 rounded-xl mx-auto object-contain"
          src={userInfo[colHeader.id].split("#")[1]}
          alt="userImg"
        ></img>
      );
    } else if (colHeader.id === "delete-action") {
      return <button onClick={() => deleteHandler(userInfo)}>delete</button>;
    } else {
      return <span className="truncate">{userInfo[colHeader.id]}</span>;
    }
  };

  return (
    <>
      <Card>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeader.map((column: TableHeaderType) => (
                <TableCell
                  key={column.id}
                  // align={column.align}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.colName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userDetails.map((row: FormValueType) => {
              return (
                <TableRow
                  hover
                  onDoubleClick={() => editHandler(row)}
                  key={`row-${row.id}`}
                >
                  {tableHeader.map((column: TableHeaderType) => {
                    return (
                      <TableCell key={column.id} align="center">
                        {cellDataJSX(column, row)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
