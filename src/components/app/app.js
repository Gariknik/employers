import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emploees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

const App = () => {
    const data = [
        {name: "Alex M.", salary: 800, increase: false},
        {name: "Igor N.", salary: 1200, increase: true},
        {name: "Mikle Z.", salary: 1300, increase: false}
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