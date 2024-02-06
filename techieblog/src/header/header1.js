// import React, { useState } from 'react';

// const Card = ({ cardNumber }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div className={card ${isVisible ? 'visible' : 'hidden'}}>
//       <p>Card {cardNumber}</p>
//       <button onClick={toggleVisibility}>Toggle Card</button>
//     </div>
//   );
// };

// const CardContainer = () => {
//   const [cardsCount, setCardsCount] = useState(3);

//   const addCard = () => {
//     setCardsCount(cardsCount + 1);
//   };

//   return (
//     <div>
//       <button onClick={addCard}>Add Card</button>
//       {[...Array(cardsCount).keys()].map((index) => (
//         <Card key={index + 1} cardNumber={index + 1} />
//       ))}
//     </div>
//   );
// };

// export default CardContainer;
// import React from 'react'
// import "./header.css"
// import Content from './content'
// export default function HeaDer() {
//     const data=[{name:"html"},{name:"css"}]
//     const handleClick = event => {
//         return(
//             <div>
//                 <p>rose</p>
//                 <Content name={event}></Content>
//             </div>
//         )
//       };

//   return (
//     <div>
//         {data.map(v=>
//         <button key={v.name} onClick={() => handleClick(v.name)}>{v.name}</button>)}

        
//     </div>

//   )
// }
