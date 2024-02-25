import crowdedSpaceImg from '../resources/img/crowded_space500x500.png';
import corsicaImg from '../resources/img/corsica500x500.png';
import corsicaMap from '../resources/img/corsica_map.pdf';
import hogwartsImg from '../resources/img/hogwarts500x500.jpg';
import datalabImg from '../resources/img/datalab500x500.png';
import notebookImg from '../resources/img/notebook500x500.png';
// import jazzClubImg from '../resources/img/seb500x500.png';
// import earthquakesImg from '../resources/img/earthquake500x500.png';
import glidersImg from '../resources/img/gliders500x500.png';
import mayorEnigmaImg from '../resources/img/mayor_enigma_icon.png';

export const PORTFOLIO_ITEMS = [
  {
    navigateTo: 'mywork/mayor_enigma',
    dataSpec: ['all', 'java'],
    dataGen: ['all', 'geo-spatial'],
    dataAttribute: 'mayor_enigma',
    srcImg: mayorEnigmaImg,
    altImg: "The icon of the Mayor's Enigma mobile app",
    coverText: `Mayor's Enigma`,
    date: 'January 2024',
  },
  {
    navigateTo: 'mywork/crowded_space',
    dataSpec: ['all', 'html', 'css', 'javascript', 'react', 'three js'],
    dataGen: ['all', 'geo-spatial'],
    dataAttribute: 'crowded_space',
    srcImg: crowdedSpaceImg,
    altImg: 'Crowded Space',
    coverText: 'Crowded Space',
    date: 'June 2023',
  },
  {
    navigateTo: 'mywork/corsica',
    dataSpec: ['all', 'arcgis pro', 'adobe'],
    dataGen: ['all', 'geo-spatial'],
    dataAttribute: 'corsica',
    srcImg: corsicaImg,
    altImg: 'Corsica map',
    coverText: 'Corsica: Into the Unknown',
    date: 'June 2023',
  },
  {
    navigateTo: 'mywork/hogwarts',
    dataSpec: [
      'all',
      'html',
      'css',
      'javascript',
      'react',
      'adobe',
      'three js',
    ],
    dataGen: ['all', 'other'],
    dataAttribute: 'hogwarts',
    srcImg: hogwartsImg,
    altImg: 'An icon of the hogwarts project',
    coverText: 'Unlocking Hogwarts: A Case Study on School Accessibility',
    date: 'February 2023',
  },
  {
    navigateTo: 'mywork/datalab_milan',
    dataSpec: ['all', 'html', 'css', 'javascript', 'react', 'leaflet'],
    dataGen: ['all', 'other'],
    dataAttribute: 'datalab',
    srcImg: datalabImg,
    altImg: 'Datalab - SDG Monitoring Dashboard',
    coverText: 'Datalab - SDG Monitoring Dashboard',
    date: 'May 2022',
  },
  // {
  //   navigateTo: 'mywork/earthquakes',
  //   dataSpec: ['all', 'html', 'css', 'javascript', 'leaflet'],
  //   dataGen: ['all', 'geo-spatial'],
  //   dataAttribute: 'earthquakes',
  //   srcImg: earthquakesImg,
  //   altImg: 'A map of the earthquakes',
  //   coverText: 'Latest worldwide earthquakes',
  //   date: 'May 2021',
  // },
  {
    navigateTo: 'mywork/notebook',
    dataSpec: ['all', 'html', 'css', 'javascript'],
    dataGen: ['all', 'other'],
    dataAttribute: 'notebook',
    srcImg: notebookImg,
    altImg: 'An icon of the notebook app',
    coverText: 'Notebook',
    date: 'April 2021',
  },
  // {
  //   navigateTo: 'mywork/jazz_club',
  //   dataSpec: ['all', 'html', 'css', 'javascript'],
  //   dataGen: ['all', 'other'],
  //   dataAttribute: 'sebs',
  //   srcImg: jazzClubImg,
  //   altImg: "Seb's jazz club",
  //   coverText: `Seb's jazz club`,
  //   date: 'March 2021',
  // },
  {
    navigateTo: 'mywork/gliders',
    dataSpec: ['all', 'java', 'luciadlightspeed'],
    dataGen: ['all', 'geo-spatial'],
    dataAttribute: 'gliders',
    srcImg: glidersImg,
    altImg: "An icon of gliders' visualization",
    coverText: `An analysis of the possibilities of geospatial dynamic data’s
    visualization using the LUCIAD software`,
    date: 'February 2021',
  },
];

export const PORTFOLIO_PAGE_9 = {
  title: `Mayor's Enigma`,
  subtitle: 'Mobile app',
  date: 'January 2024',
  srcImg: mayorEnigmaImg,
  altImg: `The icon of Mayor's Enigma mobile app`,
  description: [
    `The project was done as a part of a Mobile Cartography class at the Technical University of Dresden. It is a game where the user takes the role of a detective and has to follow the locations to gather evidence and solve the case.  The UI was designed in Figma and the application was developed in Android Studio Code.
The story is fictional and the pictures used in the project were generated in MidJourney. 
`,
  ],
  technology: 'Java',
  link: 'https://play.google.com/store/apps/details?id=com.tudresden.map',
};

export const PORTFOLIO_PAGE_8 = {
  title: 'Crowded Space',
  subtitle: 'Interactive map',
  date: 'June 2023',
  srcImg: crowdedSpaceImg,
  altImg: 'Crowded Space',
  description: [
    'It is an interactive 3D view of the Earth, which shows all active satellites and presents how humans have colonized and increasingly populated space with devices, combining it with storytelling to educate science for a broad audience.',
  ],
  technology: 'HTML, CSS, JavaScript, React, Three.js',
  link: 'https://reliable-tiramisu-7bef08.netlify.app/',
};

export const PORTFOLIO_PAGE_7 = {
  title: 'Corsica: Into the Unknown',
  subtitle: 'Static Map',
  date: 'June 2023',
  srcImg: corsicaImg,
  altImg: 'Corsica: Into the Unknown',
  description: [
    'It is a static map, created as a project at the Technical University of Vienna in the class: "Project Map Creation". This project aimed to create a printable map of Corsica which depicts the island from my own perspective based on the one-week hike I did there. The map combines different blending modes to create terrain relief. The storytelling part is represented on the timeline.',
  ],
  technology: 'ArcGIS Pro, Adobe Illustrator',
  link: corsicaMap,
};
export const PORTFOLIO_PAGE_6 = {
  title: 'Unlocking Hogwarts: A Case Study on School Accessibility',
  subtitle: 'Interactive map',
  date: 'February 2023',
  srcImg: hogwartsImg,
  altImg: 'Icon of hogwarts',
  description: [
    'This project was created in the Mapping Project class during the first semester of Cartography Master in Munich. As a visual case study on school accessibility, the web map application demonstrates how school facilities can be transformed to become more accessible for people with mobility disability. The goal of this project is to educate non-disabled individuals about the barriers that children with disabilities face with regards to access to education. Hogwarts, from the book series Harry Potter, serves as our case study school of interest. Though the school exists in a fictional dimension, its global acclaim allows the case study to be universally recognizable and relatable.',
  ],
  technology: 'HTML, CSS, JavaScript, React, Adobe Photoshop, Three.js',
  link: 'https://stalwart-brigadeiros-080632.netlify.app',
};
export const PORTFOLIO_PAGE_5 = {
  title: 'Datalab - SDG Monitoring Dashboard',
  subtitle: 'Interactive Dashboard',
  date: 'May 2022',
  srcImg: datalabImg,
  altImg: 'Datalab - SDG Monitoring Dashboard',
  description: [
    'Datalab is a web-based interactive dashboard for analyzing and monitoring Sustainable Development Goals indicators related to the goals and targets from the Sustainable Metropolitan Agenda. The 2030 Agenda for Sustainable Development is an action agenda for people, planet and prosperity signed in September 2015 by the governments of the 193 member countries of the UN, and incorporates 17 Sustainable Development Goals (SDGs), which represent common goals on a set of important development issues.',
    'The project was created by Colouree where I was working as a Front-End Web Developer. I was responsible for creating the front end of this application.',
  ],
  technology: 'HTML, CSS, JavaScript, React, Leaflet',
  link: 'https://sdgcittametropolitana.mi.it/',
};

// export const PORTFOLIO_PAGE_4 = {
//   title: 'Latest worldwide earthquakes',
//   subtitle: 'Interactive map',
//   date: 'May 2021',
//   srcImg: earthquakesImg,
//   altImg: 'Latest worldwide earthquakes',
//   description: [
//     'This map-based application shows the latest worldwide earthquakes. The user interface contains a couple of functionalities like filtering by magnitude, by name and counting earthquakes in the country. Additionally, there are displayed basic information on each earthquake that the user clicks on.',
//     'The aim of this project was to get familiarized with the Leaflet library and keep on practising with JavaScript.',
//   ],
//   technology: 'HTML, CSS, JavaScript, Leaflet',
//   link: 'https://latestworldwideearthquakesjanlyczakowski.netlify.app/',
// };

export const PORTFOLIO_PAGE_3 = {
  title: 'Notebook',
  subtitle: 'Web App',
  date: 'April 2021',
  srcImg: notebookImg,
  altImg: 'Notebook application',
  description: [
    'This project aimed to practise JavaScript. This application allows users to add, store, edit and manage their daily notes. The functionality, as well as graphical look of this app, was based on a GoogleKeep.',
  ],
  technology: 'HTML, CSS, JavaScript',
  link: 'https://notebookjanlyczakowski.netlify.app/',
};
// export const PORTFOLIO_PAGE_2 = {
//   title: `Seb's jazz club`,
//   subtitle: 'Website',
//   date: 'March 2021',
//   srcImg: jazzClubImg,
//   altImg: "Seb's jazz club website",
//   description: [
//     'This project aimed to put my theoretical knowledge in HTML, CSS and JavaScript into practice. It was one of my first websites ever made. The website is fully responsive and mobile adjusted. The idea of making this website was taken directly from the LaLaLand movie and its famous jazz club Seb’s. All the information about the club and the musicians were made up. Though the fans of LaLaLand will surely find a grain of truth in it.',
//   ],
//   technology: 'HTML, CSS, JavaScript',
//   link: 'https://sebsjazzclubjanlyczakowski.netlify.app/',
// };

export const PORTFOLIO_PAGE_1 = {
  title: `An analysis of the possibilities of geospatial dynamic data’s
  visualization using the LUCIAD software`,
  subtitle: 'Bachelor thesis',
  date: 'February 2021',
  srcImg: glidersImg,
  altImg: "Glider's dynamic visualization",
  description: [
    'This thesis aimed to explore the visualization possibilities of geospatial dynamic data in Hexagon company product - Luciad software. Luciad technology was not widely known in the Polish market at the time of preparing this thesis, so for that reason, the thesis had a pioneering character.',
    'To prepare a cartographic visualization I had to familiarize myself with the structure of Luciad software, in particular with the structure of the using tool. It was necessary to acquire basic knowledge of the Java programming language, which was used in the LuciadLightspeed. Most of the work has been made in an integrated development environment IntelliJ IDEA using the accessible code samples, the documentation from Luciad Developer Platform, and consultations with the Product Support department of Hexagon Geospatial Division. The visualization of the geospatial dynamic data (glider’s flights) was prepared as a desktop application, based on one of two available graphical user interfaces.',
    '(This project was made as a desktop application. Therefore it is only possible to see a short video presenting the cartographic visualization which is also an appendix to the thesis work.)',
  ],
  technology: 'Java, LuciadLightspeed',
  link: 'https://www.youtube.com/watch?v=WTGIAo1nZGs&list=UUVEBNRE-o5OfkS05sLd21ZA&index=3',
};
