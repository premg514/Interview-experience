const interviewExperiences = [
    {
        id: 1,
        company: "Google",
        rounds: "3 rounds | DS & Algo",
        candidate: "Anonymous",
        experienceDate: "Jan 2024",
        role: "Software Engineer",
        status: "SELECTED",
        details: {
            description: "Focused on data structures and algorithm problems with an emphasis on optimization and scalability.",
            questions: [
                "Explain the concept of a trie and implement a function to search a word in it.",
                "Design an algorithm to merge overlapping intervals.",
                "Optimize a given sorting algorithm for large datasets."
            ],
        },
    },
    {
        id: 2,
        company: "Amazon",
        rounds: "4 rounds | JS, React, and System Design",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Frontend Developer",
        status: "SELECTED",
        details: {
            description: "Covered JavaScript fundamentals, ReactJS concepts, and system design problems for scalable UIs.",
            questions: [
                "What are closures in JavaScript, and provide a practical example?",
                "How would you optimize a React application with multiple states?",
                "Design a dynamic dashboard with real-time updates using React."
            ],
        },
    },
    {
        id: 3,
        company: "Microsoft",
        rounds: "2 rounds | APIs and Microservices",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "Backend Developer",
        status: "REJECTED",
        details: {
            description: "Focused on creating scalable APIs and managing distributed systems.",
            questions: [
                "Implement token-based authentication for an API.",
                "Explain the CAP theorem in the context of microservices.",
                "How would you handle retries for failed API requests?"
            ],
        },
    },
    {
        id: 4,
        company: "Meta",
        rounds: "3 rounds | Python, SQL, and ML models",
        candidate: "Anonymous",
        experienceDate: "Jan 2024",
        role: "Data Scientist",
        status: "SELECTED",
        details: {
            description: "Explored Python scripting, SQL queries, and machine learning techniques.",
            questions: [
                "Write a Python function to calculate the F1 score of a model.",
                "Create an SQL query to find the second highest salary from a table.",
                "Discuss the pros and cons of using k-means clustering for an image segmentation task."
            ],
        },
    },
    {
        id: 5,
        company: "Apple",
        rounds: "3 rounds | CI/CD pipelines and AWS services",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "DevOps Engineer",
        status: "REJECTED",
        details: {
            description: "Emphasized building automated pipelines and leveraging cloud services for deployments.",
            questions: [
                "Design a CI/CD pipeline using Jenkins for a React application.",
                "What is the role of Infrastructure as Code in modern DevOps?",
                "How do you secure sensitive data in a cloud environment?"
            ],
        },
    },
    {
        id: 6,
        company: "Tesla",
        rounds: "2 rounds | Neural networks and deployment strategies",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "AI Engineer",
        status: "SELECTED",
        details: {
            description: "Focused on deep learning architectures and deploying AI models in production.",
            questions: [
                "Explain the difference between CNN and RNN.",
                "How would you handle data imbalance in training datasets?",
                "What are the steps to deploy a trained model in a Kubernetes cluster?"
            ],
        },
    },
    {
        id: 7,
        company: "Netflix",
        rounds: "3 rounds | Frontend and Backend Scalability",
        candidate: "Anonymous",
        experienceDate: "Jan 2024",
        role: "Full Stack Developer",
        status: "SELECTED",
        details: {
            description: "Focused on developing scalable and responsive full-stack applications.",
            questions: [
                "How do you optimize frontend performance for video streaming?",
                "Explain the benefits of server-side rendering for React applications.",
                "Design a microservice for user authentication with JWT."
            ],
        },
    },
    {
        id: 8,
        company: "Uber",
        rounds: "3 rounds | Scenario-based and Case Studies",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Product Manager",
        status: "SELECTED",
        details: {
            description: "Centered around product strategy and solving real-world case studies.",
            questions: [
                "Propose a strategy to improve driver retention rates.",
                "How would you prioritize features for a ride-sharing app?",
                "Discuss how you would handle a sudden server outage during peak hours."
            ],
        },
    },
    {
        id: 9,
        company: "Spotify",
        rounds: "2 rounds | Portfolio Review and Usability Testing",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "UX Designer",
        status: "SELECTED",
        details: {
            description: "Explored creative problem-solving and user-centered design principles.",
            questions: [
                "Redesign the search bar feature for better usability.",
                "How would you conduct a usability test for a new music discovery feature?",
                "Explain your approach to creating a color palette for accessibility."
            ],
        },
    },
    {
        id: 10,
        company: "Salesforce",
        rounds: "3 rounds | Cloud Architecture",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Cloud Engineer",
        status: "SELECTED",
        details: {
            description: "Focused on cloud infrastructure design and optimization for Salesforce services.",
            questions: [
                "Design a multi-region architecture for a global application.",
                "What are the advantages of serverless computing?",
                "How do you ensure high availability in a cloud environment?"
            ],
        },
    },
    {
        id: 11,
        company: "Intel",
        rounds: "4 rounds | Embedded Systems and C",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "Embedded Systems Engineer",
        status: "SELECTED",
        details: {
            description: "Emphasized low-level programming and real-time systems.",
            questions: [
                "Write a C program to implement a simple queue using arrays.",
                "Explain interrupt handling in embedded systems.",
                "Design a real-time system for sensor data processing."
            ],
        },
    },
    {
        id: 12,
        company: "Oracle",
        rounds: "3 rounds | SQL and DBMS",
        candidate: "Anonymous",
        experienceDate: "Jan 2024",
        role: "Database Administrator",
        status: "SELECTED",
        details: {
            description: "Covered advanced database management and query optimization.",
            questions: [
                "How would you normalize a database to the 3rd normal form?",
                "Optimize an SQL query for retrieving hierarchical data.",
                "Explain the concept of ACID in transactions."
            ],
        },
    },
    {
        id: 13,
        company: "Adobe",
        rounds: "3 rounds | Algorithms and Design",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Software Engineer",
        status: "SELECTED",
        details: {
            description: "Focused on algorithmic problem-solving and system design.",
            questions: [
                "How would you implement LRU Cache in JavaScript?",
                "Design a collaborative whiteboard application.",
                "What is your approach to writing scalable code for large systems?"
            ],
        },
    },
    {
        id: 14,
        company: "Green Apple Solutions Pvt Ltd",
        rounds: "3 rounds | 13 Coding Problems",
        candidate: "Anonymous",
        experienceDate: "Nov 2024",
        role: "Associate Software Engineer",
        status: "REJECTED",
        details: {
            description: "Focused entirely on solving multiple coding problems in a limited time.",
            questions: [
                "Find the longest substring without repeating characters.",
                "Sort an array using quick sort and explain the time complexity.",
                "Write a program to detect a cycle in a graph using DFS."
            ],
        },
    },
    {
        id: 15,
        company: "Flipkart",
        rounds: "3 rounds | Debugging and Manual Testing",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Quality Analyst",
        status: "SELECTED",
        details: {
            description: "Focused on identifying bugs and suggesting improvements in manual testing scenarios.",
            questions: [
                "How do you approach debugging a complex application?",
                "Explain the steps in creating a test case for a shopping cart feature.",
                "Describe how you would conduct regression testing for a major release."
            ],
        },
    },
    {
        id: 16,
        company: "LinkedIn",
        rounds: "2 rounds | Behavioral and Situational",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Technical Recruiter",
        status: "SELECTED",
        details: {
            description: "Covered interpersonal skills and technical recruitment strategies.",
            questions: [
                "How would you handle a candidate's counteroffer situation?",
                "What steps do you take to ensure a positive interview experience?",
                "Describe a situation where you successfully closed a critical hire."
            ],
        },
    },
    {
        id: 17,
        company: "Snapchat",
        rounds: "3 rounds | Android Optimization",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Android Developer",
        status: "SELECTED",
        details: {
            description: "Focused on optimizing Android applications for performance and resource management.",
            questions: [
                "How do you reduce memory leaks in Android applications?",
                "Optimize the loading time of images in a RecyclerView.",
                "What are the best practices for battery-efficient Android development?"
            ],
        },
    },
    {
        id: 18,
        company: "IBM",
        rounds: "3 rounds | Machine Learning Models",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "Research Scientist",
        status: "SELECTED",
        details: {
            description: "Explored building, training, and validating machine learning models.",
            questions: [
                "Explain the difference between supervised and unsupervised learning.",
                "How would you improve the accuracy of a classification model?",
                "Write Python code to implement a logistic regression model."
            ],
        },
    },
    {
        id: 19,
        company: "Samsung",
        rounds: "3 rounds | Kotlin and Android Development",
        candidate: "Anonymous",
        experienceDate: "Feb 2024",
        role: "Mobile Developer",
        status: "SELECTED",
        details: {
            description: "Covered advanced Android development using Kotlin and new Android APIs.",
            questions: [
                "What are the benefits of using Kotlin over Java for Android development?",
                "Design an Android app that fetches and displays data from a REST API.",
                "Explain how to handle multiple threads in Android."
            ],
        },
    },
    {
        id: 20,
        company: "Walmart Labs",
        rounds: "4 rounds | System Design and Scalability",
        candidate: "Anonymous",
        experienceDate: "Mar 2024",
        role: "Software Engineer",
        status: "SELECTED",
        details: {
            description: "Focused on designing scalable and efficient systems for e-commerce applications.",
            questions: [
                "Design a scalable order management system for an online store.",
                "Explain how you would handle database sharding for a high-traffic website.",
                "What caching strategies would you use for frequently accessed data?"
            ],
        },
    },
    
];
export default interviewExperiences;
