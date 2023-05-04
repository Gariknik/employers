import {useState} from 'react';
import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase})=>{
    const [isIncrease, setIsIncrease] = useState(increase);
    const [isLike, setIsLike] = useState(false);
    let classNames = "list-group-item d-flex justify-content-between";
    if (isIncrease) classNames += " increase";
    if (isLike) classNames += " like";


    const handleOnIncrease = () => {
        setIsIncrease(!isIncrease);
    };

    const handleOnClassLike = () => {
        setIsLike(!isLike);
    };

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={handleOnClassLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={handleOnIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;