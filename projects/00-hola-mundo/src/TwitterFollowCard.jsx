import './TwitterFollowCard.css'

function TwitterFollowCard({userName = 'midu', name = 'foo', isFollowing= 'hola'}) {
  const text = isFollowing ? 'seguiendo' : 'seguir'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de MiduDev" />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          {text}
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard;