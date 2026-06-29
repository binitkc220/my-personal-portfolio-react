import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Profile />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
