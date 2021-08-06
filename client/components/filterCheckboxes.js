import { FormControlLabel, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const FilterCheckboxes = ({ filterByDepartment, hrCheckboxOn, adminCheckboxOn, financeCheckboxOn }) => {

    return(
        <div>
            <FormControl component="fieldset" style={{borderBlockColor: '#000', borderBlockStyle: 'solid', borderBlockWidth: '1px', marginBottom: '10px'}}>
                <FormLabel component="legend" style={{ color: '#002984'}}>Filter Issues By Department</FormLabel>
                <FormGroup style={{display: 'inline'}}>
                    <FormControlLabel
                        control={<Checkbox name="HR" checked={hrCheckboxOn} onChange={() => filterByDepartment("HR")}/>}
                        label="HR"
                    />
                    <FormControlLabel
                        control={<Checkbox name="Admin" checked={adminCheckboxOn} onChange={() => filterByDepartment("Admin")}/>}
                        label="Admin"
                    />
                    <FormControlLabel
                        control={<Checkbox name="Finance" checked={financeCheckboxOn} onChange={() => filterByDepartment("Finance")}/>}
                        label="Finance"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default FilterCheckboxes