import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import NavigationBar from '@/components/NavigationBar'

export default function Home() {
  return (
    <main className="max-w-3xl px-2 sm:px-4 py-2 mx-auto">
      <NavigationBar />
      <Landing />
      <Footer />
    </main>
  );
}