import { useState } from 'react';
function Counter(){
  const[count, setCount]= useState(0);
  return (
    <>
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)
      }> count is {count}</button>
      <h1> Sanjana</h1>
      <p> I am a student.</p>
    </div>
    </>
  );
}
export default Counter