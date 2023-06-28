const tableHeader = [
  {
    id: "name",
    colName: "Name",
  },
  {
    id: "email",
    colName: "Email",
  },
  {
    id: "dob",
    colName: "Date of Birth",
  },
  {
    id: "highestEducation",
    colName: "Highest Education",
  },
  {
    id: "designation",
    colName: "Designation",
  },
  {
    id: "delete-action",
    colName: "Delete",
  },
];
export const UserInfo = (props: any) => {

  const deleteHandler = (item: {[key: string]: string}) => {
    props.onDelete(item);
  }
  
  const editHandler = (item: {[key: string]: string}) => {
    props.onEdit(item);
    
  }

  return (
    <>
      <div className="flex flex-row">
        {tableHeader.map((ele) => (
          <div className="w-40 truncate" key={`header-${ele.id}`}>
            {ele.colName}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {props.userDetails.map((ele: any) => (
          <div className="flex flex-row cursor-pointer" onDoubleClick={() => editHandler(ele)}>
            {tableHeader.map((innerEle: any) => (
              <div className="w-40 truncate" key={`cell-${innerEle.id}`}>
                {innerEle.id === "delete-action" && <button onClick={() => deleteHandler(ele)}>delete</button>}
                {innerEle.id !== "delete-action" && ele[innerEle.id]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
