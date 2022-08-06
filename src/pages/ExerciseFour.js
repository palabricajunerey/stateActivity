

const ExerciseFour = () => {
    document.title = 'exercise4';
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <div className='text-center mt-5'>
            <h1>Exercise #4</h1>
            <p>Given an array:
                ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
                Use the map function to render them in an unordered list:</p>
            <div>
                {animals.map(items =>
                    <ul>{items}</ul>
                    )}                
            </div>
        </div>
    );
}

export default ExerciseFour;