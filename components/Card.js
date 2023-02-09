import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
// import { GrDocumentText } from 'react-icons/gr';

export default function TechieCard({ userObj }) {
  const {
    linkedInUrl, githubUrl, portfolioUrl, resumeUrl,
    // title, jobType, experienceLevel, lastName, firstName, imageUrl,
  } = userObj;
  const hasLinks = linkedInUrl || githubUrl || portfolioUrl || resumeUrl;

  return (
    <>Card {hasLinks}</>
    // <Card className="card" style={{ width: '18rem' }}>
    //   <Card.Img src={imageUrl} className="card-img-top" height="200px" style={{ objectFit: 'cover' }} alt={`${firstName} ${lastName}`} />
    //   <Card.Body>
    //     <div className="card-content">
    //       <Card.Title className="card-title">
    //         {firstName} {lastName}
    //       </Card.Title>
    //       <Card.Text className="card-text">
    //         <span className="card-text-title">Title:</span> {title}
    //         <br />
    //         <span className="card-text-jobType">Job Type:</span> {jobType}
    //         <br />
    //         <span className="card-text-experienceLevel">Experience Level:</span> {experienceLevel}
    //       </Card.Text>
    //     </div>
    //     {hasLinks && (
    //       <Card.Footer>
    //         {linkedInUrl ? (
    //           <Link href={linkedInUrl}>
    //             <a target="_blank" href={linkedInUrl} rel="noreferrer">
    //               <BsLinkedin className="card-icon" />
    //             </a>
    //           </Link>
    //         ) : (
    //           ''
    //         )}
    //         {githubUrl ? (
    //           <Link href={githubUrl}>
    //             <a target="_blank" href={githubUrl} rel="noreferrer">
    //               <BsGithub className="card-icon" />
    //             </a>
    //           </Link>
    //         ) : (
    //           ''
    //         )}
    //         {portfolioUrl ? (
    //           <Link href={portfolioUrl}>
    //             <a target="_blank" href={portfolioUrl} rel="noreferrer">
    //               <BsGlobe2 className="card-icon" />
    //             </a>
    //           </Link>
    //         ) : (
    //           ''
    //         )}
    //         {resumeUrl ? (
    //           <Link href={resumeUrl}>
    //             <a target="_blank" href={resumeUrl} rel="noreferrer">
    //               <GrDocumentText className="card-icon" />
    //             </a>
    //           </Link>
    //         ) : (
    //           ''
    //         )}
    //       </Card.Footer>
    //     )}
    //   </Card.Body>
    // </Card>
  );
}

TechieCard.propTypes = {
  userObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkedInUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    portfolioUrl: PropTypes.string,
    resumeUrl: PropTypes.string,
    jobType: PropTypes.string.isRequired,
    experienceLevel: PropTypes.string.isRequired,
  }).isRequired,
};
