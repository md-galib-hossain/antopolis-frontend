interface SelectProps {
    value: number;
    onChange: (value: number) => void;
  }
  
  const Select = ({ value, onChange }: SelectProps) => {
    return (
      <select
        onChange={(e) => onChange(parseInt(e.target.value))}
        value={value}
        className="border rounded p-2 bg-transparent text-white border-gray-500 focus:outline-none"
      >
        {[6, 12, 18].map((val) => (
          <option key={val} value={val} className="bg-black">
            {val} per page
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;
  