import React from 'react';

import Layout from '../components/Layout/index';
import ListSkillsIcons from '../components/folderSkills/ListSkillsIcons/index';
import ListSkills from '../components/folderSkills/ListSkills/index';

const Skills = () => (
  <Layout
    title="Conocimientos"
    description="Me gusta trabajar con React ya que esta basado en componentes y hace que la manipulación del código sea mas agradable y tenemos el virtual DOM con el que cual podemos hacer cosas increíbles."
    keywords="React Js, Redux, React Router, Next Js, Git, Ubuntu, Css, Html"
  >
    <main>
      <ListSkillsIcons />
      <ListSkills />
    </main>

  </Layout>
);

export default Skills;
