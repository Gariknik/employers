import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emploees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

const App = () => {
    const data = [
        {name: "Alex M.", salary: 800, increase: false, id: 1},
        {name: "Igor N.", salary: 1200, increase: false, id: 2},
        {name: "Mikle Z.", salary: 1300, increase: false, id: 3}
    ];


    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
};

export default App;