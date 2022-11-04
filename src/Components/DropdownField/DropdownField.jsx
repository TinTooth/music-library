import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function dropDownField( {setField, field}) {
  return (
    <DropdownButton variant = "warning" id="search field" title = {field}>
      <Dropdown.Item onClick = {() => setField('Title')}>Title</Dropdown.Item>
      <Dropdown.Item onClick = {() => setField('Artist')}>Artist</Dropdown.Item>
      <Dropdown.Item onClick = {() => setField('Album')}>Album</Dropdown.Item>
      <Dropdown.Item onClick = {() => setField('Genre')}>Genre</Dropdown.Item>
      <Dropdown.Item onClick = {() => setField('All')}>All</Dropdown.Item>
  </DropdownButton>
  );
}

export default dropDownField;