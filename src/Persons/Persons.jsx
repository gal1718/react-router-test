import Person from '../Person/Person'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const personsURL = "http://localhost:8888/persons";//end point from express 

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({name: "" , age: ""});


    useEffect(() => {
        axios.get(personsURL).then((response) => {
            console.log(response)
            setPersons(response.data);
        });
    }, []);



    const updatePerson = async (obj) => {
        //debugger;
        const data = await axios.put(`${personsURL}/${obj._id}`, obj)
        console.log(data)
        axios.get(personsURL).then((response) => {
            console.log(response)
            setPersons(response.data);
        });


   }

    const addPerson = async (obj) => {
        //debugger;
        const data = await axios.post(`${personsURL}`, obj)
        console.log(data)
        axios.get(personsURL).then((response) => {
            console.log(response)
            setPersons(response.data);
        });

    }

    const deletePerson = async (obj) => {
        //debugger;
        const data = await axios.delete(`${personsURL}/${obj._id}`, obj)
        console.log(data)
        axios.get(personsURL).then((response) => {
            console.log(response)
            setPersons(response.data);
        });

    }

    return (
        <div>
            <div className='p-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person, index) =>

                            <tr onClick={() => setPerson({ _id: person._id, name: person.name, age: person.age })} key={index}>
                                <td>{index}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>

                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Person updatePerson={updatePerson} setPersonCb={setPerson} addPersonCb={addPerson} deletePerson={deletePerson} personFromParent={person}></Person>
        </div>


    )
}

export default Persons