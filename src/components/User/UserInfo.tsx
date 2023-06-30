import { tableHeader } from "../../models/constants";
import { FormValueType, TableHeaderType } from "../../models/types";
import { Card } from "../UI/Card/Card";

export const UserInfo = (props: any) => {
  const deleteHandler = (item: FormValueType) => {
    props.onDelete(item);
  };

  const editHandler = (item: FormValueType) => {
    props.onEdit(item);
  };

  const cellDataJSX = (colHeader: TableHeaderType, userInfo: FormValueType) => {
    if(colHeader.id === 'profilePic') {
      return <img className="w-20 h-20 rounded-xl mx-auto object-contain" src={userInfo[colHeader.id].split("#")[1]} alt="userImg"></img>
    } else {
      return <span className="truncate">{userInfo[colHeader.id]}</span>
    }
  } 

  return (
    <Card>
      <div className="flex flex-row">
        {tableHeader.map((colHeader: TableHeaderType) => (
          <div key={`header-${colHeader.id}`} className="w-40 truncate">
            {colHeader.colName}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {props.userDetails.map((userInfo: FormValueType) => (
          <div
            key={`row-${userInfo.id}`}
            className="flex flex-row cursor-pointer"
            onDoubleClick={() => editHandler(userInfo)}
          >
            {tableHeader.map((colHeader: TableHeaderType) => (
              <div className="flex w-40 items-center" key={`cell-${colHeader.id}`}>
                {colHeader.id === "delete-action" && (
                  <button onClick={() => deleteHandler(userInfo)}>delete</button>
                )}
                {colHeader.id !== "delete-action" && cellDataJSX(colHeader, userInfo)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};
