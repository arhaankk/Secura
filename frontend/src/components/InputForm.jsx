import Button from "./Button.jsx";
import Spinner from "./Spinner.jsx";

const InputForm = ({ input, setInput, onSubmit, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      {/* Input Field: Extra right padding reserves space for the button */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-4 pr-20 h-14 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your code here..."
      />
      {/* Search Button: Absolutely positioned */}
      <button 
        type="submit" 
        disabled={isLoading}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-blue-950 rounded-full text-white flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" />
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default InputForm;
