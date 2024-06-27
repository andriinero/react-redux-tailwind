import Heading from '@/components/general/Heading';
import Counter from '@/features/counter/components/Counter';

const Home = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6">
      <Heading className="text-2xl font-bold">react-redux-tailwind</Heading>
      <Counter />
    </main>
  );
};

export default Home;
