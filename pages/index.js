// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
import Card from '../components/Card';
import techies from '../utils/techiesData';

export default function Home() {
  return (
    <>
      {/* <FloatingLabel controlId="floatingTextarea" label="Search Techies" className="mb-3">
        <Form.Control as="textarea" placeholder="Search Techies" />
      </FloatingLabel> */}
      <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {techies.map((techie) => (
          <Card key={techie.id} userObj={techie} />
        ))}
      </ul>
    </>
  );
}
