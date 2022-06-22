import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Information about Application</h1>
      <p>
        In order to quickly and clearly perform their tasks, they must be
        written down sequentially. I hope this application will help you
      </p>
      <button className="btn" onClick={() => navigate('/')}>
        back to Tasks
      </button>
    </>
  );
};

export default AboutPage;
