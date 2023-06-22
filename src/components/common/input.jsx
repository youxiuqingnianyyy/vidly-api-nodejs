import React from 'react'

export const Input = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                /*value={value} /!*using props to set the value*!/
                onChange={onChange}
                type={type}*/
                {...rest}
                id={name}
                name={name}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
            {/*if error is truthy, than the expression will be returned*/}
        </div>
    )
}
export default Input;
