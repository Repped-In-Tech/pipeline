import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  BsGithub, BsLinkedin, BsGlobe2, BsFillFileEarmarkTextFill,
} from 'react-icons/bs';

export default function TechieCard({ userObj }) {
  const {
    linkedInUrl, githubUrl, portfolioUrl, resumeUrl, imageUrl, lastName, firstName, title, experienceLevel,
  } = userObj;
  const hasLinks = linkedInUrl || githubUrl || portfolioUrl || resumeUrl;
  const profileImg = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <>
      <li className="group block cursor-pointer rounded-md bg-neutral-800 hover:bg-neutral-00 transition-colors ease-in-out duration-700">
        <div className="bg-cover bg-center aspect-[4/3] rounded-t border-b-2 border-neutral-600 group-hover:border-green-600 transition-colors" style={profileImg} />
        <div className="p-3">
          <h3 className="text-lg mt-1 font-semibold tracking-tight text-neutral-200 group-hover:text-green-600 transition-colors">{firstName} {lastName}</h3>
          <p className="text-sm leading-tight text-neutral-400">{experienceLevel} {title}</p>
          {/* <p className="text-xs uppercase text-neutral-300">{experienceLevel}</p> */}
        </div>
        {hasLinks && (
          <ul className="mt-2 flex justify-left gap-x-2 p-3">
            {linkedInUrl ? (
              <li>
                <Link href={linkedInUrl}>
                  <a target="_blank" href={linkedInUrl} rel="noreferrer">
                    <BsLinkedin className="w-6 h-6 text-neutral-400 hover:text-white" />
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
                    <BsGithub className="w-6 h-6 text-neutral-400 hover:text-white" />
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
                    <BsGlobe2 className="w-6 h-6 text-neutral-400 hover:text-white" />
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
                    <BsFillFileEarmarkTextFill className="w-6 h-6 text-neutral-400 hover:text-white" />
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
