import React from 'react';

const Button = (props) => {
  return (
    <button
      type="button"
      class="focus:outline-none text-white
       bg-green-700 hover:bg-green-800
        font-medium rounded-lg text-sm px-5 py-2.5"
    >
     {props.btn}
    </button>
  );
};

export default Button;
