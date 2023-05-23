

const Car = ({ updateCar, deleteCar, setCar,addCar, carFromParent }) => {

    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCar(carFromParent);
        //console.log(car);
    }


    //change1

    return (
        <div>
           
            <h2> Update/Add/Delete a car:</h2>
            <form onSubmit={handleSubmit}>
                Model: <input type="text" value={carFromParent.model} onChange={(event) => setCar({ ...carFromParent, model: event.target.value })}></input> <br></br>
                Year: <input type="text" value={carFromParent.year} onChange={(event) => setCar({ ...carFromParent, year: event.target.value })}></input><br></br>
                Color: <input type="text" value={carFromParent.color} onChange={(event) => setCar({ ...carFromParent, color: event.target.value })}></input><br></br>
                <button type="submit">Update</button>
            </form>
            <button onClick={() => addCar({ model: carFromParent.model, year: carFromParent.year, color: carFromParent.color })}>Add</button>
            <button onClick={() =>deleteCar(carFromParent)}>Delete</button>
   
        </div>
    );

}
export default Car
