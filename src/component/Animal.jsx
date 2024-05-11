import React from 'react'
import jsonData from '../../animals.json'

function Animal() {
    const myAnimals = jsonData.animals
    function handleEvent(animal) {
        alert(`You clicked on ${animal.comment}`);
    }

    return (
        <section>
            {myAnimals.map((animal) => (
                <div key={animal.index} onClick={() => handleEvent(animal)}>
                    <img src={animal.profileImg} />
                    <h2> {animal.comment} </h2>
                </div>

            ))}

        </section>
    )
}

// function Example() {
//     function handleEvent() {
//       alert(`I am an event handler.
//         If you see this message,
//         then I have been called.`);
//     }
//     return (
//         <h1 onClick={handleEvent}>
//           Hello world
//         </h1>
//       );
//   }

export default Animal