import { useState } from 'react'
import './TwitterFollowCard.css'

function TwitterFollowCard({children, userName = 'midu', formatUserName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'seguiendo' : 'seguir'
  const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => setIsFollowing(!isFollowing)
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de MiduDev" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className= { buttonClass} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard;