const project_overview = [
    {
        number: "01",
        category: "frontend",
        title: "Project 01",
        description: "The making of my Portfolio website using Next.js, Tailwaind CSS and framer-motion.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"},],
        image: "/assets/project_img/home_page.png",
        live: "portfolio",
        github: "https://github.com/nikopeiris/portfolio_website",
    },
];

const project_detailed = [
    {
        number: "01",
        category: "frontend project",
        title: "Portfolio Website",
        description: "I needed a place where people could find out more about myself, so what better way then to make a portfolio website. I have had some experince with HTML and CSS before but I wanted to learn something new. So i decided to make my portfolio website using Next.js and Tailwind CSS. I also wanted the site to have transition animations and for that i used framer-motion.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"},],
        content: [
            {
                title: "home page",
                body: `One of the most important things in website is the colour palette. this is important because by choosing the right colours you can create a visually appealing, accessible and a user-friendly site. so i decided to go with black as the background and red and white as foreground for texts, buttons etc.\n\nMy Home page consists of a navigation bar at the top with the main/important pages listed. in the body i wanted to include a short description about me, nothing too big. there is also a button to download my cv and some other buttons that redirect the user to my github and linkedin\n
                on the right hand side there is a circle that rotates, thats where i wanted to include a picture of my self to introduce me to the people that visit my site.`,
                image: "/assets/project_img/home_page.png",
            },
            {
                title: "home page",
                body: "text here aeth rtfdhj fryhj stryjk stryjsrf jsfgj fytrjy dtyjt dyjktdy jdtyj dtyj tdyjtdyj tdyjtdyjtd jytdyj dtyj",
                image: "/assets/project_img/home_page.png",
            },
            {
                title: "home page",
                body: "text here aeth rtfdhj fryhj stryjk stryjsrf jsfgj fytrjy dtyjt dyjktdy jdtyj dtyj tdyjtdyj tdyjtdyjtd jytdyj dtyj",
                image: "/assets/project_img/home_page.png",
            },
        ],
        github: "https://github.com/nikopeiris/portfolio_website",
        live: "portfolio",
    },
];

export {
    project_overview,
    project_detailed,
};