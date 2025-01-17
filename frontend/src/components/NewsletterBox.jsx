const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    // On submit don't reload the webpage
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Unlock exclusive deals by subscribing now and enjoy a fabulous 20%
        discount on your favorite clothing items! 🛍️✨
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mx-auto my-6 flex w-full items-center gap-3 border pl-3 sm:w-1/2"
      >
        <input
          className="w-full outline-none sm:flex-1"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black px-10 py-4 text-xs text-white"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
