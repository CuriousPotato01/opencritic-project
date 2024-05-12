import axios from 'axios';

const fetchData = async options => {
  try {
    const storedOptionsString = localStorage.getItem('myOptions');
    const storedOptions = storedOptionsString
      ? JSON.parse(storedOptionsString)
      : null;

    // If the options have changed, clear the localStorage
    if (JSON.stringify(storedOptions) !== JSON.stringify(options)) {
      localStorage.removeItem('myData');
      localStorage.removeItem('myOptions');
    }

    const dataString = localStorage.getItem('myData');

    if (dataString) {
      const data = JSON.parse(dataString);
      console.log(data);
      return data;
    } else {
      const response = await axios.request(options);
      const newDataString = JSON.stringify(response.data);
      localStorage.setItem('myData', newDataString);
      localStorage.setItem('myOptions', JSON.stringify(options)); // Store the options
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
