import { useState, useEffect } from 'react';
import Card from './Card';
import fetchData from './fetchData';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
const SearchResultsPage = () => {
  const location = useLocation();
  const basicData = location.state.data;
  console.log(basicData);

  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataArray = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };

    fetchDataArray();
  }, [basicData]);

  console.log(dataArray);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <Navbar />
      <div className="row">
        {dataArray &&
          dataArray.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
