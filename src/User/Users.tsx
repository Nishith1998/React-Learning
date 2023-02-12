import UserCard from "./UserCard";

export default (props: { userList: { username: string; age: number }[] }) => {
  return (
    <div>
      {props.userList.map((item) => (
        <UserCard username={item.username} age={item.age} />
      ))}
    </div>
  );
};
