import React from 'react';

import Layout from '../components/Layout/index';
import ListProjects from '../components/folderProjects/ListProjects/index';

const Projects = () => (
  <Layout
    title="Proyectos"
    description="Proyectos desarrollados por Manuel Rivera"
    keywords="Manuel, Rivera, front-end developer, web developer"
  >
    <main>
      <ListProjects />
    </main>

  </Layout>
);

export default Projects;
