const project_overview = [
    {
        number: "01",
        category: "frontend",
        title: "Project 01",
        description: "The Process of making my Portfolio website using Next.js, Tailwaind CSS and framer-motion.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"},],
        image: "/assets/portfolio_website/pages/home_page.png",
        live: "portfolio",
        github: "https://github.com/nikopeiris/portfolio_website",
    },
];

const project_detailed = [
    {
        number: "01",
        category: "frontend project",
        title: "Portfolio Website",
        description: "I wanted to create a platform where people could learn more about me, and what better way to achieve that than by building a portfolio website? While I had prior experience with HTML and CSS, I saw this as an opportunity to expand my skills and explore new technologies. I chose to develop my portfolio using Next.js and Tailwind CSS, which allowed me to create a modern, responsive design. Additionally, I incorporated smooth transition animations using Framer Motion to enhance the user experience.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"},],
        content: [
            {
                title: "home page",
                body: `One of the most important aspects of a website is the color palette. This is crucial because, by selecting the right colors, you can create a visually appealing, accessible, and user-friendly site. For my website, I chose black as the background color, with red and white as the primary colors for text, buttons, and other elements.\n\nMy homepage features a navigation bar at the top, listing the most important pages for easy access. In the main section, I included a brief description about myself—nothing too lengthy. There is also a button to download my CV, along with additional buttons that link to my GitHub and LinkedIn profiles.\n\nOn the right-hand side of the page, there is an animated circle. This is where I included a picture of myself to create a more personal introduction for visitors to my site.`,
                image: "/assets/portfolio_website/pages/home_page.png",
            },
            {
                title: "home page(code)",
                body: `This is the layout of the home page in VS Code. The main <div> of the home page includes a mt-[110px] class, which is used to prevent overlapping with the navigation bar at the top when the site is initially compiled.\n
                    The primary text on the home page is wrapped in an <h1> tag, giving it header-specific attributes.\n
                    The overview paragraph, located beneath my name, has a text color of white/80, which adds a slight transparency to the text. For instance, if the value were lower than 80, the text would appear more transparent.\n
                    The download button is implemented using a button component from the ShadCN component library. Additionally, the <FiDownload /> icon, imported from react-icons, is used to display the download symbol.`,
                image: "/assets/portfolio_website/code/home_code.png",
            },
            {
                title: "Header",
                body: `This is the header of the website. On the top left is my name, which also functions as a home button.\n\nOn the top right, there are buttons for the Home page, Resume page, Projects page, Contact page, and a Download CV button.`,
                image: "/assets/portfolio_website/pages/header.png",
            },
            {
                title: "Header(code)",
                body: `The header component features a <Link/> element with the text 'Shenol,' which redirects users to the home page.\nIt is styled with a CSS class named 'backdrop-blur-md,' creating a blur effect on the content beneath the header.\n\nAdditionally, the header includes the navigation component for desktop users and a dedicated mobile navigation component for an optimized experience on smaller screens.`,
                image: "/assets/portfolio_website/code/header_code.png",
            },
            {
                title: "navigation(code)",
                body: `For the navigation tab, I created a list of primary links that will appear in the header. I utilized the .map() function, which provides an index for each item in the list, enabling me to dynamically generate a <Link /> element for each link.\n\nAdditionally, I implemented usePathname from next/navigation to dynamically update the pathname within each <Link /> element, ensuring the navigation reflects the current route.`,
                image: "/assets/portfolio_website/code/nav_code.png",
            },
            {
                title: "mobile navigation(code)",
                body: `For mobile navigation, I implemented the <Sheet /> component from ShadCN, which provides a convenient way to create a popup window for navigation links.\n\nFrom there, the functionality is similar to the standard navigation setup. I use the .map() function to dynamically generate a <Link /> element for each item in the navigation list.\n\nAdditionally, I utilized the usePathname hook from next/navigation to dynamically update the pathname, just as I did in the primary navigation component.`,
                image: "/assets/portfolio_website/code/mobile_nav_code.png",
            },
            {
                title: "resume page",
                body: `The Resume page is divided into three sections:\n\n1: About Me (Detailed information about myself, including where I am from and other background details.)\n2: Education (An overview of my current and past educational institutions.)\n3: Skills (A list of applications and programming languages I have experience working with.)`,
                image: "/assets/portfolio_website/pages/resume_page.png",
            },
            {
                title: "resume page(code)",
                body: `For the resume section, I used the <Tabs></Tabs> component imported from ShadCN. This component allows me to organize the information into different sections, displaying each only when the user clicks on the respective tab.

                    Additionally, I implemented the <ScrollArea> component, which provides a scrollable area within the selected tab, enhancing the user experience.

                    In the skills section of the resume page, I used SVGs for the icons. SVGs, or Scalable Vector Graphics, are ideal because they do not pixelate like traditional PNG images. I also applied a transition effect to the SVGs so that they scale up by 20% when hovered over, adding an interactive touch.

                    Lastly, there is a "Download CV" button that is designed to be displayed only on smaller screens, such as mobile devices, ensuring the interface remains clean and user-friendly on all screen sizes.`,
                image: "/assets/portfolio_website/code/resume_code.png",
            },
            {
                title: "Projects Page",
                body: `This is the Projects page, where you can view all of my completed projects.

                    Each project displays a number, followed by the project title and a brief description or overview. Below the title, you'll find a list of the languages and applications used to build the project, highlighted in red text.

                    On the right side of the page, there’s an image showcasing the project, and at the bottom, you'll find links to the project's GitHub repository and a link to the page with more detailed information about the project.`,
                image: "/assets/portfolio_website/pages/projects_page.png",
            },
            {
                title: "Projects Page(Code)",
                body: `To store the information for different projects, I created a list called "projects" with the following attributes:

                    1 title: The project title,
                    2 number: The project number,
                    3 description: A short description of the project,
                    4 stack: The programming languages used,
                    5 github: The link to the GitHub repository,
                    6 live: The link to the live project page,
                    7 image: The preview image for the project.

                    To display each project, I used the <Swiper /> and <SwiperSlide /> components from swiper/react, which allow users to swipe through available projects either by mouse or touch on mobile devices. Alternatively, users can also use the side buttons to navigate through the projects.

                    For the project and GitHub icons, I used <BsArrowUpRight /> and <BsGithub />, and added a class to change the icon color to red (or the "accent" color) when the user hovers over it. These icons are placed inside a <Tooltip /> component imported from the ShadCN UI library. This component provides users with a brief description of where the button will lead.`,
                image: "/assets/portfolio_website/code/projects_code.png",
            },
            {
                title: "Contact Page",
                body: `I created the contact page to provide an easy way for people to reach out to me. The page includes a form where users can enter their name, email, phone number, and a message. There's also a button that allows users to send the message directly to me.

                    The layout and color scheme of the contact page are kept simple to help users focus on the form. The goal is to make the page visually clean and easy to navigate.`,
                image: "/assets/portfolio_website/pages/contact_page.png",
            },
            {
                title: "Contact Page(code)",
                body: `I created the contact form using a <form> element and employed <input> fields for the user to enter their name, email, phone number, and message.

                    One of the input fields was for the user's phone number, so I used .replace(/[^0-9+\-()\s]/g, "") to ensure that only numbers (0-9) and special characters are allowed.

                    Additionally, I added a <button> element to enable the user to submit the message. Once the button is clicked and all the required fields are completed, the message will be sent to me via backend code.`,
                image: "/assets/portfolio_website/code/contact_front_code.png",
            },
            {
                title: "Contact Page(backend code)",
                body: `This is the backend code for the contact page. When the "Send Message" button is clicked, it triggers a POST request to call this code. I am using the "emailjs-com" library to send the message to my email address. This library allows me to easily send the message content directly to me.

                    The emailjs.send() function is used to send the user's information. It requires four parameters:

                    1: Service ID
                    2: Template ID
                    3: Information (message data)
                    4: Public and/or private keys (depending on the settings)

                    If the message is sent successfully, the user will see a confirmation saying, "Message sent successfully." If the message fails to send, the user will see an error message: "Failed to send the message! Please try again later or contact me directly."`,
                image: "/assets/portfolio_website/code/contact_back_code.png",
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