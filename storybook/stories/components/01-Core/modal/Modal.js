import React, { useState } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const itemEls = useRef(new Array())

  let modalVisible = () => {
    setShowModal(true);
    itemEls.current[0].focus();
  }

  let closeModal = () => {
    itemEls.current[3].focus();
    setShowModal(false);
  }

  const handleClick = (index) => {
    itemEls.current[index.target.value].focus();
  };

  return (
    <div>
      <button
        className="made-c-button made-c-button--primary"
        type="button"
        onClick={modalVisible}
        ref={(element) => itemEls.current[0] = element}
      >
        Open Modal
      </button>
      <div role="dialog" id="dialog1" aria-modal="true" aria-labelledby="dialog1_label"
        className={`made-c-modal ${showModal ? "made-c-modal--visible" : ""}`}
      >
        <div class="made-c-modal__container">
          <div class="made-c-modal__header">
            <button
              type="button"
              class="made-c-button-close"
              onClick={closeModal}
              ref={(element) => itemEls.current[3] = element}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10 9.11612L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L10.8839 10L15.4419 14.5581C15.686 14.8021 15.686 15.1979 15.4419 15.4419C15.1979 15.686 14.8021 15.686 14.5581 15.4419L10 10.8839L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L9.11612 10L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z" fill="currentColor" />
              </svg>
            </button>
            <p class="made-u-h3 made-u-margin-top-6-x" id="dialog1_label">Title</p>
          </div>
          <div class="made-c-modal__content">
            <p>
              Are you sure you want to confirm this action permanently? If not,
              cancel it now.
            </p>
          </div>
          <div class="made-c-modal__footer">
            <button
              type="button"
              className="made-c-button made-c-button--primary made-u-margin-top-4-x made-u-margin-right-4-x made-u-margin-top--md-0-x"
              onClick={handleClick}
              value="1"
              ref={(element) => itemEls.current[1] = element}
            >
              Primary
            </button>
            <button
              type="button"
              className="made-c-button made-c-button--secondary made-u-margin-top-4-x made-u-margin-top--md-0-x"
              value="2"
              onClick={handleClick}
              ref={(element) => itemEls.current[2] = element}
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
