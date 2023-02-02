import React from 'react';
import { useRouter } from 'next/router';

export default function TechieDetails() {
  const router = useRouter();
  const { techieId } = router.query;

  return (
    <div className="profile">TechieDetails {techieId}</div>
  );
}
