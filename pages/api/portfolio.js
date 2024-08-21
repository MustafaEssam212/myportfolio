const portfolio = [

    {
        id: 0,
        projectName: "Netflix Clone",
        url: "https://netflix-opal-seven.vercel.app/",
        image: "projects/111.png",
        projectDetail: "Recreated the full Netflix web application, including both the UI and back-end authentication.",
        technologiesUsed: [
            {
                tech: "NEXT JS"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
        ]
    },

    {
        id: 0,
        projectName: "Rehab Clinic",
        url: "https://rehabeg.clinic/",
        image: "projects/22.png",
        projectDetail: "Developed a comprehensive medical application from scratch using Next.js, handling both front-end and backend development.",
        technologiesUsed: [
            {
                tech: "NEXT JS"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Socket.io"
            },
        ]
    },

    {
        id: 0,
        projectName: "GGEG",
        url: "https://ggegy.com/",
        image: "projects/1.png",
        projectDetail: "GGEG is a live solution for E-Sports tournaments in MENA.",
        technologiesUsed: [
            {
                tech: "NEXT JS"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Express JS"
            },
        ]
    },

    {
        id: 1,
        projectName: "JMM ERP",
        url: "#",
        image: "projects/erp.png",
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
        technologiesUsed: [
            {
                tech: "NEXT JS"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Express JS"
            },
        ]
    },

    {
        id: 2,
        projectName: "EagleSound",
        url: "https://github.com/MustafaEssam212/EagleSound",
        image: "projects/11.png",
        projectDetail: "I am noticed that soundcloud is not responsive .. so I worked on EagleSound which will be cloning of Responsive soundcloud and the user has all access to Register & Login & Follow Artists & Search on tracks & Upload Tracks.",
        technologiesUsed: [
            {
                tech: "React JS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Node JS"
            },
        ]
    },


    {
        id: 3,
        projectName: "Marvel Shoes",
        url: "https://github.com/MustafaEssam212/Marvel",
        image: "projects/3.png",
        projectDetail: "Marvel Shoes is an E-Commerce web application which has an administrative area which gives the Admin full access to add & edit & remove products, Chat system between Client and Admin, Changing order's status by Admin, Dynamic product review page and Possibility to submit comments by Client.",
        technologiesUsed: [
            {
                tech: "React JS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Node JS"
            },
        ]
    },


    {
        id: 4,
        projectName: "Articles hunter",
        url: "https://github.com/MustafaEssam212/Articles-hunter",
        image: "projects/2.png",
        projectDetail: "Articles hunter is a web application (React-Typescript) of articles which make the user has a chance to register, log in, publishing a new article, seeing his own articles, seeing all articles that already published.",
        technologiesUsed: [
            {
                tech: "React JS"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "CSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Node JS"
            },
        ]
    },


    {
        id: 5,
        projectName: "SnowFlake Social Media",
        url: "https://github.com/MustafaEssam212/SnowFlake-Social-Media-Website-MERN-Stack",
        image: "projects/4.png",
        projectDetail: "This is a full Social Media web application mix of Twitter & Facebook which gives options to user such as following the others, Publish Posts and Photos, Like Posts, Comment on Posts and Search about other accounts.",
        technologiesUsed: [
            {
                tech: "React JS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Node JS"
            },
        ]
    },


    {
        id: 6,
        projectName: "Youtube Clone",
        url: "https://github.com/MustafaEssam212/Youtube-Clone-Via-React",
        image: "projects/5.png",
        projectDetail: "This is a Youtube clone using React js",
        technologiesUsed: [
            {
                tech: "React JS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MONGO DB"
            },
            {
                tech: "Node JS"
            },
        ]
    },

]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
