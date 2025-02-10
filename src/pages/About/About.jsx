import { AboutSectionPage, ImageGallery, Reviews } from '../../components';
import './About.css';

const clients = [
  {
    id: 1,
    name: 'Leo Messi',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNisSA9NK1W_Bf7Kshi-d6iYyv56l1QxUwtw&s'
  },
  {
    id: 2,
    name: 'Franco Colapinto',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKZvMHJUCPu5oXWwkRNmRIGB6YXGFOEAidg&s'
  },
  {
    id: 3,
    name: 'La Roca',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-Ijm9B-DTrAWys98SYRsV-6pHLllEJe2lA&s'
  },
  {
    id: 4,
    name: 'Neymar Jr',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqLtnaAFj1NRnyP21ouPPGL2XujNQlWWayw&s'
  },

]

function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>

      <AboutSectionPage />

      <div className='bg-dark text-light'>
        <ImageGallery className='bg-dark text-light' />
      </div>

      <div className='my-5'>
        <Reviews
        clients={clients}
        />
      </div>

    </div>
  )
}

export default About
