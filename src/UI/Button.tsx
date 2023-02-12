export default (prop: {children: string, onClick?: any, type: "button" | "submit" | "reset" | undefined}) => {
    return <button type={prop.type} onClick={prop.onClick} className="w-fit px-4 self-center bg-green-500 border-green-700 hover:bg-green-400 rounded-full border-2">{prop.children}</button>
}