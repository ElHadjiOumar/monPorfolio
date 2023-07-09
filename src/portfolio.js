/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "El Hadji Oumar Portfolio",
  description:
    "Une personne passionnée qui aime toujours travailler sur des projets de bout en bout qui développe des systèmes sociaux et techniques durables et évolutifs pour créer un impact.",
  og: {
    title: "El Hadji Oumar MBENGUE",
    type: "website",
    url: "http://elhadjioumar.mbengue.org/",
  },
};

//Home Page
const greeting = {
  title: "El Hadji Oumar MBENGUE",
  logo_name: "ElHadjiOumarMbengue",
  nickname: "Data Engineer / Data Scientist",
  subTitle:
  "Passionné et engagé, je crée des solutions techniques évolutives de bout en bout, visant à avoir un impact réel et durable. Bienvenue dans mon espace de passion et d'innovation.",
  resumeLink:
    "https://drive.google.com/file/d/15QbrG5KZvTFL4OrCmiGvfExYRTlmvcIu/view?usp=sharing",
  //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ElHadjiOumar",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ElHadjiOumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/el-hadji-3b3bb8188/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:elhadjimbengueo@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ElHOumarM",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100006806387986/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mbenguelhadjioumar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  
];

const skills = {
  data: [
    {
      title: "Data Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Conception de modèles d'apprentissage profond et statistiques hautement évolutifs.",
        "⚡ Maîtrise d'outils open-source pour l'ingénierie des données, dont DBT, Trino, MinIO, Apache Iceberg, Prefect, Airflow, ClickHouse et Spark. ",
        "⚡ Maîtrise des outil de Business Intelligence et Data Visualization ( Apache Superset ,Power BI et Tableau )",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "logos:dbt",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            backgroundColor: "transparent",
            color:"#E35A16"
          },
        },
        {
          skillName: "Airbyte",
          fontAwesomeClassname: "simple-icons:airbyte",
          style: {
            backgroundColor: "transparent",
            color:"#5c59f7"
          },
        },
        {
          skillName: "trino",
          fontAwesomeClassname: "simple-icons:trino",
          style: {
            backgroundColor: "transparent",
            
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Prefect",
          fontAwesomeClassname: "simple-icons:prefect",
          style: {
            backgroundColor: "transparent",
            color:"#0f8af7"
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Clickhouse",
          fontAwesomeClassname: "simple-icons:clickhouse",
          style: {
            backgroundColor: "transparent",
            color:"#f7c601"
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color:"#DFB010"
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        
      ],
    },
    {
      title: "Developpement Full STACK",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création de site Web réactif à l'aide de React-Redux,Next JS,Angular JS",
        "⚡ Développement d'applications mobiles à l'aide de Flutter, React Native et d'applications Android à l'aide de JAVA",
        "⚡ Création d'application avec backend à l'aide de Laravel,Symfony ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS et Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#68A93C",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Déploiement de plates-formes de données sur Azure, AWS et GCP. ",
        "⚡ Hébergement et maintenance de sites Web sur des instances de machines virtuelles ainsi que l'intégration de bases de données",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            color: "#430098",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Conception d'une interface utilisateur très attrayante pour les applications mobiles et Web",
        "⚡ Personnalisation des conceptions de logo et création de logos à partir de zéro",
        "⚡ Création de flux de fonctionnalités applicatives pour optimiser l'expérience utilisateur",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  //   {
  //     siteName: "HackerRank",
  //     iconifyClassname: "simple-icons:hackerrank",
  //     style: {
  //       color: "#2EC866",
  //     },
  //     profileLink: "https://www.hackerrank.com/layman_brother",
  //   },
  //   {
  //     siteName: "Codechef",
  //     iconifyClassname: "simple-icons:codechef",
  //     style: {
  //       color: "#5B4638",
  //     },
  //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
  //   },
  //   {
  //     siteName: "Codeforces",
  //     iconifyClassname: "simple-icons:codeforces",
  //     style: {
  //       color: "#1F8ACB",
  //     },
  //     profileLink: "http://codeforces.com/profile/layman_brother",
  //   },
  //   {
  //     siteName: "Hackerearth",
  //     iconifyClassname: "simple-icons:hackerearth",
  //     style: {
  //       color: "#323754",
  //     },
  //     profileLink: "https://www.hackerearth.com/@ashutosh391",
  //   },
  //   {
  //     siteName: "Kaggle",
  //     iconifyClassname: "simple-icons:kaggle",
  //     style: {
  //       color: "#20BEFF",
  //     },
  //     profileLink: "https://www.kaggle.com/laymanbrother",
  //   },
   ],
};

const degrees = {
  degrees: [
    {
      title: "ECE Paris",
      subtitle: "MSc Data Engineer & Intelligence Artificielle",
      logo_path: "logo-ece.png",
      alt_name: "ECE",
      duration: "2022 - Jusqu'à présent",
      descriptions: [
        "⚡ Compétences managériales et techniques",
        "⚡ Maîtrise de l’analyse des Big Data afin de collecter l’information nécessaire à la prise de décisions stratégiques, marketing et à la création de services innovants",
        "⚡ Répondre aux enjeux économiques de la transformation digitale.",
      ],
      website_link: "https://www.ece.fr/",
    },
    {
      title: "Ecole Supérieure Multinationale des Télécommunications (ESMT) ",
      subtitle: "Master Professionnel Système d'Information",
      logo_path: "esmt.jfif",
      alt_name: "ESMT",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Amélioration de mes competences à travailler en equipe et sous pression et à rendre le travail rapidement dans les délais",
        "⚡ Responsable de ma classe lors de la 1er année de Master ",
      ],
      website_link: "https://esmt.sn",
    },
    {
      title: "Ecole Supérieure Multinationale des Télécommunications (ESMT) ",
      subtitle: "Licence Professionnel en Telecomunication et Informatique (spécialité Developpement d'application )",
      logo_path: "esmt.jfif",
      alt_name: "ESMT",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Etude des compétences basiques en génie logiciel comme l'Algorithme puis initiation aux technologies du developpement WEB, Mobile et logiciel .",
        "⚡ Suivi de cours sur le Cloud Computing , sur le systeme linux et enfin sur les réseaux de télécommunications .",
        "⚡ Responsable de ma classe lors 3eme année de licence ",
      ],
      website_link: "https://esmt.sn",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Development Engineer Digital certificate",
      subtitle: "AWS Educate",
      logo_path: "web-dev-eng.png",
      certificate_link:
        "https://drive.google.com/file/d/1c6gUplfOrTw3j7SnAopqKxkFTZPg8kWO/view?usp=sharing",
      alt_name: "AWS Educate",
      color_code: "#8C151599",
    },
    {
      title: "Amazon Honeycode Badge",
      subtitle: "AWS Educate",
      logo_path: "AmazonHoneycode101Badge.png",
      certificate_link:
        "https://drive.google.com/file/d/1ThUMdTgKCn0SZFf7pHWW3BVEhoyvvnRC/view?usp=sharing",
      alt_name: "AWS Educate",
      color_code: "#8C151599",
    },
    {
      title: "TOEIC",
      subtitle: "(Test of English for International Communication)",
      logo_path: "toeic.jpg",
      certificate_link:
        "#",
      alt_name: "deeplearning.ai",
      color_code: "#8C151599",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Travail, stage et freelance",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Travail",
      experiences: [
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - PRESENT",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Data Engineer",
          company: "Groupe Onepoint",
          company_url: "https://www.groupeonepoint.com/fr/",
          logo_path: "onepoint.png",
          duration: "Avril 2023 - Octobre 2023",
          location: "Paris, France",
          description:
            "Je travaille chez le groupe OnePoint en tant que Data Engineer dans le cadre de la mise en place d'une Moderne Data Platforme à l'aide d'outils Open Source.",
          color: "#ee3c26",
        },
        {
          title: "Developpeur Full-Stack",
          company: "ITNS",
          company_url: "http://www.itns-tn.com/index.html",
          logo_path: "itns.jpg",
          duration: "Avril 2022 - Octobre 2022",
          location: "Tunis, Tunisie",
          description:
            "J'ai travaillé sur la mise en place d'une application mobile de paiements basé sur l'OpenBanking permettant à l'utilisateur de connecter ses banques à l'application afin de pouvoir mieux gerer son argent et pouvoir effectuer des paiements directement depuis l'application.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        
        {
          title: "Developpeur Full STACK",
          company: "Caisse de Sécurité Sociale Sénégal",
          company_url: "http://www.secusociale.sn/",
          logo_path: "caisse.jpg",
          duration: "Juillet 2020 - Decembre 2020",
          location: "Dakar, Sénégal",
          description:
            "Collaboration avec l'ex directeur de l'IPM de la caisse de sécurité sociale dans le cadre d'un projet de mise en place d'une plateforme web de gestion des prises en charge maladie pour lutter contre les fraudes .",
          color: "#181717",
        },{
          title: "Developpeur Full STACK",
          company: "Medicom Group",
          company_url: "#",
          logo_path: "medicom.png",
          duration: "2020 - En cours",
          location: "Dakar, Sénégal",
          description:
            "je travaille en tant que consultant developpeur full stack pour medicom group dans le cadre de developpement d'application dans le domaine de la santé",
          color: "#181717",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mes projets utilisent une grande variété d'outils technologiques de pointe.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez Moi",
    profile_image_path: "oumar1.png",
    description:
      "Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://ashutoshhathidara.wordpress.com",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "adresse Mail",
    subtitle:
      "elhadjimbengueo@gmail.com"
  },
  phoneSection: {
    title: "Numero de Téléphone",
    subtitle: "06 42 80 85 80",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
