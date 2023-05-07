import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary})=>{

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem
                    key={id}
                    id={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onChangeSalary={onChangeSalary}/>;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;