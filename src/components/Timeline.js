import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Timeline() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className='timeline-wrapper'>
    <ScrollMenu className="scroll-menu" LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
            className="card"
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button 
    className="arrow" 
    disabled={isFirstItemVisible} 
    onClick={() => scrollPrev()}
    style={
        {
            pointerEvents: isFirstItemVisible ? "none" : "initial",
            cursor: !isFirstItemVisible ? "pointer" : "initial",
        }}  
    >
      <h1 style={{fontWeight: "600"}}>&larr;</h1>
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button className="arrow"
        style={
        {
            pointerEvents: isLastItemVisible ? "none" : "initial",
            cursor: !isLastItemVisible ? "pointer" : "initial",
        }}  
        disabled={isLastItemVisible} onClick={() => scrollNext()}>
       <h1 style={{fontWeight: "600"}}>&rarr;</h1>
    </button>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
      className='card-wrapper'
    >

      <div
      className="card"
        style={{
          height: '200px',
        }}
      >
        <img  src="/david.png"/>
        </div>
    </div>
  );
}

export default Timeline;
