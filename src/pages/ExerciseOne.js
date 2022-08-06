

const ExerciseOne = () => {
    document.title = 'exercise1';
    return (
        <div className='text-center mt-5'>
            <h1>Exercise #1</h1>
            <p>Using the native HTML <code>button</code> tag, capture the click event and alert the message, "Clicked!".
                Take note that capturing events such as clicks is done differently in React than it is in JavaScript.</p>
            <button className='btn btn-primary m-5' onClick={() => alert("Clicked")}>Click me</button>
        </div>
    );
}

export default ExerciseOne;