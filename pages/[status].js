import React from 'react';
import { useRouter } from 'next/router';

export default function TechieStatus() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div className="profile">Techie Status {status}</div>
  );
}
