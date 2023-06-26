import React, { useState } from 'react';
import { SelectWrapper } from './style';

const DropdownSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <SelectWrapper>
      <div
        className='selection'
        onClick={() => setSelectedOption(!selectedOption)}
      >
        Selections
      </div>
      {selectedOption && (
        <div className='list-select'>
          {options.map((option) => (
            <div
              onClick={() => setSelectedOption(false)}
              className='item'
              key={option.value}
              value={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </SelectWrapper>
  );
};

export default DropdownSelect;
