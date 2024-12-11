const interviewExperiences = [
    {
      id: 1,
      company: 'Google',
      role: 'Software Engineer',
      rounds: 4,
      candidate: 'Alice',
      status: 'SELECTED',
      interviewType: 'online',
      experienceDate: '2024-12-01',
      packageCtc: '30 LPA',
      details: {
        description: 'Challenging but rewarding experience. Focused on algorithms.',
        questions: ['Explain Dijkstra’s Algorithm', 'Design a scalable chat application']
      }
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Data Scientist',
      rounds: 3,
      candidate: 'Bob',
      status: 'REJECTED',
      interviewType: 'offline',
      experienceDate: '2024-11-20',
      packageCtc: '25 LPA',
      details: {
        description: 'Questions focused on machine learning models and SQL.',
        questions: ['Explain overfitting and how to prevent it', 'Write a SQL query for ranking sales']
      }
    },
    {
      id: 3,
      company: 'Amazon',
      role: 'Backend Developer',
      rounds: 5,
      candidate: 'Charlie',
      status: 'SELECTED',
      interviewType: 'online',
      experienceDate: '2024-10-15',
      packageCtc: '28 LPA',
      details: {
        description: 'Great experience with a focus on scalability and API design.',
        questions: ['Design a RESTful API for an e-commerce platform', 'Explain eventual consistency']
      }
    },
    {
      id: 4,
      company: 'Facebook',
      role: 'Frontend Developer',
      rounds: 4,
      candidate: 'Diana',
      status: 'SELECTED',
      interviewType: 'offline',
      experienceDate: '2024-12-03',
      packageCtc: '35 LPA',
      details: {
        description: 'Focus on React and user interface optimization.',
        questions: ['Optimize a large React application', 'Explain the virtual DOM']
      }
    },
    {
      id: 5,
      company: 'Tesla',
      role: 'DevOps Engineer',
      rounds: 3,
      candidate: 'Evan',
      status: 'REJECTED',
      interviewType: 'online',
      experienceDate: '2024-11-15',
      packageCtc: '22 LPA',
      details: {
        description: 'Focus on CI/CD pipelines and infrastructure as code.',
        questions: ['Explain Kubernetes architecture', 'Set up a Jenkins pipeline']
      }
    },
    {
      id: 6,
      company: 'Apple',
      role: 'iOS Developer',
      rounds: 4,
      candidate: 'Fiona',
      status: 'SELECTED',
      interviewType: 'offline',
      experienceDate: '2024-12-08',
      packageCtc: '32 LPA',
      details: {
        description: 'Questions on Swift, UI development, and Apple’s ecosystem.',
        questions: ['Explain Auto Layout in Swift', 'Build a sample weather app UI']
      }
    },
    {
      id: 7,
      company: 'IBM',
      role: 'AI Researcher',
      rounds: 3,
      candidate: 'George',
      status: 'SELECTED',
      interviewType: 'online',
      experienceDate: '2024-11-25',
      packageCtc: '27 LPA',
      details: {
        description: 'Focus on neural networks and AI ethics.',
        questions: ['Explain transformers in NLP', 'How to mitigate bias in AI models']
      }
    },
    {
      id: 8,
      company: 'Intel',
      role: 'Embedded Systems Engineer',
      rounds: 3,
      candidate: 'Hannah',
      status: 'REJECTED',
      interviewType: 'offline',
      experienceDate: '2024-10-10',
      packageCtc: '18 LPA',
      details: {
        description: 'In-depth questions on microcontrollers and real-time systems.',
        questions: ['Explain the concept of interrupt handling', 'Write a simple ISR']
      }
    },
    {
      id: 9,
      company: 'Oracle',
      role: 'Database Administrator',
      rounds: 3,
      candidate: 'Ian',
      status: 'SELECTED',
      interviewType: 'online',
      experienceDate: '2024-11-01',
      packageCtc: '24 LPA',
      details: {
        description: 'Focused on database optimization and query performance.',
        questions: ['How to optimize a slow query', 'Explain ACID properties']
      }
    },
    {
      id: 10,
      company: 'Cisco',
      role: 'Network Engineer',
      rounds: 4,
      candidate: 'Jane',
      status: 'SELECTED',
      interviewType: 'offline',
      experienceDate: '2024-11-18',
      packageCtc: '26 LPA',
      details: {
        description: 'Focus on networking protocols and troubleshooting.',
        questions: ['Explain OSPF and BGP', 'How to debug a network bottleneck']
      }
    },
      
        {
          id: 11,
          company: 'PayPal',
          role: 'Full-Stack Developer',
          rounds: 5,
          candidate: 'Kevin',
          status: 'SELECTED',
          interviewType: 'online',
          experienceDate: '2024-10-30',
          packageCtc: '29 LPA',
          details: {
            description: 'Focus on MERN stack and system design.',
            questions: ['Design a payment gateway system', 'Explain the lifecycle of a React component']
          }
        },
        {
          id: 12,
          company: 'Adobe',
          role: 'UI/UX Designer',
          rounds: 4,
          candidate: 'Laura',
          status: 'REJECTED',
          interviewType: 'offline',
          experienceDate: '2024-12-05',
          packageCtc: '21 LPA',
          details: {
            description: 'Focus on user experience design and prototyping tools.',
            questions: ['Create a prototype for a shopping app', 'Explain the importance of accessibility']
          }
        },
        {
          id: 13,
          company: 'Twitter',
          role: 'Backend Developer',
          rounds: 3,
          candidate: 'Michael',
          status: 'SELECTED',
          interviewType: 'online',
          experienceDate: '2024-11-10',
          packageCtc: '31 LPA',
          details: {
            description: 'In-depth questions on API performance and caching.',
            questions: ['Design a rate limiter', 'Explain the differences between Redis and Memcached']
          }
        },
        {
          id: 14,
          company: 'LinkedIn',
          role: 'Data Engineer',
          rounds: 4,
          candidate: 'Nina',
          status: 'SELECTED',
          interviewType: 'offline',
          experienceDate: '2024-10-22',
          packageCtc: '33 LPA',
          details: {
            description: 'Focus on ETL pipelines and big data technologies.',
            questions: ['Explain the Hadoop ecosystem', 'Design a data ingestion pipeline']
          }
        },
        {
          id: 15,
          company: 'Salesforce',
          role: 'Cloud Engineer',
          rounds: 5,
          candidate: 'Oscar',
          status: 'REJECTED',
          interviewType: 'online',
          experienceDate: '2024-12-07',
          packageCtc: '28 LPA',
          details: {
            description: 'Focus on cloud platforms, scalability, and deployment.',
            questions: ['Compare AWS and Azure', 'How to deploy a multi-region app']
          }
        },
        {
          id: 16,
          company: 'Netflix',
          role: 'Site Reliability Engineer',
          rounds: 5,
          candidate: 'Paul',
          status: 'SELECTED',
          interviewType: 'offline',
          experienceDate: '2024-11-15',
          packageCtc: '36 LPA',
          details: {
            description: 'Focus on system reliability, monitoring, and incident response.',
            questions: ['Design a system to handle outages', 'Explain chaos engineering']
          }
        },
        {
          id: 17,
          company: 'Spotify',
          role: 'Machine Learning Engineer',
          rounds: 4,
          candidate: 'Quinn',
          status: 'SELECTED',
          interviewType: 'online',
          experienceDate: '2024-10-18',
          packageCtc: '34 LPA',
          details: {
            description: 'Focus on recommendation systems and ML pipelines.',
            questions: ['Explain collaborative filtering', 'Design a music recommendation engine']
          }
        },
        {
          id: 18,
          company: 'Zomato',
          role: 'Product Manager',
          rounds: 4,
          candidate: 'Rachel',
          status: 'REJECTED',
          interviewType: 'offline',
          experienceDate: '2024-12-01',
          packageCtc: '23 LPA',
          details: {
            description: 'Focus on product lifecycle and market analysis.',
            questions: ['Design a feature for user reviews', 'How to measure product success']
          }
        },
        {
          id: 19,
          company: 'Uber',
          role: 'Frontend Developer',
          rounds: 3,
          candidate: 'Sam',
          status: 'SELECTED',
          interviewType: 'online',
          experienceDate: '2024-11-28',
          packageCtc: '27 LPA',
          details: {
            description: 'Focus on JavaScript frameworks and dynamic UI.',
            questions: ['Optimize a React app for performance', 'Explain event delegation']
          }
        },
        {
          id: 20,
          company: 'Flipkart',
          role: 'Operations Manager',
          rounds: 4,
          candidate: 'Tina',
          status: 'SELECTED',
          interviewType: 'offline',
          experienceDate: '2024-10-31',
          packageCtc: '26 LPA',
          details: {
            description: 'Focus on supply chain optimization and team management.',
            questions: ['How to optimize last-mile delivery', 'Describe a team conflict you resolved']
          }
        }
      
      
  ];
  
export default interviewExperiences;

