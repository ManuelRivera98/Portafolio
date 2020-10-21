import React from 'react';

import Layout from '../components/Layout/index';
import ContactContain from '../components/folderContact/ContactContain/index';

const Contact = () => (
  <Layout
    title="Contacto"
    description="Si necesitas ayuda, te interesa trabajar conmigo o en adquirir mis servicios, no dudes en escribirme."
    keywords="Manuel, Rivera, front-end developer, web developer"
  >

    <ContactContain />
  </Layout>
);

export default Contact;
