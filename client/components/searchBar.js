import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';

const SearchBar = ({ handleTextSearch, handleBackspaceKey, handleClearSearch, searchText }) => {
    return (
        <div className='textfield-container'>
            <FormControl component="fieldset" style={{width: '250px', marginBottom: '10px'}}>
                <div style={{display: 'flex'}}>
                    <TextField 
                        style={{ backgroundColor: 'ivory', minWidth: '250px', borderRadius: '3px' }} 
                        value={searchText} placeholder="Text search for any column" 
                        onChange={ (e) =>  handleTextSearch(e)}
                        onKeyDown={ (e) => { if (e.key === 'Backspace'){ handleBackspaceKey(e) }}} 
                    />
                    <Button style={{ color: 'ivory', background: '#3f50b5', marginLeft: '5px' }} onClick={() => handleClearSearch()}>Clear</Button>
                </div>
            </FormControl>
        </div>
    )
}

export default SearchBar