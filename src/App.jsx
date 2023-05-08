import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  return (
    <div className='md:w-3/4 md:mx-auto'>
      
      <h1 className='text-5xl text-purple-500'>Total Coffee {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 '>
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
