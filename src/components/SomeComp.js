const SomeComp = () => {
    const listOfItems1 = [{name: 'asdf1', id: 1}, {name: 'asdf2', id: 2}];
    const [listOfItems, setListOfItems] = useState(listOfItems1);
    const clickHandler = () => {
        setListOfItems(pervState => [...prevState, {name: 'asdf3', id: 3}]);
    }
    return (
        <div>
        {listOfItems.map(item => <CustomComp key={item.id} nameInfo={item} />)} {/* map() will return new list of CustomCop with dynamic data */} 

        <button onClick={clickHandler}>click to add item</button>
        </div>
    )
}

export default SomeComp;

const CustomComp = () => {
    return (
        <div>
            {item.name}
        </div>
    )
}