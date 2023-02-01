import Card from '../components/Card';
import techies from '../utils/techiesData';

export default function Home() {
  return (
    <>
      <div className="home">
        {techies.map((techie) => (
          <Card key={techie.id} userObj={techie} />
        ))}
      </div>
    </>
  );
}
