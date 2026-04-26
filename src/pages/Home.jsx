import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ProjectCards from '../components/home/ProjectCards';
import GetInvolvedCTA from '../components/home/GetInvolvedCTA';
import StayConnected from '../components/home/StayConnected';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ProjectCards />
      <GetInvolvedCTA />
      <StayConnected />
    </main>
  );
}