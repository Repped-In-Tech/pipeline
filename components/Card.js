import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';

export default function TechieCard({ userObj }) {
  // console.log(userObj);
  const {
    linkedInUrl, githubUrl, portfolioUrl, resumeUrl, imageUrl, lastName, firstName, title, jobType, experienceLevel,
  } = userObj;
  const hasLinks = linkedInUrl || githubUrl || portfolioUrl || resumeUrl;

  return (
    <>
      <li key={firstName} className="rounded-2xl bg-gray-800 py-10 px-8">
        <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={imageUrl} alt="" />
        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{firstName} {lastName}</h3>
        <p className="text-sm leading-6 text-gray-400">{title} {jobType} {experienceLevel}</p>
        {hasLinks && (
          <ul className="mt-6 flex justify-center gap-x-6">
            {linkedInUrl ? (
              <li>
                <Link href={linkedInUrl}>
                  <a target="_blank" href={linkedInUrl} rel="noreferrer">
                    <BsLinkedin className="card-icon" />
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
            {githubUrl ? (
              <li>
                <Link href={githubUrl}>
                  <a target="_blank" href={githubUrl} rel="noreferrer">
                    <BsGithub className="card-icon" />
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
            {portfolioUrl ? (
              <li>
                <Link href={portfolioUrl}>
                  <a target="_blank" href={portfolioUrl} rel="noreferrer">
                    <BsGlobe2 className="card-icon" />
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
            {resumeUrl ? (
              <li>
                <Link href={resumeUrl}>
                  <a target="_blank" href={resumeUrl} rel="noreferrer">
                    <GrDocumentText className="card-icon" />
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
          </ul>
        )}
      </li>
    </>
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
