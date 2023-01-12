import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function TechieCard({ userObj }) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img src={userObj.imageUrl} className="card-img-top" alt="..." />
      <Card.Body>
        <Card.Title className="card-title">
          {userObj.firstName} {userObj.lastName}
        </Card.Title>
        <Card.Text className="card-text">
          {userObj.title}
          <br />
          {userObj.jobType}
          <br />
          {userObj.experienceLevel}
        </Card.Text>
        <Card.Footer>
          {userObj.linkedInUrl ? (
            <Link href={userObj.linkedInUrl} passHref>
              <a target="_blank" href={userObj.linkedInUrl} rel="noreferrer">
                <button type="button" className="btn btn-primary">
                  LinkedIn
                </button>
              </a>
            </Link>
          ) : (
            ''
          )}
          {userObj.githubUrl ? (
            <Link href={userObj.githubUrl} passHref>
              <a target="_blank" href={userObj.githubUrl} rel="noreferrer">
                <button type="button" className="btn btn-primary">
                  GitHub
                </button>
              </a>
            </Link>
          ) : (
            ''
          )}
          {userObj.portfolioUrl ? (
            <Link href={userObj.portfolioUrl} passHref>
              <a target="_blank" href={userObj.portfolioUrl} rel="noreferrer">
                <button type="button" className="btn btn-primary">
                  Portfolio
                </button>
              </a>
            </Link>
          ) : (
            ''
          )}
          {userObj.resumeUrl ? (
            <Link href={userObj.resumeUrl} passHref>
              <a target="_blank" href={userObj.resumeUrl} rel="noreferrer">
                <button type="button" className="btn btn-primary">
                  Resume
                </button>
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
