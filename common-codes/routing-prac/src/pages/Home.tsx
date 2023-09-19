import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <div>This is Home Page</div>
      <button onClick={buttonClickHandler}>Navigate to Products</button>
    </>
  );
};
