import {useState} from 'react';
import './employees-add-form.css';

const EmployeesAddForm = ({onAdd})=>{
    const [name, setInputName] = useState('');
    const [salary, setInputSalary] = useState('');

    const onInputValue = (e) => {
        if (e.target.name === 'name') {
            setInputName(e.target.value);
        } else if (e.target.name === 'salary') {
            setInputSalary(e.target.value);
        }
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        onAdd(name, salary);
    };

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onSubmit}>
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                       name="name"
                       value={name}
                       onChange={onInputValue}/>
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?"
                       name="salary"
                       value={salary}
                       onChange={onInputValue}/>

                <button type="submit"
                        className="btn btn-outline-light">
                    Добавить</button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;