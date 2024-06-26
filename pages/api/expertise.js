const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'On Page SEO',
        desc: "On-page SEO refers to optimizing individual web pages to rank higher and earn more relevant traffic in search engines. It involves various techniques, such as optimizing content, meta tags, and images, to improve a website's search engine rankings and visibility.",
    },

    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },

]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
