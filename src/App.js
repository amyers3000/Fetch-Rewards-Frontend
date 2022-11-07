import { useEffect, useState } from 'react'
import SignUpForm from './components/SignUpForm'


function App() {
  const [data, setData] = useState()


  useEffect(() => {
    async function fetchStatesAndOccupations(){
      let response = await fetch("https://frontend-take-home.fetchrewards.com/form")
      const resData = await response.json()
      setData(resData)
    }
    fetchStatesAndOccupations()
  }, [])

  return (
    <>
    <SignUpForm occupations={data.occupations} states={data.states}/>
    </>
  );
}

export default App;
