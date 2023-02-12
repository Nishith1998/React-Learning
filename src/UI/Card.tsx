export default (props: any) => {
    return(
        <div className={"border-2 border-green-100 p-4 m-2 " + props.className}>
            {props.children}
        </div>
    );
}