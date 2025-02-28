import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
function App() {
  return (
    <main className='tw'>

      <TwitterFollowCard userName='midudev' name='Miguel Angel Blanco' isFollowing={false}/> 
      <TwitterFollowCard userName='pheralb' name='Pablo Hernandez' isFollowing={false}/> 

    </main>
  )
}

export default App