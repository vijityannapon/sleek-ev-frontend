import React from 'react';

import { Collapse, Row, Col } from 'antd';
import './App.css';

function App() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
          <h3>Contact</h3>
          <p>
            <strong>Mobile:</strong> +668037038599
          </p>
          <p>
            <strong>Email:</strong> vijityannapon@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/akekachai-vijityannapon-a83a3391/"
              target="_blank"
              rel="noreferrer"
            >
              akekachai-vijityannapon-a83a3391
            </a>
          </p>
          <p>
            <strong>Blog:</strong>
            <a
              href="https://vijityannapon.medium.com"
              target="_blank"
              rel="noreferrer"
            >
              vijityannapon.medium.com
            </a>
          </p>

          <h3>Top Skills</h3>
          <ul>
            <li>Finance</li>
            <li>Organic search specialist</li>
            <li>Software Design Patterns</li>
          </ul>

          <h3>Languages</h3>
          <ul>
            <li>Thai (Native or Bilingual)</li>
            <li>English (Limited Working)</li>
          </ul>

          <h3>Certifications</h3>
          <ul>
            <li>Getting Started with Go</li>
            <li>AWS Fundamentals: Migrating to the Cloud</li>
            <li>Git Started with GitHub</li>
            <li>GraphQL (2016)</li>
            <li>บริหารเงินเป็น เห็นเงินล้าน</li>
          </ul>
        </Col>

        <Col xs={24} md={16} className="content">
          <h1 className="desktop-animation">Akekachai Vijityannapon</h1>
          <p>
            <em>Because coding is an Arts</em>
          </p>
          <p>Lam Luk Ka, Pathum Thani, Thailand</p>

          <div className="desktop-only">
            <h3>Summary</h3>
            <p>I'm a full stack Developer, I like a code, I love a coding...</p>

            <h3>Experience</h3>
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

            <h3>Project: DataOps</h3>
            <p>
              <strong>Role:</strong> Team Lead, CI/CD, Infrastructure, Coder
            </p>
            <p>
              <strong>Description:</strong> Develop DataOps systems for help
              employee in company can CRUD Data (Project / Unitype / Brokers /
              Articles)
            </p>
            <p>
              <strong>Technology:</strong>
            </p>
            <ul>
              <li>ReactJS with AntD & Bootstrap (Frontend)</li>
              <li>Strapi Headless CMS (Backend)</li>
              <li>MongoDB</li>
              <li>NodeJS (Sync Data & Transfer Between Database)</li>
              <li>AWS for Infrastructure & CI/CD</li>
            </ul>

            <h4>MoneyTable Public Company Limited</h4>
            <p>Senior Software Engineering</p>
            <p>July 2018 - June 2019 (1 year) Bangkok</p>
            <p>
              <strong>Project:</strong> HR Table
            </p>
            <p>
              <strong>Role:</strong> Team Leader
            </p>
            <p>
              <strong>Description:</strong> Lead team to build new feature & bug
              fix to be complete as timeline. Create API Document.
            </p>
            <p>
              <strong>Technology:</strong>
            </p>
            <ul>
              <li>AWS (Infrastructure)</li>
              <li>PHP (Laravel Framework) with Bootstrap</li>
            </ul>

            <h4>FireOneOne</h4>
            <p>Software Engineer</p>
            <p>
              June 2017 - June 2018 (1 year 1 month) Bangkok Metropolitan Area,
              Thailand
            </p>
            <p>
              <strong>Project:</strong> SC Asset
            </p>
            <p>
              <strong>Role:</strong> Scrum master & Coder
            </p>
            <p>
              <strong>Description:</strong>
            </p>

            <button
              className="navbar-toggler d-block d-md-none"
              type="button"
              data-toggle="collapse"
              data-target="#educationContent"
              aria-controls="educationContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Education <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse d-md-block" id="educationContent">
              <h3>Education</h3>
              <p>Rajamangala Institute of Technology North Bangkok Campus</p>
              <p>
                Bachelor of Industrial Technology (Computer Technology),
                Computer Technology · (2004 - 2006)
              </p>
            </div>
          </div>

          <Collapse className="mobile-only" accordion items={items} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
