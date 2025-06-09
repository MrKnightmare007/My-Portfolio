import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GradientText from './components/Gradient';
import SplitText from './components/SplitText';
import BlurText from './components/BlurText';
import ProfileCard from './components/ProfileCard';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="gradient-fluid min-h-screen">
      <Navbar />
      <main className="container mx-auto p-36">
      <BackgroundParticles />
        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class">Not another shitcoin, We are the ONE</GradientText>
        <SplitText
          text="Hello, GSAP!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />
        {/* <ProfileCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/path/to/avatar.jpg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        /> */}
      </main>
    </div>
  );
}

export default App;