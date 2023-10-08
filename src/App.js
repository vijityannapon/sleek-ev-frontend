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

  const transformData = (data) => {
    return data.map((section) => {
      return {
        key: section.id,
        label: section.name,
        children: React.createElement('div', {
          dangerouslySetInnerHTML: { __html: section.description },
        }),
      };
    });
  };

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
          <div className="desktop-only">
            {sections
              .filter((section) => section.isSidebar === false)
              .map((section, index) => (
                <div key={section.id}>
                  {index === 0 ? (
                    <h1 className="desktop-animation">{section.name}</h1>
                  ) : (
                    <h3>{section.name}</h3>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                </div>
              ))}
          </div>

          <Collapse
            className="mobile-only"
            accordion
            items={transformData(
              sections.filter((section) => section.isSidebar === false)
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
