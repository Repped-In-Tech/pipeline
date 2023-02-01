import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';

export default function TechieCard({ userObj }) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img
        src={userObj.imageUrl}
        className="card-img-top"
        height="200px"
        style={{ objectFit: 'cover' }}
        alt="..."
      />
      <Card.Body>
        <Card.Title className="card-title">
          {userObj.firstName} {userObj.lastName}
        </Card.Title>
        <Card.Text className="card-text">
          <span className="card-text-title">Title:</span> {userObj.title}
          <br />
          <span className="card-text-jobType">Job Type:</span> {userObj.jobType}
          <br />
          <span className="card-text-experienceLevel">
            Experience Level:
          </span>{' '}
          {userObj.experienceLevel}
        </Card.Text>
        <Card.Footer>
          {userObj.linkedInUrl ? (
            <Link href={userObj.linkedInUrl}>
              <a target="_blank" href={userObj.linkedInUrl} rel="noreferrer">
                <BsLinkedin className="icon" />
              </a>
            </Link>

          ) : (
            ''
          )}
          {userObj.githubUrl ? (
            <Link href={userObj.githubUrl}>
              <a target="_blank" href={userObj.githubUrl} rel="noreferrer">
                <BsGithub className="icon" />
              </a>
            </Link>
          ) : (
            ''
          )}
          {userObj.portfolioUrl ? (
            <Link href={userObj.portfolioUrl}>
              <a target="_blank" href={userObj.portfolioUrl} rel="noreferrer">
                <BsGlobe2 className="icon" />
              </a>
            </Link>
          ) : (
            ''
          )}
          {userObj.resumeUrl ? (
            <Link href={userObj.resumeUrl}>
              <a target="_blank" href={userObj.resumeUrl} rel="noreferrer">
                <GrDocumentText className="icon" />
              </a>
            </Link>
          ) : (
            ''
          )}
        </Card.Footer>
      </Card.Body>
    </Card>
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
