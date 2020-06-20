import React, { useContext } from "react";
import { SettingsContext } from "contexts/SettingsContext";
const CategoryPicker = () => {
  const { category, setCategory } = useContext(SettingsContext);
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="CategoryPicker">
      <label for="category-picker">Category:</label>
      <select id="category-picker" onChange={handleChange} value={category}>
        <option value="10">Books</option>
        <option value="11">Movies</option>
      </select>
    </div>
  );
};
export default CategoryPicker;
