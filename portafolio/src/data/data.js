import tag from "../icons/code_black_24dp.svg";
import person from "../icons/manage_accounts_black_24dp.svg";
import speed from "../icons/speed_black_24dp.svg"
import shoppingSystem from "../img/shopping-system.webp";
import accountsReceivable from "../img/cuentas-cobrar.webp";
import adminPage from "../img/admin-page.webp";
import homeCustomer from "../img/home-customer.webp";
import hboRedesign from "../img/hbo-redesign.webp";
import selfHelpBlog from "../img/self-help-blog.webp";
import cajaUnapec from "../img/caja-unapec.webp";
import crudAsService from "../img/crud-as-service.webp";
import mibancoPresta from "../img/mibanco-presta.webp";
import xmlReading from "../img/xml-reading.webp";
import xmlWriting from "../img/xml-writing.webp";
import olapCubes from "../img/olap-cubes.webp";
import htmlicon from "../icons/integration_instructions_black_24dp.svg";
import cssicon from "../icons/style_black_24dp.svg";
import javascripticon from "../icons/smart_button_black_24dp.svg";
import wordpressicon from "../icons/web_black_24dp.svg";
import sqlicon from "../icons/dns_black_24dp.svg";
import figmaicon from "../icons/account_tree_black_24dp.svg";
import dotneticon from "../icons/application-cog.svg";
import javaicon from "../icons/application-braces.svg";

export const services =
    [
        {
            title: "HTML/CSS",
            icon: tag,
            iconAltText: "tag",
            subtitle: "User focused",
            text: "A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website."
        },
        {
            title: "Application UI",
            icon: person,
            iconAltText: "person",
            subtitle: "Responsive and fast",
            text: "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible."
        },
        {
            title: "Performance",
            icon: speed,
            iconAltText: "speed",
            subtitle: "Effective process",
            text: "Having a fast website is key to keeping people around converts them into customers. There are a myriad of techniques involved in making a fast."
        }
    ]

export const projects =
    [
        {
            url: "https://compras-aca62.web.app",
            title: "Shopping system",
            description: "ASP.NET Core, ReactJS",
            image: shoppingSystem,
            altImage: "shoppingSystem"
        },
        {
            url: "https://bsite.net/carlos4775/",
            title: "Accounts receivable",
            description: "ASP.NET Framework MVC",
            image: accountsReceivable,
            altImage: "accountsReceivable"
        },
        {
            url: "https://admin-page-ae63f.web.app/",
            title: "Administrator page",
            description: "ReactJS, Twin macro, SC",
            image: adminPage,
            altImage: "adminPage"
        },
        {
            url: "https://addresses-e3ee7.web.app/",
            title: "Home customer",
            description: "ReactJS, JSON Server",
            image: homeCustomer,
            altImage: "homeCustomer"
        },
        {
            url: "https://hbo-redesign.web.app/",
            title: "HBO redesign",
            description: "ASP.NET Core, ReactJS, JWT",
            image: hboRedesign,
            altImage: "hboRedesign"
        },

        {
            url: "https://postalvida.wordpress.com/",
            title: "Self help blog",
            description: "Wordpress",
            image: selfHelpBlog,
            altImage: "selfHelpBlog"
        },
        {
            url: "https://github.com/Carlos4775/caja-unapec",
            title: "Caja UNAPEC",
            description: ".NET Framework",
            image: cajaUnapec,
            altImage: "cajaUnapec"
        },
        {
            url: "https://github.com/Carlos4775/servicio-crud-java",
            title: "CRUD as a service",
            description: "Java Web",
            image: crudAsService,
            altImage: "crudAsService"
        },

        {
            url: "https://github.com/Carlos4775/mi-banco-presta",
            title: "Mibanco Presta",
            description: "Java Web",
            image: mibancoPresta,
            altImage: "mibancoPresta"
        },
        {
            url: "https://github.com/Carlos4775/lectura-xml-java",
            title: "XML Reading",
            description: "Java web",
            image: xmlReading,
            altImage: "xmlReading"
        },
        {
            url: "https://github.com/Carlos4775/escritura-xml-java",
            title: "XML Writing",
            description: "Java Web",
            image: xmlWriting,
            altImage: "xmlWriting"
        },
        {
            url: "https://github.com/Carlos4775/Practice6Cubes",
            title: "OLAP cubes",
            description: ".NET SSAS",
            image: olapCubes,
            altImage: "olapCubes"
        },
    ]


export const experiences =
    [
        {
            position: "Visual Programmer",
            roles: ["Playing a crucial role in delivering innovative and secure banking solutions to our customers. Collaborating with cross-functional teams, I participate in the design, development, and maintenance of both frontend and backend applications."],
            yearFrom: "2023",
            yearTo: "Present",
            companyName: "BHD Bank",
            tecnologies: [".NET Framework", ".NET Core", ".NET 6", "Angular", "Vue JS", "SQL Server", "Oracle", "IPC", "Web services"]
        },
        {
            position: "Intermediate Visual Developer",
            roles: ["Building custom applications tailored exclusively for the bank's dedicated workforce. My role involves crafting end-to-end solutions, starting from conceptualization to the final deployment of applications that enhance productivity and streamline operations for the bank's employees.", " Developing internal applications interconnected with different Database contexts, CRM, Web Services (JCE, DGII), Auditing, Reporting and Role management.", "Developing mass email services and Regulatory Reporting for the Superintendency of Banks (SIB).", "Built application with 6K users (employees) from scratch."],
            yearFrom: "2021",
            yearTo: "2023",
            companyName: "FL Betances & Asociados",
            tecnologies: [".NET Framework", ".NET Core", ".NET 6", "Angular", "Vue JS", "SQL Server", "Oracle", "IPC", "Web services"]
        },
        {
            position: "Frontend Developer",
            roles: ["Designing and developing the website of a foundation in Belgium, Guali, for fundraising in the border area of the Dominican Republic.", "Designing and developing modules for the Golfview page, a system to manage tournaments, view courses, gallery and other information to DMC company.", "Designing the page view for conforpra, a radiological protection and consulting company."],
            yearFrom: "2020",
            yearTo: "2021",
            companyName: "Helx",
            tecnologies: ["React", "Tailwind", "Twin Macro", "Styled Components", "TypeScript", "MongoDB", "Material UI", "Figma"]
        }
    ]

export const academicHistory =
    [
        {
            academicDegree: "IT Technician",
            institute: "María Inmaculada School"
        },
        {
            academicDegree: "Software Engineering",
            institute: "APEC University"
        }
    ]

export const abilities =
    [
        {
            icon: htmlicon,
            iconAltText: "Html",
            ability: "HTML",
        },
        {
            icon: cssicon,
            iconAltText: "Css",
            ability: "CSS",
        },
        {
            icon: javascripticon,
            iconAltText: "JavaScript",
            ability: "JavaScript"
        },
        {
            icon: dotneticon,
            iconAltText: ".Net Framework / Core",
            ability: ".Net Framework / Core"
        },
        {
            icon: wordpressicon,
            iconAltText: "WordPress",
            ability: "WordPress",
        },
        {
            icon: sqlicon,
            iconAltText: "SQL Server",
            ability: "SQL Server",
        },
        {
            icon: javaicon,
            iconAltText: "Java Web / JSF",
            ability: "Java Web / JSF"
        },
        {
            icon: figmaicon,
            iconAltText: "Web Design",
            ability: "Web Design"
        }
    ]
