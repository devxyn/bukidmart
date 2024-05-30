/* eslint-disable react/prop-types */
const FormInput = ({ id, value, width, type, label, hideArrow, onChange }) => {
  return (
    <div className={`relative ${width}`}>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        className={`block p-2 pt-4 md:p-3 md:pt-4 w-full rounded-lg border border-placeholder appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer ${hideArrow} z-50`}
        placeholder=' '
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className='absolute text-xs md:text-sm text-placeholder duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] px-3 peer-focus:px-3 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 overflow-hidden text-ellipsis whitespace-nowrap'>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
