import Card from '../components/Card';
import techies from '../utils/techiesData';

export default function Home() {
  return (
    <>
      <ul className="grid mx-auto grid-cols-1 gap-4 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-6">
        {techies.map((techie) => (
          <Card key={techie.id} userObj={techie} />
        ))}
      </ul>
    </>
  );
}
