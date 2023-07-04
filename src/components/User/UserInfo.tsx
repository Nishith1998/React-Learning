import {
  Menu,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableHeader } from "../../models/constants";
import { FormValue, TableHeaderType } from "../../models/types";
import { Card } from "../UI/Card/Card";
import Table from "@mui/material/Table";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

type UserInfoProps = {
  onDelete: (userDetail: FormValue) => void;
  onEdit: (userDetail: FormValue) => void;
  userDetails: FormValue[];
};

export const UserInfo = (props: UserInfoProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const deleteHandler = (item: FormValue) => {
    props.onDelete(item);
    setAnchorEl(null);
  };

  const editHandler = (item: FormValue) => {
    props.onEdit(item);
    setAnchorEl(null);
  };

  const handleClickOnMoreVert = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const cellDataJSX = (colHeader: TableHeaderType, userInfo: FormValue) => {
    if (colHeader.id === "profilePic") {
      return (
        <img
          className="w-20 h-20 rounded-xl mx-auto object-contain"
          src={userInfo[colHeader.id].split("#")[1]}
          alt="userImg"
        ></img>
      );
    } else if (colHeader.id === "delete-action") {
      return (
        <>
          <button onClick={handleClickOnMoreVert}>
            <MoreVertIcon />
          </button>
          <Menu
            id="basic-menu"
            open={open}
            onClose={handleCloseMenu}
            anchorEl={anchorEl}
          >
            <MenuItem onClick={() => editHandler(userInfo)}>Edit</MenuItem>
            <MenuItem onClick={() => deleteHandler(userInfo)}>Delete</MenuItem>
          </Menu>
        </>
      );
    } else {
      return <span className="truncate">{userInfo[colHeader.id]}</span>;
    }
  };

  return (
    <>
      <Card className="bg-slate-100">
        <div className="text-lg text-center">Users Details</div>
        <Table stickyHeader aria-label="sticky table" className="bg-blue-50">
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
            {props.userDetails.map((row: FormValue) => {
              return (
                <TableRow
                  hover
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
