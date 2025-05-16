import React from 'react';

export default function NewsDetails({ params }) {
  return (
    <div>
      <h1>News Details</h1>
      <p>News ID: {params.id}</p>
    </div>
  );
}
