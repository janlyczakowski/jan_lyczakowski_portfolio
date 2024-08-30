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
import contextAwarenessImg from '../resources/img/context_awareness500x500.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faDatabase,
  faSatellite,
  faCube,
  faPenNib,
  faBrush,
  faMobileScreenButton,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAndroid,
  faJava,
  faHtml5,
  faReact,
  faCss3Alt,
  faJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';

export const PORTFOLIO_ITEMS = [
  {
    navigateTo: 'mywork/context_awareness',
    category: 'software development',
    dataAttribute: 'context_awareness',
    srcImg: contextAwarenessImg,
    altImg: 'A picture of an adaptive mobile map',
    title: `Optimizing mobile map reading: An adaptive map approach in response to dynamic pedestrian context`,
    date: 'September 2024',
    keywords: [
      'Mobile',
      'Pedestrian navigation',
      'Context-awareness',
      'Adaptive mapping',
    ],
  },
  {
    navigateTo: 'mywork/mayor_enigma',
    category: 'software development',
    dataAttribute: 'mayor_enigma',
    srcImg: mayorEnigmaImg,
    altImg: "The icon of the Mayor's Enigma mobile app",
    title: `Mayor's Enigma`,
    date: 'January 2024',
    keywords: ['Mobile', 'Location-based services', 'GIS'],
  },
  {
    navigateTo: 'mywork/crowded_space',
    category: 'software development',
    dataAttribute: 'crowded_space',
    srcImg: crowdedSpaceImg,
    altImg: 'Crowded Space',
    title: 'Crowded Space',
    date: 'June 2023',
    keywords: ['Web', '3D visualization', 'Storytelling', 'GIS'],
  },
  {
    navigateTo: 'mywork/corsica',
    category: 'static maps',
    dataAttribute: 'corsica',
    srcImg: corsicaImg,
    altImg: 'Corsica map',
    title: 'Corsica: Into the Unknown',
    date: 'June 2023',
    keywords: ['Printed map', 'GIS', 'Storytelling'],
  },
  {
    navigateTo: 'mywork/hogwarts',
    category: 'software development',
    dataAttribute: 'hogwarts',
    srcImg: hogwartsImg,
    altImg: 'An icon of the hogwarts project',
    title: 'Unlocking Hogwarts: A Case Study on School Accessibility',
    date: 'February 2023',
    keywords: ['Web', '3D visualization', 'Case study'],
  },
  {
    navigateTo: 'mywork/datalab_milan',
    category: 'software development',
    dataAttribute: 'datalab',
    srcImg: datalabImg,
    altImg: 'Datalab - SDG Monitoring Dashboard',
    title: 'Datalab - SDG Monitoring Dashboard',
    date: 'May 2022',
    keywords: ['Web', 'GIS', 'Dashboard'],
  },
  // {
  //   navigateTo: 'mywork/earthquakes',
  //   dataSpec: ['all', 'html', 'css', 'javascript', 'leaflet'],
  //   dataGen: ['all', 'geo-spatial'],
  //   dataAttribute: 'earthquakes',
  //   srcImg: earthquakesImg,
  //   altImg: 'A map of the earthquakes',
  //   title: 'Latest worldwide earthquakes',
  //   date: 'May 2021',
  // },
  {
    navigateTo: 'mywork/notebook',
    category: 'software development',
    dataAttribute: 'notebook',
    srcImg: notebookImg,
    altImg: 'An icon of the notebook app',
    title: 'Notebook',
    date: 'April 2021',
    keywords: ['Web'],
  },
  // {
  //   navigateTo: 'mywork/jazz_club',
  //   dataSpec: ['all', 'html', 'css', 'javascript'],
  //   dataGen: ['all', 'other'],
  //   dataAttribute: 'sebs',
  //   srcImg: jazzClubImg,
  //   altImg: "Seb's jazz club",
  //   title: `Seb's jazz club`,
  //   date: 'March 2021',
  // },
  {
    navigateTo: 'mywork/gliders',
    category: 'software development',
    dataAttribute: 'gliders',
    srcImg: glidersImg,
    altImg: "An icon of gliders' visualization",
    title: `An analysis of the possibilities of geospatial dynamic data’s
    visualization using the LUCIAD software`,
    date: 'February 2021',
    keywords: ['Desktop', '3D visualization', 'GIS', 'Dynamic visualization'],
  },
];
export const PORTFOLIO_PAGE_10 = {
  title: `Optimizing mobile map reading: An adaptive map approach in response to dynamic pedestrian context`,
  subtitle: "Master's thesis",
  category: 'software development',
  date: 'September 2024',
  srcImg: contextAwarenessImg,
  altImg: 'A picture of an adaptive mobile map',
  description: [
    "This research project aimed to address the challenges faced by mobile map users in dynamic environments by developing and evaluating a context-aware mobile map prototype. The goal was to create a map that adapts the amount and type of information displayed based on the user's specific needs in a particular situation and to test the impact of noise level and movement speed on mobile map reading performance. To investigate the impact of contextual factors and assess the effectiveness of the adaptive map, a field-based user evaluation was conducted where participants had to solve map-related tasks in various scenarios, including walking in a park, catching public transport, and sightseeing in a city center. These scenarios exposed users to different levels of movement speed and noise.",
    'The Android mobile map application developed for this research served as a tool to answer the research questions. It was developed using Kotlin programming language and the Mapbox Maps SDK for Android was used as a mapping library for the adaptive mobile map prototype developed. Also to gather and store user evaluation data, an SQLite database was used. This database stored information related to task completion times, error rates, and user survey responses from the evaluation. All of the statistical analyses of the results were done in R programming language. Additionally, Python was used for post-processing tasks, such as data cleaning and sorting.',
    'The findings of this research demonstrate the negative impact of noise level and movement speed on mobile map reading performance and the great potential of adaptive mobile mapping in enhancing the mobile map reading process.',
  ],
  technology: [
    { text: 'Kotlin', icon: <FontAwesomeIcon icon={faMobileScreenButton} /> },
    { text: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} /> },
    {
      text: 'Mapbox Maps SDK',
      icon: <FontAwesomeIcon icon={faMapLocationDot} />,
    },

    { text: 'R', icon: <FontAwesomeIcon icon={faChartLine} /> },
    { text: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
  ],
  link_online: '',
  link_github:
    'https://github.com/janlyczakowski/Optimizing-Mobile-Map-Reading',
};

export const PORTFOLIO_PAGE_9 = {
  title: `Mayor's Enigma`,
  subtitle: 'Mobile app',
  category: 'software development',
  date: 'January 2024',
  srcImg: mayorEnigmaImg,
  altImg: `The icon of Mayor's Enigma mobile app`,
  description: [
    'This project was developed as a part of the Mobile Cartography class at the Technical University of Dresden. It is a mobile game that combines location-based services, storytelling, and interactive elements to create a compelling detective experience. The game involves following a series of locations to gather evidence and ultimately solve the case. This project showcases my skills in mobile development, cartography, and database management, demonstrating my ability to apply these concepts to create an engaging and interactive experience.',
    'The application was developed in Android Studio Code using Java. To create the interactive map that played a central role in this mobile application, I utilized the Google Maps SDK for Android. The geographical coordinates of the locations within the game were stored in an SQLite database. To interact with the database and retrieve location data, I also wrote SQL queries, demonstrating my proficiency in database management.',
    'The user interface was designed in Figma, ensuring a visually appealing and intuitive design. To enhance the storytelling, the project incorporates images of the locations and suspects generated using Midjourney, adding a unique and visually appealing dimension to the game. This mobile game successfully combines the elements of cartography, detective work, and interactive storytelling.',
  ],
  technology: [
    { text: 'Java', icon: <FontAwesomeIcon icon={faJava} /> },
    { text: 'Android', icon: <FontAwesomeIcon icon={faAndroid} /> },

    { text: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} /> },
    {
      text: 'Google Maps SDK',
      icon: <FontAwesomeIcon icon={faMapLocationDot} />,
    },
  ],
  link_online:
    'https://play.google.com/store/apps/details?id=com.tudresden.map',
  link_github: 'https://github.com/janlyczakowski/Mayor-s-Enigma',
};

export const PORTFOLIO_PAGE_8 = {
  title: 'Crowded Space',
  subtitle: 'Interactive map',
  category: 'software development',
  date: 'June 2023',
  srcImg: crowdedSpaceImg,
  altImg: 'Crowded Space',
  description: [
    'The project was done for the module of Digital Map Creation for the summer semester of 2023 at the Technical University of Vienna as part of the Cartography M.Sc. The interactive 3D web-based visualization aims to increase awareness about the growing number of satellites and debris around the Earth.',
    'The application features a realistic 3D Earth model and displays the real-time positions of active satellites. The visualization incorporates historical context, highlighting significant milestones in space exploration and the evolution of satellite technology, providing a deeper understanding of the evolution of space exploration. In addition, the visualization is complemented with statistics related to satellites including satellite ownership, satellite purpose and space debris.',
    "I was solely responsible for designing and developing the entire UI/UX of this project. The application's user interface was built using React and Three.js library was employed to create the realistic Earth model and visualize satellites as points. The application utilizes satellite data that provides accurate positions up to 2023 based on the database maintained by Celestrak. In addition, the Satellite.js library was used for calculating and updating satellite positions based on the data available.",
    'This project, partly inspired by the ESRI platform SatelliteXplorer, offers a unique and educational experience for all users. It serves as a tool for understanding the emerging issues of the cluttering space objects in Earth’s orbits and the growing human presence in space.',
  ],
  technology: [
    { text: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
    { text: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { text: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
    { text: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
    { text: 'Three.js', icon: <FontAwesomeIcon icon={faCube} /> },
    { text: 'Satellite.js', icon: <FontAwesomeIcon icon={faSatellite} /> },
  ],
  link_online: 'https://reliable-tiramisu-7bef08.netlify.app/',
  link_github: 'https://github.com/janlyczakowski/Crowded-Space',
};

export const PORTFOLIO_PAGE_7 = {
  title: 'Corsica: Into the Unknown',
  subtitle: 'Static Map',
  category: 'static maps',
  date: 'June 2023',
  srcImg: corsicaImg,
  altImg: 'Corsica: Into the Unknown',
  description: [
    'This project, completed as part of the "Project Map Creation" course at the Technical University of Vienna, aimed to explore the power of storytelling through maps by creating a personalized, printable map of Corsica. Based on my one-week hiking experience on the island, the map incorporates my unique perspective and highlights the areas I explored.',
    "To effectively convey the terrain, I employed various blending modes in ArcGIS Pro to create a visually appealing representation of the island's topography that reflects the real-world conditions encountered during the hike and the overall ambiance of the island. Subsequently, the map layout was designed in Adobe Illustrator. To enhance the storytelling aspect of the map, I included a detailed timeline that provides additional information about my experiences and stories from each location. This timeline component adds a personal touch to the map and allows viewers to gain a deeper understanding of my journey. By combining these elements, I was able to produce a visually appealing map that effectively conveys the terrain, highlights the key features of my Corsica hiking adventure and offers a personalized storytelling experience.",
  ],
  technology: [
    { text: 'ArcGIS Pro', icon: <FontAwesomeIcon icon={faMapLocationDot} /> },
    {
      text: 'Adobe Illustrator',
      icon: <FontAwesomeIcon icon={faPenNib} />,
    },
  ],
  link_online: corsicaMap,
  link_github: '',
};
export const PORTFOLIO_PAGE_6 = {
  title: 'Unlocking Hogwarts: A Case Study on School Accessibility',
  subtitle: 'Interactive map',
  category: 'software development',
  date: 'February 2023',
  srcImg: hogwartsImg,
  altImg: 'Icon of hogwarts',
  description: [
    "This project, undertaken during my first semester of the Cartography Master's program in Munich, aimed to explore the potential of fantasy mapping to raise awareness about accessibility issues in schools. By creating a web application focused on Hogwarts, a universally recognizable fictional school, the goal was to demonstrate the barriers that children with mobility disabilities face in accessing educational facilities.",
    "Three.js library was used to visualize Hogwarts castle and 3D text and vectors were added to enhance user interaction with the 3D model and point to the particular room in the castle. This interactive approach allowed users to explore the school's architecture and identify potential accessibility challenges. React was employed to build the user interface of the web application, providing a responsive and intuitive experience for users. The area overview map was created in Adobe Photoshop using a map reference from the Harry Potter series.",
    'The project successfully conveyed the importance of accessible school facilities by combining fantasy mapping, 3D visualization, and a relatable case study. It encouraged viewers to consider the challenges faced by individuals with disabilities and highlighted the potential of innovative mapping techniques to raise awareness and promote inclusivity.',
    'Due to the challenges of obtaining accurate floor plans from the Harry Potter movies, the project focused on mapping the three most prominent floors of Hogwarts castle: the ground floor, the first, and the fourth floors.',
  ],
  technology: [
    { text: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
    { text: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { text: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
    { text: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
    { text: 'Three.js', icon: <FontAwesomeIcon icon={faCube} /> },
    { text: 'Adobe Photoshop', icon: <FontAwesomeIcon icon={faBrush} /> },
  ],
  link_online: 'https://stalwart-brigadeiros-080632.netlify.app',
  link_github:
    'https://github.com/janlyczakowski/UnlockingHowgartsCartographyM.Sc',
};
export const PORTFOLIO_PAGE_5 = {
  title: 'Datalab - SDG Monitoring Dashboard',
  subtitle: 'Interactive Dashboard',
  category: 'software development',
  date: 'May 2022',
  srcImg: datalabImg,
  altImg: 'Datalab - SDG Monitoring Dashboard',
  description: [
    'As a Front-End Web Developer at Colouree, I was solely responsible for designing and developing the entire UI/UX of this project, an interactive web-based dashboard built in React. Datalab is designed to analyze and monitor Sustainable Development Goals (SDGs) indicators related to the Sustainable Metropolitan Agenda.',
    'Datalab offers a comprehensive visualization platform, featuring maps created using Leaflet to represent geospatial SDG data, as well as graphs and tables for more traditional data analysis. This combination of visualizations allows users to explore data from various perspectives and gain deeper insights into SDG progress. It enables stakeholders to identify areas where the city is on track and where improvements are needed to ensure sustainable development.',
    'Collaborating closely with the back-end developer, I had to ensure seamless data integration between the front end and back end. This experience provided valuable hands-on practice and deepened my understanding of full-stack development. The dashboard is fully responsive, hence it adapts to various screen sizes, providing a consistent and optimal user experience on desktops, tablets, and smartphones.',
  ],
  technology: [
    { text: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
    { text: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { text: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
    { text: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
    { text: 'Leaflet', icon: <FontAwesomeIcon icon={faMapLocationDot} /> },
  ],
  link_online: 'https://sdgcittametropolitana.mi.it/',
  link_github: '',
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
  category: 'software development',
  date: 'April 2021',
  srcImg: notebookImg,
  altImg: 'Notebook application',
  description: [
    'This project aimed to develop a functional and user-friendly note-taking application inspired by Google Keep. A key focus of the project was to hone my skills in JavaScript, HTML, and CSS while creating a practical and useful application. The application allows users to create, edit, and manage their daily notes efficiently. Users can easily create new notes with rich text formatting and edit existing notes to modify their content. Notes are stored persistently using localStorage, allowing for easy access and retrieval. Users can delete notes individually, and the application displays a placeholder message when there are no notes. Notes are displayed in a list format, and each note can be assigned a color for visual organization. The development process focused on replicating the core functionality and user experience of Google Keep, including note creation, editing, and management.',
  ],
  technology: [
    { text: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
    { text: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { text: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
  ],
  link_online: 'https://notebookjanlyczakowski.netlify.app/',
  link_github: 'https://github.com/janlyczakowski/notebook_app',
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
  subtitle: "Bachelor's thesis",
  category: 'software development',
  date: 'February 2021',
  srcImg: glidersImg,
  altImg: "Glider's dynamic visualization",
  description: [
    "This thesis project explored the potential of Luciad software to visualize dynamic geospatial data, specifically glider flight paths from a single tournament. By developing a custom 3D visualization within the IntelliJ IDEA development environment, the project aimed to provide a novel and informative way to analyze glider performance and flight patterns. Utilizing Luciad's geospatial capabilities and Java programming language, the visualization effectively represented the flight paths of multiple gliders simultaneously, allowing for in-depth analysis and insights.",
    "To enhance visual differentiation, the project incorporated different colors for the trajectories of each glider, making it easier to track and compare individual flight paths. Additionally, the visualization employed a dynamic representation of gliders, transitioning from 2D icons to 3D models depending on the zoom level. The  LuciadLightspeed tool (part of Luciad) was used to create a desktop application, utilizing the available documentation on the Luciad Developer Platform. Due to the desktop nature of the application, an online version is not accessible. However, a video demonstration is available to showcase the visualization's capabilities.",
  ],
  technology: [
    { text: 'Java', icon: <FontAwesomeIcon icon={faJava} /> },
    {
      text: 'LuciadLightspeed',
      icon: <FontAwesomeIcon icon={faMapLocationDot} />,
    },
  ],
  link_online:
    'https://www.youtube.com/watch?v=WTGIAo1nZGs&list=UUVEBNRE-o5OfkS05sLd21ZA&index=3',
  link_github: '',
};
