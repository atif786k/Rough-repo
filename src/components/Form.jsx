import React from "react";
import "../App.css";

const Form = () => {
  return (
    // <main className='form-main-container'>
    //     <form className='form-container space-y-4'>
    //         <div className="form-title">
    //             <h2>Form first heading</h2>
    //             <h4>Form second heading</h4>
    //         </div>
    //         <div className='form-input-div'>
    //             <label htmlFor="">username</label>
    //             <input className='form-input-fields' type="text" />
    //         </div>
    //         <div className='form-input-div'>
    //             <label htmlFor="">email</label>
    //             <input className='form-input-fields' type="text" />
    //         </div>
    //         <div className='form-input-div'>
    //             <label htmlFor="">Mobile Number</label>
    //             <input className='form-input-fields' type="text" />
    //         </div>
    //         <div className='form-input-div'>
    //             <label htmlFor="">Hobbies</label>
    //             <input className='form-input-fields' type="text" />
    //         </div>
    //         <button type="submit" className='submit-btn'>Submit</button>
    //     </form>
    // </main>
    <main className="h-full w-full flex justify-center items-center">
      <form className="p-4 border border-red-500 rounded-lg text-center space-y-4">
        <div className="form-title">
          <h2 className="text-2xl font-medium leading-7">Form first heading</h2>
          <h4 className="text-lg font-medium leading-6">Form second heading</h4>
        </div>
        <div className="flex justify-between items-end">
          <label className="text-lg font-normal">username</label>
          <input
            className="h-10 ml-4 px-3 border border-gray-400 rounded-md outline-none transition ease-in-out duration-500"
            type="text"
          />
        </div>
        <div className="flex justify-between items-end">
          <label className="text-lg font-normal">email</label>
          <input
            className="h-10 ml-4 px-3 border border-gray-400 rounded-md outline-none transition ease-in-out duration-500"
            type="text"
          />
        </div>
        <div className="flex justify-between items-end">
          <label className="text-lg font-normal">Mobile Number</label>
          <input
            className="h-10 ml-4 px-3 border border-gray-400 rounded-md outline-none transition ease-in-out duration-500"
            type="text"
          />
        </div>
        <div className="flex justify-between items-end">
          <label className="text-lg font-normal">Hobbies</label>
          <input
            className="h-10 ml-4 px-3 border border-gray-400 rounded-md outline-none transition ease-in-out duration-500"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="w-full h-9 border-none rounded-md bg-red-500 text-white text-lg font-medium"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Form;
