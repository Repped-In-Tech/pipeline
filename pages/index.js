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
      <div className="home">
        {techies.map((techie) => (
          <Card key={techie.id} userObj={techie} />
        ))}
      </div>
    </>
  );
}
