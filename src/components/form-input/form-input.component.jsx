import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, labelName, ...otherProps}) => {

    return(
        <div className="group">
            <input className='form-input'
                   onChange={handleChange}
                   {...otherProps}
            />
            {
                /* this is just like complicated conditions that we use in NgClass of angular */
                /* always apply form-input-label class on the field and decide logically if we
                * we have to apply shrink class or not.
                *  */
                labelName ?
                    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {labelName}
                    </label>)
                    : null
            }
        </div>
    );
}

export default FormInput;