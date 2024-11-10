const InputStyle = ({ icon, name, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="input-6"
        className="block text-sm font-medium text-gray-700 dark:text-gray-100">
        {name}
      </label>
      <div className="relative mt-1">
        <input
          type="email"
          id="input-6"
          className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
          placeholder={placeholder}
        />
        <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
          {icon}
        </span>
      </div>
    </div>
  );
};
export default InputStyle;
