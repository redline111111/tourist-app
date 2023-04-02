import { useState } from 'react';
import Filter from '../filter/Filter';
import YMap from '../YMap/YMap';
import './Home.styles.scss';

export const Home = () => {
  const [type, setType] = useState('');

  const updateData = (value) => {
    setType(value)
  }

  return (
    <div className='main'>
        <div className='wrapper'>
            <div className='text'>
             Самое доступное место для отдыха в Республике Саха Якутия.
            </div>
            <div className='mapBlock'>
                <YMap filter={type}/>
                <Filter updateData={updateData}/>
            </div>
            
        </div>
    </div>
  )
}
