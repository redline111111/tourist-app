import Select from 'react-select'
import { useState, useEffect } from 'react';
import data from '../../data/data.json';

interface IOption {
    value: string,
    label: string
}
const colourStyles = {
    control: styles => ({ ...styles, fontSize: '20px', height: '70px', width: '200px' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          fontSize: '20px',
          color: 'black',
          cursor: isDisabled ? 'not-allowed' : 'default',
        };
  }
}

const Filter = ({updateData}) => {
    const [options, setOptions] = useState<IOption[]>();
    const [currentType, setCurrentType] = useState('');

    useEffect(() => {
        const types = Array.from(
            new Set(data.map(data =>{
                return data.type;
        })));

        const op = types.map(data =>{
            return {value: data, label:data};
        })

        setOptions(op)
    }, [])

    const getValue = () => {
        return currentType ? options.find(c => c.value === currentType) : ''
    }

    const onChange = (newValue) => {
        setCurrentType(newValue.value)
        updateData(newValue.value)
    }
    return (
        options ?
        <Select 
            onChange={onChange}
            value={getValue()}
            styles={colourStyles}
            options={options}
            placeholder='Все типы'
        />
        :
        <div>
            Загрузка....
        </div>
    )
}

export default Filter