

const ExerciseFive = () => {
    document.title = '#5';
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <div className='text-center mt-5'>
            <h1>Exercise #5</h1>
            <p>Given an array:
                ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
                Use the map function to render them in an unordered list:</p>
            <div>
                {animals.map(items =>
                    <ul>
                        <li>
                            {items}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ExerciseFive;