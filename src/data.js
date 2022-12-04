const jobs = [
    //this is the template for jobs
    // {
    //     id: 1,
    //     title: "",
    //     budget: "",
    //     description: "",
    //     skills: [],
    //     client: {
    //         imgUrl: "",
    //         country: "Canada",
    //         location: "",
    //         rating: 4.2,
    //         reviews: 7,
    //         dateJoined: "",
    //         isIdentityVerified: false,
    //         isPaymentVerified: false,
    //         isDepositMade: false,
    //         isEmailVerified: false,
    //         isPhoneVerified: false,
    //         isProfileCompleted: false
    //     },
    //     tags: [],
    //     isBookmarked: false,
    //   price: 100,
    //   bids : 0,
    // },
    {
        id: 3,
        title: "Finalising Client Content And Creating a advanced woo-commerce catalogue with product descriptions shown in list view",
        budget: "$15.00 – 25.00 CAD /hr",
        description: "we are looking for someone that can finalise a upcoming project ensuring all client content is included in the site where required and to also turn the woo-commerce catalogue into a informative single product style list view",
        skills: ["Website Design", "WordPress", "eCommerce", "HTML"],
        client: {
            imgUrl: "https://www.freelancer.com/img/unknown.png",
            country: "Canada",
            location: "Toronto",
            rating: 4.2,
            reviews: 7,
            dateJoined: "Jul 15, 2022",
            isIdentityVerified: true,
            isPaymentVerified: false,
            isDepositMade: false,
            isEmailVerified: true,
            isPhoneVerified: false,
            isProfileCompleted: true
        },
        tags: ["IP AGREEMENT", "NDA"],
        isBookmarked: false,
        price: 18,
        bids: 9,
    },
    {
        id: 4,
        title: "Build website and client application (windows service) that feeds data into website securely",
        budget: "$1500 – 5000 USD",
        description: `Website that will be used by IT Techs to monitor their client's services.

        The website data will be stored in an encrypted sql database. Users will sign up and immediately setup Multi Factor Authentication using an authenticator app. Once logged in the user can add users that can access their information as well. When a user is first setup, they are setup as a trial user and they can login and perform any action for 30 days. Once the 30 days is up, they will be redirected to the payment screen to start a membership. THere will be only one membership and price. THe user is either in good standing or not. If they are, they have access to the system. The system will connect to Authorize.net to create a recurring subscription. The systme will deactivate a user when their subscription expires and their recurring billing does not work any more. The user should also have the ability to stop their service at any time and it will suspend their recurring billing on the next month.

        The website will have a main dashboard. The Tech will be able to create new clients on the system. Each client will have their own dashboard and there will be a page that shows a main dashboard of alerts for all clients.

        The data for the website will be stored on a SQL Server database in the cloud that's only accessible from the Web Server and API Web Service Server.

        A windows service will be created and installed on each client network. That service will be configured by the user to gather information on the client's network and other monitors. The service will read from a text file that will have an encrypted url and credentials for connecting to the user's api. The user will then configure all the monitors on the web server. That information will be stored encrypted on teh database server and deployed to the local windows service at each client.

        Please see documents for additional details regarding the monitors that this site and local agent will store.

        Please do not bid unless you're able to do ongoing work on this as it will be maintained and updated regularly.`,
        skills: ["Website Design", "Graphic Design", "MySQL", "Software Development"],
        client: {
            imgUrl: "",
            country: "France",
            location: "Toulouse",
            rating: 4.5,
            reviews: 1,
            dateJoined: "Jul 15, 2022",
            isIdentityVerified: true,
            isPaymentVerified: false,
            isDepositMade: false,
            isEmailVerified: true,
            isPhoneVerified: true,
            isProfileCompleted: false
        },
        tags: ["SEALED", "PRIVATE", "RECRUITER"],
        isBookmarked: false,
        price: 3325,
        bids: 32,
    },
    {
        id: 5,
        title: "old german handwriting reading",
        budget: "$20.00 – 45.00 EUR /hr",
        description: `Looking for someone able to read old german handwriting on letters and postcards and re-write them in modern german.
I have a number of letters and postcards from my family and am unable to read them.`,
        skills: ["Translation", "Proofreading", "German Translator", "English (UK) Translator"],
        client: {
            imgUrl: "",
            country: "United kingdom",
            location: "Birmingham",
            rating: 5,
            reviews: 2,
            dateJoined: "Jul 15, 2022",
            isIdentityVerified: true,
            isPaymentVerified: true,
            isDepositMade: true,
            isEmailVerified: true,
            isPhoneVerified: true,
            isProfileCompleted: true
        },
        tags: [],
        isBookmarked: false,
        price: 20,
        bids: 3,
    },
    {
        id: 7,
        title: "Professional Networking App",
        budget: "$200 – 1500 USD",
        description: "Looking to build an App for people looking to network. I think there is merit in the old school way of using referrals of people you trust and I would like to see who trusts who in different industries. Id like to be able to create a space where its not about you CV or Resume but about who you've done work for and who trusts you. I feel Linked In is clunky and too black and white with a lot of words that could be written to sound pleasing. I envision a platform thats old school coffee shopish where I can introduce you to a professional i trust and you can start your relationship with them.",
        skills: ["Website Design", "Mobile App Development", "Android", "Software Architecture"],
        client: {
            imgUrl: "",
            country: "United States",
            location: "TNew York",
            rating: 2.8,
            reviews: 12,
            dateJoined: "Jul 15, 2022",
            isIdentityVerified: false,
            isPaymentVerified: false,
            isDepositMade: false,
            isEmailVerified: false,
            isPhoneVerified: false,
            isProfileCompleted: false
        },
        tags: ["IP AGREEMENT", "NDA", "PRIVATE"],
        isBookmarked: false,
        price: 975,
        bids: 17,
    },
]

export { jobs };