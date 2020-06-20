import React, { useContext } from "react";
import { SettingsContext } from "contexts/SettingsContext";

const NumberOfQuestionsPicker = () => {
  const { numberOfQuestions, setNumberOfQuestions } = useContext(
    SettingsContext
  );

  const handleChange = (e) => {
    setNumberOfQuestions(e.target.value);
  };

  return (
    <div className="NumberOfQuestionsPicker">
      <label for="number-of-questions-picker">Number of Questions:</label>
      <select
        id="number-of-questions-picker"
        value={numberOfQuestions}
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};
export default NumberOfQuestionsPicker;
