import { useState, useEffect } from 'react';
import Card from './Card';
import fetchData from './fetchData';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const basicData = location.state.data;
  console.log(basicData);

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchDataArray = async () => {
      const results = [];
      for (let i = 0; i < basicData.length; i++) {
        let id = basicData[i].id;

        const options = {
          method: 'GET',
          url: `https://opencritic-api.p.rapidapi.com/game/${id}`,
          headers: {
            'X-RapidAPI-Key':
              'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
          },
        };

        const data = await new Promise(resolve =>
          setTimeout(() => resolve(fetchData(options)), 1),
        );
        results.push(data);
      }
      setDataArray(results);
    };

    fetchDataArray();
  }, [basicData]);

  console.log(dataArray);

  return (
    <div>
      <Navbar />
      <div className="row">
        {dataArray &&
          dataArray.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </div>
  );
};

export default SearchResultsPage;
