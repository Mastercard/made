import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tour = () => {
  const [showTour, setshowTour] = useState(false);

  let tourVisible = () => setshowTour(true);
  let closeTour = () => setshowTour(false);

  return (
    <div>
      <button
        className="made-c-button made-c-button--primary"
        type="button"
        onClick={tourVisible}
      >
        Open Tour
      </button>
      <div
        className={`made-c-modal ${
          showTour ? "made-c-modal--visible made-c-tour--visible" : ""
        }`}
      >
        <div class="made-c-tour made-c-tooltip made-c-tooltip--bottom made-u-width-50--md made-u-width-25--lg">
          <div class="made-c-tour__header">
            <button
              type="button"
              onClick={closeTour}
              class="made-c-button--close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="made-c-button__icon--close"
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
          </div>
          <div class="made-c-tour__content">
            <p class="made-u-eyebrow--02 made-u-margin-bottom-4-x">Eyebrow</p>
            <h4 class="made-u-margin-bottom-6-x">h4 title</h4>
            <p class="made-c-tour__body made-u-margin-bottom-8-x">
              Multi-line text goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis ornare volutpat elit eget congue. Nulla ac
              erat quis dui gravida consequat sed blandit erat.
            </p>
            <button type="button" class="made-c-button made-c-button--primary">
              Primary
            </button>
          </div>
          <div class="made-c-tour__footer">#/#</div>
        </div>
      </div>
    </div>
  );
};
