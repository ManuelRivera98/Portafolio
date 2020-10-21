import { FcIdea, FcLinux } from 'react-icons/fc';
import { IoLogoGameControllerB, IoLogoCss3 } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { MdPets } from 'react-icons/md';
import {
  FaDumbbell, FaHtml5, FaNpm, FaGitAlt, FaLinkedin,
} from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { DiJavascript1 } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';

const data = {
  infoProfile: {
    name: 'Manuel Rivera',
    occupation: 'front-end developer Jr',
    avatar: {
      src: '/images/mr.JPG',
      alt: 'Manuel Rivera',
    },
  },
  infoAboutMe: {
    text: {
      phrase: 'Creo que es posible para la gente normal elegir ser extraordinaria.',
      author: '❝Elon Musk❞.',
    },
    hobbies: [
      {
        text: 'Me enfoco en aprender algo cada día con el fin de estar mas cerca de mis objetivos.',
        Icon: FcIdea,
        color: 'initial',
        name: 'Icon Idea',
        id: 1,
      },
      {
        text: 'Me gustan los video juegos y la técnología.',
        Icon: IoLogoGameControllerB,
        color: '#A50104',
        name: 'Icon Control Play',
        id: 2,
      }, {
        text: 'Amor por los animales.',
        Icon: MdPets,
        color: '#290D05',
        name: 'Icon Pets',
        id: 3,
      }, {
        text: 'Me gusta estar en una muy buena condición física.',
        Icon: FaDumbbell,
        color: '#03030A',
        name: 'Icon Dumbbell',
        id: 4,
      }, {
        text: 'Espero poder conocer gran parte del mundo.',
        Icon: GiWorld,
        color: '#01200F',
        name: 'Icon World',
        id: 5,
      },
    ],
  },
  infoSkills: {
    skillsIcons: [
      {
        Icon: IoLogoCss3, color: '#1e9cd7', name: 'Icon Css', id: 1,
      },
      {
        Icon: FaHtml5, color: '#ef6431', name: 'Icon Html', id: 2,
      },
      {
        Icon: DiJavascript1, color: '#ead54c', name: 'Icon JavaScript', id: 3,
      },
      {
        Icon: GrReactjs, color: '#5bcbea', name: 'Icon React Js', id: 4,
      },
      {
        Icon: FaNpm, color: '#c83b35', name: 'Icon Npm', id: 5,
      },
      {
        Icon: FaGitAlt, color: '#eb4f32', name: 'Icon Git', id: 6,
      },
      {
        Icon: FcLinux, color: '', name: 'Icon Linux Os', id: 7,
      },
    ],
    List: [
      {
        id: 1,
        title: 'Lenguajes',
        items: 'Js, Html5, Css3, Python, Sql',
        description: 'Lenguajes esenciales para el desarrollo front-end, Html para el marcado, Css para darle ese toque personal y JavaScript para hacer nuestras aplicaciones dinámicas, Python para trabajar en el backend, Sql para realizar consultas a bases de datos relacionales.',
      },
      {
        id: 3,
        title: 'Frameworks / Bibliotecas',
        items: 'React Js, Redux, React Router, Next Js, Django',
        description: 'React para crear interfaces de usuario, Redux para manejar el estado de nuestra aplicación de manera predecible, React Router para crear nuestras rutas y seguir trabajando en SPA, Next para el performance y SEO con SSR y SSG, Django junto django-rest para crear nuestros endpoints.',
      },
      {
        id: 4,
        title: 'Bases de datos',
        items: 'MySql, PostgreSql',
        description: 'Nos permiten almacenar, gestionar y buscar información de manera rápida y eficiente para después ser utilizada.',
      },
      {
        id: 5,
        title: 'Manejador de Versiones',
        items: 'Git',
        description: 'Nos permite poder tener un mejor control de nuestro entorno y nunca perder un cambio en nuestros proyectos.',
      },
      {
        id: 6,
        title: 'Otras Herramientas',
        items: 'Webpack, Babel, Css Grid Layout, Flexbox, Context Api, Responsive Design, Docker',
        description: 'Webpack para empaquetar nuestros módulos Js, html, css, imágenes, etc. Babel para que nuestro código sea compatible en todos los navegadores, Css Grid y Flexbox para construir Layouts, Context Api para manejar un estado global en aplicaciones pequeñas y R. Design para que nuestra app sea adaptable a cualquier tamaño de pantalla.',
      },
    ],
  },
  infoProjects: [
    {
      id: 1,
      img: '/images/mr-movies.png',
      title: 'Mr_98 Movies',
      skills: 'React Js, Next Js, Firebase',
      description: 'Simulando una aplicación de series, programas y películas, creada con Next Js, React y Firebase para la autenticación, es responsive first-mobile, css con styled-components, consumiendo la api pública de películas y series http://www.omdbapi.com/.',
      src: 'https://github.com/ManuelRivera98/mr98_movies',
      url: 'https://moviesmr.vercel.app',
    },
    {
      id: 2,
      img: '/images/mernTasks.png',
      title: 'MernTasks',
      skills: 'React Js, Context Api, React-router, Node Js, Express',
      description: 'Administrador de proyectos y tareas creado con el stack MERN (Mongo Express React Node), autenticación con jwt, middleware de permisos, sirviendo el frontend desde el backend y aplicando Server Side Rendering. Webpack para optimización y empaquetado de nuestro módulos. El estado de la app se maneja con Context Api.',
      src: 'https://github.com/ManuelRivera98/MERN-Task',
      url: 'https://tasks-mern.herokuapp.com/',
    },
    {
      id: 3,
      img: '/images/petgram.png',
      title: 'Petgram',
      skills: 'React Js, Context Api, React-router',
      description: 'Simulando un clon de instagram con React Js, manejando el estado de la aplicación con Context Api. Creado first-mobile.',
      src: 'https://github.com/ManuelRivera98/PetGram',
      url: 'https://instapetgramsd.now.sh',
    },
    {
      id: 4,
      img: '/images/productHunt.png',
      title: 'ProductHunt',
      skills: 'React Js, Context Api, React-router',
      description: 'Simulando un clon del sitio Product Hunt, el cual consiste en crear productos y ofrecerlos a los demás usuarios, creado con NextJs, ReactJs y Firebase para la autenticación.',
      src: 'https://github.com/ManuelRivera98/ClonProductHunt',
      url: 'https://product-h.vercel.app',
    },
    {
      id: 5,
      img: '/images/restCoffee.png',
      title: 'RestApiCoffee',
      skills: 'Node Js, Express, MongoDB',
      description: 'Api para crear categorias y productos, carga de imágenes, autenticación con jw y google api, middleware de scopes y permisos para la capa de servicios. Esta construida en 3 capas, controladores los cuales tienen acceso a la capa de servicios o lógica del negocio, y esta a su vez tiene acceso a las librerías, construido con Node y express, como base de datos se usó MongoDB.',
      src: 'https://github.com/ManuelRivera98/REST-Coffee',
      url: 'https://rest-coffee.herokuapp.com',
    },
    {
      id: 6,
      img: '/images/pageWeb.png',
      title: 'Página Web',
      skills: 'Webpack, Babel, React Js, Context Api',
      description: 'Sitio web, desarrolado con React, se maneja el estado del sitio con Context Api y useReducer, adaptable a todos los dispositivos.',
      src: '',
      url: 'https://cesar-rivera.now.sh/',
    },
    {
      id: 7,
      img: '/images/portafolio.png',
      title: 'Portafolio',
      skills: 'React Js, Next Js, Context Api',
      description: 'Portafolio personal, desarrollado con Next Js.',
      src: 'https://github.com/ManuelRivera98/portafolio',
      url: '/',
    },

  ],
  infoContact: [
    {
      id: 1,
      name: 'Linkedin',
      Icon: FaLinkedin,
      color: '#0072b0',
      url: 'https://www.linkedin.com/in/manuel-rivera-8624621a0/',
    },
    {
      id: 3,
      name: 'GitHub',
      Icon: GoMarkGithub,
      color: 'black',
      url: 'https://github.com/ManuelRivera98',
    },
  ],
};

export default data;
