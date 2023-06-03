import { useState } from "react";

export default function Phonebook({onSubmit}) {
   

const [name, setName]=useState('');
const [number, setNumber]=useState('');
    
    const handleChange=event=>{
        const{name, value}=event.target;
       console.log (event.target.name);
       switch (name) {
        case 'name':
            setName(value);
            break;
            case 'number':
                setNumber(value);
                break;
        default:
            break;
       }
    }
    
   const resetForm = () => {
    setName('');
    setNumber('');
  };
   
    const handleSubmit = e => {
        e.preventDefault();

    onSubmit({name, number});
        resetForm();
    
    };



        return (<div>
            <h2>PHONEBOOK</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">
                    NAME
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    required
                ></input>
                <label for="number">
                    TEL NUMBER
                </label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    required
                ></input>
                <button type="submit">ADD CONTACT</button>

            </form>
        </div>
       
        )
    
}

// export default Phonebook

// onSubmit={this.handleSubmit}