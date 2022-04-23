import { baseUrl } from "./utils/url";
//import axios from 'axios'
import {useEffect, useState} from 'react'
import { QuoteList } from "./utils/QuoteList";
import { quotesInterface } from "./utils/quotesInterface";




function App(): JSX.Element {
  const [data, setData] = useState<quotesInterface[]>([]);

  useEffect(() => {
    const url = baseUrl + "/quotes";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: quotesInterface[] = await response.json();
       setData(jsonBody);
       console.log(jsonBody)
    };
    fetchData();
  }, [data]);



  return <div>
    <h1>The Greatest Movie Quotes!</h1>
    <h4>Here are the quotes currently stored!</h4>
    <QuoteList quotes={data}/>
   </div>
}

export default App;
