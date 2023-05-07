import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase, onDelete, onToggleProp, rise, onChangeSalary, id})=>{
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) classNames += " increase";
    if (rise) classNames += " like";

    const handleChangeSalary = (e) => {
        let sal = Number(e.target.value.slice(0, e.target.value.length - 1));
        onChangeSalary(id, sal);
    };

    const handleKeyPress = (e) => {
        if (e.key === '-') {
            e.preventDefault();
        }
    };

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise">{name}</span>
            <input type="text"
                   className="list-group-item-input"
                   defaultValue={salary + '$'}
                   onChange={handleChangeSalary}
                   onKeyPress={handleKeyPress}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;