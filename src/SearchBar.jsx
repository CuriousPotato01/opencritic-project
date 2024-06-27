import fetchData from './fetchData';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const options = {
    method: 'GET',
    url: 'https://opencritic-api.p.rapidapi.com/game/search',
    params: {
      criteria: null,
    },
    headers: {
      'x-rapidapi-key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
      'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
    },
  };

  const navigate = useNavigate();

  function setCriteria(string) {
    options.params.criteria = string;
  }

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        let data = await fetchData(options);
        console.log(data);
        navigate('/search', { state: { data } });
      }}
      className="d-flex position-absolute top-50 start-50 translate-middle"
      role="search"
    >
      <input
        onChange={e => {
          setCriteria(e.target.value);
        }}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />

      <button className="btn btn-outline-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
