const ColorPicker = ({ colors, selected, setSelected }) => {
  return (
    <div className="form-group">
      <label className="mb-3 block text-11-5 font-light text-[rgba(255,255,255,0.42)] tracking-[0.3px]">
        Choose your avatar colour
      </label>

      <div className="flex items-center gap-4">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelected(color)}
            className={`h-6 w-6 rounded-full transition-all duration-200 cursor-pointer ${
              selected === color
                ? "ring-1 ring-white ring-offset-1 ring-offset-[#1E1A2B] scale-110"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
