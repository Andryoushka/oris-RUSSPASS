import "./CheckboxFilter.css"

function CheckboxFilter({ label, checked, onChange, name }) {
    return (
        <label className='checkbox-item'>
            <input 
                type="checkbox" 
                name={name}
                checked={checked}
                onChange={onChange}
                className='checkbox-input'
            />
            <span>{label}</span>
        </label>
    );
}

export default CheckboxFilter;