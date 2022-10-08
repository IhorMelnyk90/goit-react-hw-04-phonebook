import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormGroup, NameGroup, Input, Btn } from './ContactForm.styled';




export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');   
  };

  const handleChangeName = e => {
    const { value } = e.target;
   setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
   setNumber(value);
  };



  return (
    <FormGroup onSubmit={handleSubmit}>
        <NameGroup>
          <label htmlFor={nameId}>Name</label>
          <Input
            id={nameId}
            value={name}
            onChange={handleChangeName}            
            placeholder="Please enter new name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </NameGroup>
        <NameGroup>
          <label htmlFor={numberId}>Number</label>
          <Input
            id={numberId}
            value={number}
            onChange={handleChangeNumber}            
            placeholder="Please enter new number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </NameGroup>
        <Btn>Add contact</Btn>
      </FormGroup>
  )
}



// export default class ContactForm extends Component {
  // state = {
  //   name: '',
  //   number: '',
  // };

  // nameId = nanoid();
  // numberId = nanoid();

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = this.state;
  //   this.props.onSubmit({ name, number });
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // render() {
  //   // const { nameId, numberId, handleSubmit, handleChange } = this;
  //   return (
  //     <FormGroup onSubmit={handleSubmit}>
  //       <NameGroup>
  //         <label htmlFor={nameId}>Name</label>
  //         <Input
  //           id={nameId}
  //           value={this.state.name}
  //           onChange={handleChange}            
  //           placeholder="Please enter new name"
  //           type="text"
  //           name="name"
  //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           required
  //         />
  //       </NameGroup>
  //       <NameGroup>
  //         <label htmlFor={numberId}>Number</label>
  //         <Input
  //           id={numberId}
  //           value={this.state.number}
  //           onChange={handleChange}            
  //           placeholder="Please enter new number"
  //           type="tel"
  //           name="number"
  //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           required
  //         />
  //       </NameGroup>
  //       <Btn>Add contact</Btn>
  //     </FormGroup>
  //   );
  // }
// }