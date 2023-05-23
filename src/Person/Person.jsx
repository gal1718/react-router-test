

const Person = ({ updatePerson, deletePerson, setPersonCb,addPersonCb, personFromParent }) => {

    
    const handleSubmit = (event) => {
        event.preventDefault();
        updatePerson(personFromParent);
        //console.log(person);
    }


    return (
        <div>
            <h2> Update/Add/Delete a person:</h2>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" value={personFromParent.name} onChange={(event) => setPersonCb({ ...personFromParent, name: event.target.value })}></input> <br></br>
                Age: <input type="number" value={personFromParent.age} onChange={(event) => setPersonCb({ ...personFromParent, age: event.target.value })}></input><br></br>
                <button type="submit">Update</button>
            </form>
            <button onClick={() => addPersonCb({ name: personFromParent.name, age: personFromParent.age })}>Add</button>
            <button onClick={() =>deletePerson(personFromParent)}>Delete Person</button>

        </div>
    );

}
export default Person
