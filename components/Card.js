import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
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
            <Link href={userObj.linkedInUrl} passHref>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-linkedin">LinkedIn Profile</Tooltip>
                }
              >
                <a target="_blank" href={userObj.linkedInUrl} rel="noreferrer">
                  <BsLinkedin className="icon" />
                </a>
              </OverlayTrigger>
            </Link>
          ) : (
            ''
          )}
          {userObj.githubUrl ? (
            <Link href={userObj.githubUrl} passHref>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-github">Github Profile</Tooltip>}
              >
                <a target="_blank" href={userObj.githubUrl} rel="noreferrer">
                  <BsGithub className="icon" />
                </a>
              </OverlayTrigger>
            </Link>
          ) : (
            ''
          )}
          {userObj.portfolioUrl ? (
            <Link href={userObj.portfolioUrl} passHref>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-portfolio">Portfolio Website</Tooltip>}
              >
                <a target="_blank" href={userObj.portfolioUrl} rel="noreferrer">
                  <BsGlobe2 className="icon" />
                </a>
              </OverlayTrigger>
            </Link>
          ) : (
            ''
          )}
          {userObj.resumeUrl ? (
            <Link href={userObj.resumeUrl} passHref>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-resume">Resume</Tooltip>}
              >
                <a target="_blank" href={userObj.resumeUrl} rel="noreferrer">
                  <GrDocumentText className="icon" />
                </a>
              </OverlayTrigger>
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
