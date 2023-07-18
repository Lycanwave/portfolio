import linkedin from "./assets/linkedin.png";
import linkedin_t from "./assets/linkedin_transparent.svg";
import leetcode from "./assets/leetcode_dark.png";
import leetcode_light from "./assets/leetcode_t.svg";
import mail from "./assets/mail_t.png";
import github from "./assets/github-logo.png";
import gfg from "./assets/geeksforgeeks.svg";
import code from "./assets/code.png";

export const WorkExperience = [
    {
        title: "Software Developer Intern",
        companyName: "Urban Match",
        description: [
            [
                ["Developed and Improved the"],
                ["#UI/UX"],
                [" of the Application"],
            ],
            [
                ["Worked with"],
                ["#REST APIs"],
                ["to retrieve and display data from the database."],
            ],
            [
                ["Implemented the "],
                ["#Payment Gateway"],
                ["system using"],
                ["#PayU Api."],
            ],
            [
                ["Improved"],
                ["#Application performance"],
                ["and speed through optimization techniques by"],
                ["#15%"],
            ],
        ],

        duration: "FEB-MAR 2023",
    },
];

export const Projectsdata = [
    {
        name: "Type Speed Checker",
        frameWork: ["ReactJs"],
        description: [
            [
                [
                    "Developed a typing testing application using React.js that provided real-time feedback on users",
                ],
                ["#typing speed, accuracy, and progress."],
            ],
            [
                ["Integrated third-party libraries"],
                ["#React Hook "],
                ["for"],
                ["#efficient"],
                [
                    "form handling and validation within the typing testing application.",
                ],
            ],
        ],
        sourceCode: "https://github.com/Lycanwave/Typing-Speed-Check",

        deployedLink: "https://main--bejewelled-dango-b9fe8e.netlify.app/",

        sourceCodeLogo: code,
        duration: "MAY-JUN 2023",
    },
    {
        name: "Ecommerce Backend",
        frameWork: ["NodeJs", "Express", "MongoDB"],
        description: [
            [
                ["Developed and maintained the"],
                ["#backend architecture"],
                ["for an ecommerce platform using"],
                ["#Node.js, Express.js, and MongoDB."],
            ],
            [
                ["Implemented"],
                ["#RESTful APIs"],
                [
                    "for handling product catalog, user management, shopping cart, and order processing.",
                ],
            ],
            [
                ["Implemented user"],
                ["#authentication and"],
                ["#authorization"],
                ["using"],
                ["#JWT."],
            ],
        ],
        sourceCode:
            "https://github.com/Lycanwave/Ecommerce-backend/tree/main/ECOMMERCE",
        sourceCodeLogo: code,
        duration: "MAY-JUN 2023",
    },
    {
        name: "News Web App",
        frameWork: ["React.js", "Rest Api"],
        description: [
            [
                ["Designed and developed a clean and modern website using"],
                ["#HTML"],
                ["#CSS"],
                ["and"],
                ["#JavaScript."],
            ],
            [["Worked with Rest Api to fetch the data from newsapi.org."]],
            [
                [
                    "Utilized responsive design to ensure compatibility across all devices.",
                ],
            ],
            [["Splitted the News item Category wise using React Router."]],
        ],
        sourceCode: "https://github.com/Lycanwave/NewsApp",
        sourceCodeLogo: code,
        duration: "FEB-MAR 2023",
    },
    {
        name: "To-Do App",
        frameWork: ["Flutter", "Firebase", "Git"],
        description: [
            [
                ["A"],
                ["#CRUD application"],
                ["exposed using a"],
                ["#RESTful API"],
                ["made with Firebase."],
            ],
            [["Implemented"], ["#User Authentication"], ["using Firebase."]],
            [
                ["Exposed"],
                ["#POST, GET, PATCH"],
                ["and"],
                ["#DELETE HTTP"],
                ["methods using"],
                ["#FireStore."],
            ],
        ],
        sourceCode: "https://github.com/Lycanwave/To-Do-App",
        sourceCodeLogo: code,
        duration: "SEP-OCT 2022",
    },

    {
        name: "Covid Alert",
        frameWork: ["Flutter", "RestApi", "Git"],
        description: [
            [
                ["Designed and Implemented an"],
                ["#application"],
                ["to detect the"],
                ["#covid cases"],
                ["#recovories"],
                ["and"],
                ["#death"],
                ["in"],
                ["180+ countries"],
                [" worldwide using"],
                ["#REST API."],
            ],
            [
                ["Established"],
                ["#Pie Chart"],
                ["which shows the"],
                ["#percentage"],
                ["of Active cases, Deaths cases and Total Cases."],
            ],
            [
                ["Added the"],
                ["#searching feature"],
                ["to find"],
                ["#any country"],
                [" from the List of"],
                ["#180+"],
                ["Countries."],
            ],
        ],
        sourceCode: "https://github.com/Lycanwave/covid_alert",
        sourceCodeLogo: code,
        duration: "SEP-OCT 2022",
    },
];

export const SocialMedia = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rohit-kumar-562b821a2/",
        logo: linkedin_t,
        logo_width: "30px",
        logo_height: "30px",
        marginLeft: "0px",
    },
    {
        name: "Leetcode",
        link: "https://leetcode.com/user0984U/",
        logo: leetcode_light,
        logo_width: "24px",
        logo_height: "24px",
        marginLeft: "0px",
    },
    {
        name: "GFG",
        link: "https://auth.geeksforgeeks.org/user/rohitkumar07feb",
        logo: gfg,
        logo_width: "36px",
        logo_height: "36px",
        marginLeft: "8px",
    },
    {
        name: "Github",
        link: "https://github.com/Lycanwave",
        logo: github,
        logo_width: "25px",
        logo_height: "25px",
        marginLeft: "26px",
    },
    {
        name: "E-mail",
        link: "mailto:rohit.kumar07febofficial@gmail.com",
        logo: mail,
        logo_width: "26px",
        logo_height: "26px",
        marginLeft: "32px",
    },
];
