function List(props) {
const category = props.category;
const itemList = props.items;

//   fruits.sort((a,b) => a.name.localeCompare(b.name)); // lexi sort
//   fruits.sort((a,b) => a.calories - b.calories); //calorie sort

//   const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  const listItems = itemList.map(item => <li key={item.id}>{item.name} &nbsp; {item.calories}</li>);

  return <><h3>{category}</h3><ol>{listItems}</ol></>;
}
export default List;
