import React from "react";
import PropTypes from "prop-types";

export function RadioButtonGroup({ isDisabled, label, isChecked,showErrorMessage, isHorizontal}) {
  const showErrorMessageMode = showErrorMessage ? "made-c-checkbox-group--error" : "";
  const isHorizontalMode = isHorizontal ? "made-c-checkbox-group--horizontal" : "";

  return (
<fieldset class="made-c-form__fieldset">
      <legend for="default" class="made-c-form__label" id="id-group-label">
        Radio button heading
      </legend>
      <div role="group" aria-labelledby="id-group-label">
        <ul class={`made-c-checkbox-group ${isHorizontalMode} ${showErrorMessageMode}`}>
          <li class="made-u-margin-right-3-x">

            <input
              className={`made-c-radio`}
              name="radio-01"
              type="radio"
              id="radio-group-4-1"
              value="1"
              disabled={isDisabled}
              checked={isChecked}      
            />
              <label class="made-c-radio__label" for="radio-group-4-1">
              {label}
              </label>

          </li>
          <li class="made-u-margin-right-3-x">

            <input
              className={`made-c-radio`}
              name="radio-02"
              type="radio"
              id="radio-group-4-2"
              value="2"
              disabled={isDisabled}  
            />
              <label class="made-c-radio__label" for="radio-group-4-2">
              {label}
              </label>

          </li>
          <li class="made-u-margin-right-3-x">          
          <input
              className={`made-c-radio`}
              name="radio-03"
              type="radio"
              id="radio-group-4-3"
              value="3"
              disabled={isDisabled}   
            />
              <label class="made-c-radio__label" for="radio-group-4-3">
              {label}
              </label>
          </li>
        </ul>
      </div>
      {showErrorMessage === true ? (
      <div class="made-c-form__validation--error made-u-margin-top-2-x">Validation</div>
      ) : (
        ""
      )}
    </fieldset>
  

  );
}

RadioButtonGroup.propTypes = {
  /**
  The display content of the radiobutton
  */
  label: PropTypes.string.isRequired,
  /**
   Checks if the checkbox should be disabled
  */
  isDisabled: PropTypes.bool.isRequired,
  /**
   checked
  */
  isChecked: PropTypes.bool,
  /**
   Checks if error message is shown
  */
  showErrorMessage: PropTypes.bool,
    /**
     Checks if horizontal mode
    */
  isHorizontal: PropTypes.bool,

};

RadioButtonGroup.defaultProps = {
  isChecked: undefined,
};