import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';
import './YMap.styles.scss';
import data from '../../data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';

type JSONData = typeof data;

const YMap = ({filter}) => {
  const [mapData, setMapData] = useState<JSONData>([]);

  useEffect(() => {
    if(filter !== ''){
      const newData = data.filter((data) => data.type === filter);
      setMapData(newData)
    }
    else setMapData(data);
    
  }, [filter])

  return (
    mapData.length ?
      <YMaps>
          <Map 
            className='map'
            defaultState={{ center: [62.01, 129.43], zoom: 9 }} 
          >
          {mapData.map((data, index) => (
            <Placemark 
            key={index}
            geometry={data.coords} 
            options={
              {
                preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
                iconColor: 'green', // цвет иконки, можно также задавать в hex
              }}
              properties={{
                hintContent: `${data.name}`,
                balloonContent: `${data.description}`,
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          ))}
          </Map>
      </YMaps>:
      <div>Загрузка...</div>
  )
}

export default YMap