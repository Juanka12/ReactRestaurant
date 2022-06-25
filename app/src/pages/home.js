import Carousel from '../components/carousel';
import '../styles/home.css';

function Home() {
  return (
    <>
      <Carousel></Carousel>
      <div className='home-banner1'>
        <h1 className='banner-text'>We have great rewards for you !</h1>
        <p className='banner-text'>Sign up now to take advantage of all our offers.</p>
        <button className='banner-button'>Sign Up</button>
      </div>
      <div className='home-banner2'>
        <h1 className='banner-text'>Do you want to know our secret ?</h1>
        <p className='banner-text'>In Restaurant we have been working since 1973 with fresh ingredients everyday.</p>
      </div>
    </>
  );
}

export default Home;