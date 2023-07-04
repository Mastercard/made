import React, { useState } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  
  const itemEls = useRef(new Array())

  let modalVisible = () => 
  { 
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="made-c-button-close__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>close</title>
                <path
                  d="M22.938 0L24 1.062 13.061 12 24 22.938 22.938 24 12 13.061 1.062 24 0 22.938 10.938 12 0 1.062 1.062 0 12 10.938 22.938 0z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
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
