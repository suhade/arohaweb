import React from "react" 

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='./assets/home.png' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              WE ARE <br />
              DNA SPECIALIST 
            </h1>
           
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>DNA TEST</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
