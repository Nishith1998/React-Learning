import Button from "./Button";
import ReactDOM from "react-dom";

export default (props: { msg: string; clickedOk: any }) => {
  const clickHandler = () => {
    props.clickedOk();
  };
  const overlayRoot = document.getElementById("overlay-root");
  return (
    overlayRoot &&
    ReactDOM.createPortal(<div>
      <div className="fixed flex inset-0 opacity-70 bg-green-500 z-10">
      </div>
      <div className="z-20 fixed top-1/2 left-1/2 bg-green-400 p-2 border-green-400">
        <header className="bg-red-500 px-2">Warning</header>
        <div className="p-2">{props.msg}</div>
        <footer className="flex justify-end">
          <Button type="button" onClick={clickHandler}>
            ok
          </Button>
        </footer>
      </div>
    </div>,
    overlayRoot)
  );
};
