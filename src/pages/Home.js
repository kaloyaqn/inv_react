import React, {useState, useEffect, useMemo } from 'react'
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import axios from "axios";
import {FaPencilAlt, FaTrashAlt, FaEye} from "react-icons/fa"


const Home = () => {

    const [data, setData] = useState([]);

    const loadData =  async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        console.log(response);
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

  return (
    <div className='container'>
        <h2 className='mt-5 mb-4'>Продукти</h2>   
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Име</th>
                    <th>Фирма</th>
                    <th>Локация</th>
                    <th>Лице</th>
                    <th>Дата</th>
                    <th>Брой</th>
                    <th>Стойност</th>
                    <th>Общо</th>
                    <th>Дата на запис</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={item.ID}>
                            <td>{item.ID}</td>
                            <td>{item.ime}</td>
                            <td>{item.firma}</td>
                            <td>{item.lokaciq}</td>
                            <td>{item.lice}</td>
                            <td>{new Date (item.date).toLocaleDateString('en-GB')}</td>
                            <td>{item.broi}</td>
                            <td>{item.stoinost}</td>
                            <td>{item.obshto}</td>
                            <td>{new Date(item.datetime).toLocaleString('en-GB', {dateStyle: 'short', timeStyle: 'short'})}</td>
                            <td className='"d-flex justify-content-around '>
                                <Link to={`/edit/${item.ID}`}>
                                    <button className='btn btn-warning'><FaPencilAlt /></button>
                                </Link>
                                <button className='btn btn-danger'><FaTrashAlt /></button>
                                <Link to={`/view/${item.ID}`}>
                                    <button className='btn btn-success'><FaEye /></button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Home

//https://youtu.be/8ly39na3LLM?t=2123