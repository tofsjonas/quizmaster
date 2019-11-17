import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { SettingsContext } from 'contexts/SettingsContext'
const CategoryPicker = () => {
  const { category, setCategory } = useContext(SettingsContext)
  const handleChange = e => {
    setCategory(e.target.value)
  }

  return (
    <div className="CategoryPicker">
      <label>Category:</label>

      <select onChange={handleChange} value={category}>
        <option value="10">Books</option>
        <option value="11">Movies</option>
      </select>
    </div>
  )
}
export default CategoryPicker
