import PropTypes from "prop-types";


 const Contacts= ({names, onDeleteContacts})=> {
           return (
            <ul>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <p>{name.name}:{name.number}</p>
                               
                <button onClick={()=>onDeleteContacts(name.id)}>DELETE</button>
                </li>))}
            </ul>
        )
    
}
Contacts.propTypes = {
    names: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func.isRequired,
};

export default Contacts
