import React from 'react';

const NewsLetterBox = () => {

    const onSubmitHandler = (prevent) => {
        event.preventDefault();
    }

  return (
    <div className="text-center p-20">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% Off!
      </p>

      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" aria-label="Newsletter subscription form">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          className="w-full sm:flex-1 outline-none py-2 px-3 text-sm"
          type="email"
          placeholder="Enter Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
