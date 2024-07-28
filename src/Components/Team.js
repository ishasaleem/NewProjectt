import logo from './isha.jpeg'; 
import chef2 from './chef2.jpg'; 
import chef from './chef.avif'; 
import React from 'react'

const Team = () => {
  return (
    <div>
         
      <section className="meet-the-team-section">
        <h2>Meet the Team</h2>
        <p>
          Our team is the heart and soul of "A Little Scoop of Happiness." Each member brings a unique blend of skills, experience, and enthusiasm, working together to create an extraordinary experience for our guests. From our skilled chefs who meticulously craft each batch of gelato to our dedicated front-line staff who greet you with a smile, everyone plays a crucial role. We believe that our team's passion for ice cream and dedication to service shines through in every interaction, making every visit to our shop a memorable one.
        </p>
        <div className='team-images'>
         
          <div className='team-member'>
            <img src={chef} alt="Team Member 2" />
            <p>Jane Smith - Customer Relations</p>
            <p>Jane ensures every customer feels like part of our family. Her exceptional communication skills and genuine care help us build lasting relationships with our guests, turning every visit into a personal experience.</p>
          </div>
          <div className='team-member'>
            <img src={logo} alt="Team Member 1" />
            <p>Isha - Head Chef</p>
            <p>Isha is the mastermind behind our innovative gelato recipes. With over a decade of experience in the culinary arts, he blends creativity with technique to craft flavors that delight the palate and warm the heart.</p>
          </div>
          <div className='team-member'>
            <img src={chef2} alt="Team Member 3" />
            <p>Emily Johnson - Marketing Specialist</p>
            <p>Emily is the creative force behind our branding and outreach efforts. Her innovative marketing strategies and eye for design help us connect with our community and share our love for gelato far and wide.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Team