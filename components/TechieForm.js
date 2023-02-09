// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Form, Button } from 'react-bootstrap';

// Starting with these options, unsure what to include here
// const experienceOptions = ['Junior', 'Mid', 'Senior'];
// const jobTypeOptions = ['Software Engineer', 'UX/UI', 'Data Analytics', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

// const initialState = {
//   firstName: '',
//   lastName: '',
//   title: '',
//   linkedInUrl: '',
//   githubUrl: '',
//   jobType: '',
//   experienceLevel: '',
//   portfolioUrl: '',
//   resumeUrl: '',
// };

// Takes a userObj
export default function TechieForm() {
  // const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // code to handle form submission and create userObj
  //   // const payload = (userObj, { ...formData });
  // };

  return (
    <>Form</>
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group>
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="firstName"
    //       type="text"
    //       placeholder="Enter first name"
    //       value={formData.firstName}
    //       required
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="lastName"
    //       type="text"
    //       placeholder="Enter last name"
    //       value={formData.lastName}
    //       required
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Title</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="title"
    //       type="text"
    //       placeholder="Enter title"
    //       value={formData.title}
    //       required
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Job Type</Form.Label>
    //     <Form.Control
    //       name="jobType"
    //       required
    //       as="select"
    //       value={formData.jobType}
    //       onChange={handleChange}
    //     >
    //       <option value="">Select job type</option>
    //       {jobTypeOptions.map((option) => (
    //         <option>{option}</option>
    //       ))}
    //     </Form.Control>
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Experience Level</Form.Label>
    //     <Form.Control
    //       name="experienceLevel"
    //       required
    //       as="select"
    //       value={formData.experienceLevel}
    //       onChange={handleChange}
    //     >
    //       <option value="">Select experience level</option>
    //       {experienceOptions.map((option) => (
    //         <option>{option}</option>
    //       ))}
    //     </Form.Control>
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Linked In</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="linkedInUrl"
    //       type="text"
    //       placeholder="Enter your LinkedIn URL"
    //       value={formData.linkedInUrl}
    //       required
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Website Address</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="portfolioUrl"
    //       type="text"
    //       placeholder="Enter your portfolio website URL (if applicable)"
    //       value={formData.portfolioUrl}
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Github Profile</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="githubUrl"
    //       type="text"
    //       placeholder="Enter your Github profile URL(if applicable)"
    //       value={formData.githubUrl}
    //     />
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label>Resume</Form.Label>
    //     <Form.Control
    //       onChange={handleChange}
    //       name="resumeUrl"
    //       type="text"
    //       placeholder="Enter your resume URL (if applicable)"
    //       value={formData.resumeUrl}
    //     />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     SUBMIT
    //   </Button>
    // </Form>
  );
}

TechieForm.propTypes = {
  userObj: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    experienceLevel: PropTypes.string.isRequired,
    linkedInUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    portfolioUrl: PropTypes.string,
    resumeUrl: PropTypes.string,
  }).isRequired,
};
