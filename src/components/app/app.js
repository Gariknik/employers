import {useState} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emploees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

const App = () => {
    const data = [
        {name: "Alex M.", salary: 800, increase: false, rise: false, id: 1},
        {name: "Igor N.", salary: 1200, increase: false, rise: false, id: 2},
        {name: "Mikle Z.", salary: 1300, increase: false, rise: false, id: 3}
    ];

    const [dataState, setData] = useState(data);
    const [newId, setNewId] = useState(4);
    const employees = dataState.length;
    const increased = dataState.filter(item => item.increase).length;

    const deleteItem = (id) => {
        setData(dataState.filter(elem => elem.id !== id));
    };

    const addItem = (addName, addSalary) => {
        const addEmployee = {name: addName, salary: addSalary, increase: false, id: newId, rise: false};
        const newDataState = [...dataState, addEmployee];
        setNewId(prevId => prevId + 1);
        setData(newDataState);
        return newId;
    };


    const onToggleProp = (id, prop) =>{
        setData(dataState.map(elem => {
            if (elem.id === id) {
                return {...elem, [prop]: !elem[prop]};
            }
            return elem;
        }));
    };



    return (
        <div className="app">
            <AppInfo
                increased={increased}
                employees={employees}/>
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList
                data={dataState}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
                />
            <EmployeesAddForm
                data={dataState}
                onAdd={addItem}/>
        </div>
    );
};

export default App;