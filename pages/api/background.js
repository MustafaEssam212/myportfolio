const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'General Law',
                degree: 'Bachelor of Laws',
                detail: "A Bachelor of Laws is an undergraduate law degree offered in most common law countries as the primary law degree and serves as the first professional qualification for legal practitioners.",
                year: '2018-2022'
            },

        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'GGEG',
                role: 'Full-Stack Developer',
                url: 'https://ggegy.com',
                desc: 'As a Full-Stack Developer, I use NEXT JS, MONGO DB, Express js, Framer Motion, RESTFul API, to build a serveless web application.',
                year: '09/2022 - Present',
                location: '6 of October, Egypt'
            },
            {
                id: 2,
                title: 'MALEK Co.',
                role: 'Full-Stack Developer',
                url: '#',
                desc: 'As a Full-Stack Developer, I use NEXT JS, MONGO DB, Express js, Framer Motion, RESTFul API, to build a serveless web application.',
                year: '04/2022 - 09/2022',
                location: '6 of October, Egypt'
            },
            {
                id: 3,
                title: 'United Egypt Agency',
                role: 'Front-End Developer',
                url: '#',
                desc: "I used React JS, and CSS to build user interface.",
                year: '08/2021 - 03/2022',
                location: 'Nasr City, Egypt'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
