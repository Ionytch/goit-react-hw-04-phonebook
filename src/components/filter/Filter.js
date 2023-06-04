import PropTypes from "prop-types";


export const Filter = ({ filter, onFilter }) => {
    return (<div>
        <h2>filter</h2>
        <form>
            <label for="filter">
                find contacts by name
            </label>
            <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
                
            ></input>
                </form>  
        </div>
       
    )
}

Filter.propTypes = {
    Filter: PropTypes.string.isRequired,
    onFilter: PropTypes.string.isRequired,
};