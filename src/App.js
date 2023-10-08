import React, { useState, useEffect } from 'react';
import { fetchSections } from './api';
import { Collapse, Row, Col } from 'antd';
import './App.css';

function App() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSections();
        setSections(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = [
    {
      key: '1',
      label: 'Summary',
      children: (
        <p>I'm a full stack Developer, I like a code, I love a coding...</p>
      ),
    },
    {
      key: '2',
      label: 'Experience',
      children: (
        <>
          <ul>
            <li>
              <strong>ETRAN (Thailand)</strong>
              <br />
              Lead Developer
              <br />
              July 2022 - Present (1 year 3 months)
              <br />
              Bangkok City, Thailand
            </li>
            <li>
              <strong>MIA Collaboration Company Limited (Thailand)</strong>
              <br />
              Software Engineer
              <br />
              January 2021 - July 2022 (1 year 7 months)
              <br />
              Bangkok Metropolitan Area
            </li>
            <li>
              <strong>Almond Digital Group</strong>
              <br />
              Team Leader
              <br />
              September 2020 - December 2020 (4 months)
              <br />
              Bangkok Metropolitan Area
            </li>
            <li>
              <strong></strong>
              <br />
              Senior Full Stack Developer
              <br />
              June 2020 - September 2020 (4 months)
              <br />
              Bangkok City, Thailand
            </li>
          </ul>
        </>
      ),
    },
    {
      key: '3',
      label: 'Education',
      children: (
        <>
          <p>Rajamangala Institute of Technology North Bangkok Campus</p>
          <p>
            Bachelor of Industrial Technology (Computer Technology), Computer
            Technology · (2004 - 2006)
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8} className="sidebar">
          {sections
            .filter((section) => section.isSidebar === true)
            .map((section) => (
              <div key={section.id}>
                <h3>{section.name}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>
            ))}
        </Col>

        <Col xs={24} md={16} className="content">
          <h1 className="desktop-animation">Akekachai Vijityannapon</h1>
          <p>
            <em>Because coding is an Arts</em>
          </p>
          <p>Lam Luk Ka, Pathum Thani, Thailand</p>

          <div className="desktop-only">
            {sections
              .filter((section) => section.isSidebar === false)
              .map((section) => (
                <div key={section.id}>
                  <h3>{section.name}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                </div>
              ))}
          </div>

          <Collapse className="mobile-only" accordion items={items} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
