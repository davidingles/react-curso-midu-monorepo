import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {
  const format = (userName) => <span>@${userName}</span>

  return (
    <main className='tw'>

      <TwitterFollowCard formatUserName={format} userName='midudev' initialIsFollowing>
      Miguel Angel Blanco
        </TwitterFollowCard>
      <TwitterFollowCard formatUserName={format} userName='pheralb'>
      Pablo Hernandez
        </TwitterFollowCard>

    </main>
  )
}

export default App