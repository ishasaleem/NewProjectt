import React from 'react'
import logo from './cmt.avif';

const Community = () => {
  return (
    <div>
        
      <section className="community-involvement-section">
        <h2>Community Involvement</h2>
        <p>
          At "A Little Scoop of Happiness," we believe in giving back to the community that has supported us from the beginning. Our involvement extends beyond serving delicious gelato; we actively participate in local events, support charitable organizations, and engage in sustainability initiatives. Whether it's sponsoring a local festival or contributing to environmental efforts, we are dedicated to making a positive difference and supporting the causes that matter to our neighbors. Our goal is to foster a sense of community and contribute to the well-being of those around us.
        </p>
        <div className='section-img'>
          <img src={logo} alt="Community Involvement" />
        </div>
      </section>
    </div>
  )
}

export default Community