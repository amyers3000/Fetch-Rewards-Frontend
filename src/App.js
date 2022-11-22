import { useEffect, useState } from 'react'
import { apiCall} from './lib'
import Nav from './components/Nav'
import SignUpForm from './components/SignUpForm'


function App() {
  const [data, setData] = useState({})


  useEffect(() => {
      apiCall('GET')
        .then(res => res.json())
        .then(response => setData(response))
        .catch(e => console.log(e))
  }, [])

  return (
    <>
      <Nav />
      <SignUpForm occupations={data.occupations} states={data.states} />
    </>
  );
}

export default App;
