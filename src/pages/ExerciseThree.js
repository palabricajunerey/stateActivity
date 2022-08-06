import { useState } from "react";


const ExerciseThree = () => {
    document.title = '#3';

    const [count,setCount] = useState(0);
    return (
        <div className='text-center mt-5'>
            <h1>Exercise #3</h1>
            <p>Use the useState React hook to track how many times a button is clicked, and display the number.
                The number must increment each time the button is clicked:</p>
            <button className='btn btn-primary mt-5' onClick={()=>setCount(count+1)}>Click me</button>
            <p>Button has clicked been: {count} times</p>
        </div>
    );
}

export default ExerciseThree;