import React from 'react';
import Layout from '@theme/Layout';

function Showcase() {
  return (
    <Layout title="Showcase">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/showcase.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Showcase;