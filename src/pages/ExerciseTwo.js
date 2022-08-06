
const ExerciseTwo = () => {
    document.title = 'exercise2';
    return (
        <div className='text-center mt-5'>
            <h1>Exercise #2</h1>
            <p>Build your own Button component and render it three times. On user click, it should alert which button was clicked.</p>
            <button className='btn btn-primary m-1' onClick={() => alert("You clicked on Button 1")}>Button 1</button>
            <button className='btn btn-primary m-1' onClick={() => alert("You clicked on Button 2")}>Button 2</button>
            <button className='btn btn-primary m-1' onClick={() => alert("You clicked on Button 3")}>Button 3</button>
        </div>
    );
}

export default ExerciseTwo;