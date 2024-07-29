import React from 'react';

const TrashIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 12 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.99999 13.8333C0.99999 14.75 1.74999 15.5 2.66666 15.5H9.33332C10.25 15.5 11 14.75 11 13.8333V5.5C11 4.58333 10.25 3.83333 9.33332 3.83333H2.66666C1.74999 3.83333 0.99999 4.58333 0.99999 5.5V13.8333ZM11 1.33333H8.91666L8.32499 0.741667C8.17499 0.591667 7.95832 0.5 7.74166 0.5H4.25832C4.04166 0.5 3.82499 0.591667 3.67499 0.741667L3.08332 1.33333H0.99999C0.541656 1.33333 0.166656 1.70833 0.166656 2.16667C0.166656 2.625 0.541656 3 0.99999 3H11C11.4583 3 11.8333 2.625 11.8333 2.16667C11.8333 1.70833 11.4583 1.33333 11 1.33333Z'
        fill='#969696'
      />
    </svg>
  );
};

export default TrashIcon;