import Car from '../Car/Car'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const carsURL = "http://localhost:8888/cars";//end point from express 

const Cars = () => {
    console.log("1");
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({model: "" , year: "", color: ""});


    useEffect(() => {
        axios.get(carsURL).then((response) => {
            console.log(`response: ${response.data}`)
            setCars(response.data);
        });
    }, []);


console.log(JSON.stringify(cars));


    const updateCar = async (obj) => {
        //debugger;
        const data = await axios.put(`${carsURL}/${obj._id}`, obj)
        console.log(data)
        axios.get(carsURL).then((response) => {
           // console.log(response)
            setCars(response.data);
        });


   }

    const addCar = async (obj) => {
        //debugger;
        const data = await axios.post(`${carsURL}`, obj)
        console.log(data)
        axios.get(carsURL).then((response) => {
            console.log(response)
            setCars(response.data);
        });

    }

    const deleteCar = async (obj) => {
        //debugger;
        const data = await axios.delete(`${carsURL}/${obj._id}`, obj)
        console.log(data)
        axios.get(carsURL).then((response) => {
            console.log(response)
            setCars(response.data);
        });

    }

    return (
        <div>
            <div className='p-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) =>

                            <tr onClick={() => setCar({ _id: car._id, model: car.model, year: car.year, color: car.color })} key={index}>
                                <td>{index}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.color}</td>

                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Car updateCar={updateCar} setCar={setCar} addCar={addCar} deleteCar={deleteCar} carFromParent={car}></Car>
        </div>


    )
}

export default Cars