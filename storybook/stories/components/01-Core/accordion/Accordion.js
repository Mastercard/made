import React, { useState } from "react";
import PropTypes from "prop-types";

export const Accordion = ({ isActive }) => {
  const [showPanel, setShowPanel] = useState(false);

  let togglePanel = () => setShowPanel(!showPanel);

  return (
    <ul class="made-c-accordion" id="accordionExample">
      <li class="made-c-accordion__item">
        <button
          className={`made-c-accordion__header ${
            showPanel ? "made-c-accordion__header--active" : undefined
          }`}
          onClick={togglePanel}
          type="button"
        >
          Title
        </button>
        <div
          className={`made-c-accordion__content ${
            showPanel ? "made-c-accordion__content--active" : undefined
          }`}
        >
          Go to the Forgot Password/PIN option on the Sign In page, enter your
          user ID and answer your security questions. A temporary password will
          be emailed to you if you are a password user. If you are a PIN user,
          select a new PIN when prompted. Forgot Password/PIN.
        </div>
      </li>
      <li class="made-c-accordion__item">
        <button
          className={`made-c-accordion__header ${
            showPanel ? "made-c-accordion__header--active" : undefined
          }`}
          type="button"
          onClick={togglePanel}
        >
          Title
        </button>
        <div
          className={`made-c-accordion__content ${
            showPanel ? "made-c-accordion__content--active" : undefined
          }`}
        >
          Go to the Forgot Password/PIN option on the Sign In page, enter your
          user ID and answer your security questions. A temporary password will
          be emailed to you if you are a password user. If you are a PIN user,
          select a new PIN when prompted. Forgot Password/PIN.
        </div>
      </li>
      <li class="made-c-accordion__item">
        <button
          className={`made-c-accordion__header ${
            showPanel ? "made-c-accordion__header--active" : undefined
          }`}
          type="button"
          onClick={togglePanel}
        >
          Title
        </button>
        <div
          className={`made-c-accordion__content ${
            showPanel ? "made-c-accordion__content--active" : undefined
          }`}
        >
          Go to the Forgot Password/PIN option on the Sign In page, enter your
          user ID and answer your security questions. A temporary password will
          be emailed to you if you are a password user. If you are a PIN user,
          select a new PIN when prompted. Forgot Password/PIN.
        </div>
      </li>
    </ul>
  );
};

Accordion.defaultProps = {
  // active: false,
};
