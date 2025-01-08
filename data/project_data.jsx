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
    {
        number: "02",
        category: "frontend",
        title: "Project 02",
        description: "Wanted to refresh my HTML, CSS and JavaScript skills, so I made a simple Calculator.",
        stack: [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"},],
        image: "/assets/Calculator/pages/calc_page.png",
        live: "Calculator",
        github: "https://github.com/nikopeiris/Calculator",
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
        link: "",
    },
    {
        number: "02",
        category: "frontend project",
        title: "Calculator",
        description: "I wanted to refresh my HTML, CSS, and JavaScript skills, so I decided to create a simple calculator. This project allowed me to refresh my front-end development skills. I used HTML for the structure, CSS for styling, and JavaScript for the functionality. The calculator can perform basic arithmetic operations, such as addition, subtraction, multiplication, and division.",
        stack: [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"},],
        content: [
            {
                title: "Calculator Page",
                body: `This is the calculator page, where users can perform basic arithmetic operations. The calculator features a display screen at the top, showing the current input and the result of the calculation. Below the display screen, there are buttons for numbers 0-9, as well as buttons for addition, subtraction, multiplication, division, decimal, and the equals sign. Users can input numbers by clicking on the buttons.`,
                image: "/assets/Calculator/pages/calc_page.png",
            },
            {
                title: "Calculator Page(HTML code)",
                body: `The HTML structure for this page includes a main <div> with a class wrapper which creates the white foreground where the buttons are shown.
                
                within the wrapper, there is a <section> with a class screen that displays the current and the previous answer.
                
                there is also a sencond <section> with a class calc-buttons. this is where the buttons are placed. im using <button> element for the buttons that the user can click. each row of buttons are on its own parent <div> with a class of calc-button-row.`,
                image: "/assets/Calculator/code/html_code.png",
            },
            {
                title: "CSS Screen(Code)",
                body: `For the screen css class I used 
                backdrop-filter to apply a blur effect
                background is set to rgba(255, 255, 255, 0.75), the 0.75 makes the colour less opaque
                colour is set to #232323, which is a dark grey
                border is set to 1px and solid
                border-radius is set to 16px rounded corners
                font-size is set to 30px which is big enough to be easily read
                height of the screen is set to 65px`,
                image: "/assets/Calculator/code/css_screen_code.png",
            },
            {
                title: "CSS Body(code)",
                body: `For the body css class
                The background is a linear-gradient with a 225 angle. the gradient starts with a red and end with a neon green like colour. this makes the background look better than just one solid colour.
                diplay is set to flex, which makes the content of the body flexable
                justify-content is set to center, which centers the content horizontally
                align-items is set to center, which centers the content vertically
                font-family is set to "Dosis", sans-serif, which is a google font`,
                image: "/assets/Calculator/code/css_body_code.png",
            },
            {
                title: "CSS Button(code)",
                body: `for the button css class
                backdrop-filter is used to apply a blur effect
                background is set to rgba(255, 255, 255, 0.75), the 0.75 makes the colour less opaque.
                border is set to 1px and solid
                border-radius is set 16px round corners
                colour is set to #232323, which is a dark grey
                
                last-child for calc-button has the same properties except for the colour of the font and background.
                background for last child is set to #d72880 which is a pinkish colour
                and font colour is set to #fff which is white`,
                image: "/assets/Calculator/code/css_button_code.png",
            },
            {
                title: "JavaScript init code",
                body: `This is the init function which checks if a click event is triggered on any element with a class name of calc-buttons. and when a click is triggered the init function calls buttonClick function with the text of the button as an input.`,
                image: "/assets/Calculator/code/main_init.png",
            },
            {
                title: "buttonClick function",
                body: `i have some varriables set up called,
                runningTotal: which keeps a track of the previous calculations
                buffer: the current text seen on the screen
                previousOperator: the operator clicked on by the user
                pre_ans: previous answer to display
                decimal: to check whether a decimal is present or Not
                list_operators: list of operators.
                
                i use document.querySelector to find the first element with the given CSS classes which can be used to change the inner text of those elements.
                
                in the buttonClick function an if statement is used to check whether if the passed in value is a not a number, in which case it calls handlesymbol function
                else if its a number it calls handlenumber function.
                
                then current_ans is set to buffer, previous_ans is set to pre_ans and if there is a scroll bar it will be scrolled to the right.`,
                image: "/assets/Calculator/code/js_buttonclick_code.png",
            },
            {
                title: "Handlesymbol function",
                body: `for this function i used a switch statement which is similar to a if statement but it executes a block of code based on different cases.
                when the symbol is C it will clear out all the varriables
                
                when the symbol is "=" it will call flush operations where it does the calculations, it also check whether if there is a operator present to do the calculation with, if there isnt it will not do anything.
                then pre_ans becomes buffer + "=" which will display the ans =
                buffer becomes runningTotal and runningTotal becomes 0
                
                when the symbol is "←" it removes a character/ number from the buffer one at a time.
                
                when "+, −, ×, ÷" any of these symbol are clicked on it will call handlMath with the symbol passed as an input to that function.`,
                image: "/assets/Calculator/code/js_handlesymbol_code.png",
            },
            {
                title: "handleMath function",
                body: `The handleMath function turns the buffer which is a string into a number using parseFloat then makes that number equal to the current running total of the runningtotal is 0, if not it calls the flushOperations function.
                
                then it makes the previousOperator variable equals to the symbol passed when handleMath was called.
                pre_ans gets equalled to the current runningTotal + the symbol passed in so it might look like eg: 1234+
                then buffer is resetted back to 0`,
                image: "/assets/Calculator/code/js_handlemath_code.png",
            },
            {
                title: "flushOperation function",
                body: `in the flushOperation function it checks if the previousOperator is +, -, ×, ÷. and does the logic to carry out the calculations
                im using if statements to check for each operations since the logic is different for each case.`,
                image: "/assets/Calculator/code/js_calculations_code.png",
            },
            {
                title: "handlenumber function",
                body: `this is the function where the number are added to the buffer when the buttons are clicked.
                if the the pre_ans is not empty and the last character is a operator then the number clicked is added towards the calculations. 
                else if the buffer is 0 and there is nor pre_ans buffer is equals to the numberstring which is a inout passed in to the handlenumber function when it is called.
                else if the buffer is not 0 and the pre_ans is still empty then the numberstring is appended to the current buffer.`,
                image: "/assets/Calculator/code/js_handlenumber_code.png",
            },
            {
                title: "handlenegative function",
                body: `this function makes the current buffer into a negative number. if the buffer currently isnt 0 and its a positive number, the buffer turns into a negative if the number is already negative the buffer gets turned into a positive.`,
                image: "/assets/Calculator/code/js_handlenegative_code.png"
            }
        ],
        github: "https://github.com/nikopeiris/Calculator",
        live: "Calculator",
        link: "https://calculator-six-rho-64.vercel.app/",
    },
];

export {
    project_overview,
    project_detailed,
};