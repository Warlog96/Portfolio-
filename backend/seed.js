import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from './models/Profile.js';

// Load environment variables
dotenv.config();

// Sample profile data
const sampleProfile = {
  name: 'Avaneesh Parmaj',
  role: 'AI Software Engineer | Machine Learning, Full-Stack & Real-Time Systems',
  about: 'Final-year Computer Science & IT student building AI-powered software end to end — from fine-tuned LLMs and XGBoost scoring pipelines in an AI-driven CRM to AI-proctored exam platforms, Spring Boot and MERN back ends, and real-time telemetry systems. Trained in data processing and ML through the C-DAC AI/ML Bootcamp (A Grade), and grounded in systems engineering from leading the avionics and ground-station software for experimental rocket missions. I enjoy turning noisy, real-world data into reliable, production-ready intelligent systems, and I have two patents filed in aerospace systems.',
  email: 'avaneeshparmaj8@gmail.com',
  skills: [
    'Generative AI & LLMs', 'LLM Fine-Tuning', 'XGBoost', 'Machine Learning',
    'Python', 'Java', 'C++', 'SQL', 'JavaScript',
    'Spring Boot', 'React.js', 'Node.js & Express.js',
    'PostgreSQL', 'MySQL', 'MongoDB',
    'REST APIs', 'RPA Automation', 'DSA & OOP',
    'Git & GitHub', 'Real-Time Data Systems', 'IoT & Embedded C'
  ],
  education: [
    {
      degree: 'B.Tech - Computer Science & IT (Minor: Mechatronics) | CGPA 7.68',
      institution: 'Rajarambapu Institute of Technology',
      year: 'Aug 2023 – Present'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'DKTE College, Ichalkaranji',
      year: 'Feb 2023'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'DKTE High School, Ichalkaranji',
      year: 'Mar 2021'
    }
  ],
  experience: [
    {
      role: 'Business Development Manager',
      company: 'Space Club - RIT',
      duration: 'Jul 2025 – Present',
      description: [
        'Led and coordinated technical teams for 500m, 1km, and 3km experimental rocket missions.',
        'Managed cross-functional collaboration between software, avionics, propulsion, and communication teams.'
      ]
    },
    {
      role: 'Avionics Subsystem Head',
      company: 'Space Club - RIT',
      duration: 'Dec 2023 – Jul 2025',
      description: [
        'Built ground-station software that ingests, processes, and visualises live trajectory and telemetry data in real time.',
        'Designed the on-board communication subsystems that stream sensor data from rocket to ground.'
      ]
    },
    {
      role: 'Coordinator',
      company: 'Rise and Recruit Club - RIT',
      duration: 'Aug 2025 – Present',
      description: []
    },
    {
      role: 'Member',
      company: 'CSITE Committee - RIT',
      duration: 'Jul 2024 – Present',
      description: []
    }
  ],
  projects: [
    {
      title: 'AI-Powered CRM with GenAI & RPA (Ongoing)',
      description: 'CRM for customer, lead, opportunity, and sales management with a fine-tuned LLM for lead qualification, lead and deal scoring, proposal generation, and ticket classification. A hybrid pipeline has the LLM extract meeting insights while an XGBoost model predicts the deal score, with RPA-based workflow automation.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'LLM Fine-Tuning', 'XGBoost', 'RPA'],
      link: '',
      github: ''
    },
    {
      title: 'Online Exam Management Platform',
      description: 'MERN exam platform with AI-based proctoring and real-time exam monitoring. Geofencing and device detection flag location violations and unauthorized devices, while live activity tracking detects suspicious behaviour to maintain exam integrity.',
      technologies: ['MERN Stack', 'AI Proctoring', 'Geofencing', 'Real-Time Monitoring'],
      link: '',
      github: ''
    },
    {
      title: 'Real-Time Rocket Telemetry Platform',
      description: 'Ground-station software that ingests live sensor streams from experimental rockets and turns them into trajectory plots, telemetry graphs, and geospatial tracking — a low-latency data pipeline built for decisions made in seconds.',
      technologies: ['Python', 'Data Pipelines', 'Data Visualization', 'IoT'],
      link: '',
      github: ''
    },
    {
      title: 'Druva Flight Software',
      description: 'On-board flight software that fuses IMU sensor data to estimate flight dynamics and autonomously decide when to deploy the parachute.',
      technologies: ['Embedded C', 'Sensor Fusion', 'IMU', 'Real-Time Systems'],
      link: '',
      github: ''
    },
    {
      title: 'Social Media Platform',
      description: 'Full-stack social network where users connect, share content, and interact in real time, with token-based authentication and live updates over WebSockets.',
      technologies: ['MERN Stack', 'Redux', 'Socket.io', 'JWT'],
      link: '',
      github: ''
    },
    {
      title: 'E-Commerce Shopping Platform',
      description: 'Full-featured shopping platform with a product catalog, cart, user authentication, and secure checkout through Stripe.',
      technologies: ['MERN Stack', 'Stripe API', 'Redux', 'Node.js'],
      link: '',
      github: ''
    },
    {
      title: 'Smart Aquarium System',
      description: 'IoT and cloud system that continuously monitors water parameters and automates feeding decisions from live sensor data.',
      technologies: ['IoT', 'Cloud Computing', 'Sensors', 'Automation'],
      link: '',
      github: ''
    },
    {
      title: 'Lake Water Cleaning & Data Acquisition',
      description: 'ESP32-controlled lake cleaning system that streams environmental sensor data to the Adafruit IO cloud for real-time monitoring and analysis.',
      technologies: ['ESP32', 'Adafruit IO', 'IoT', 'Cloud Computing'],
      link: '',
      github: ''
    },
    {
      title: 'Space Club Official Website',
      description: 'Official website featuring responsive UI, animations, and interactive project showcases.',
      technologies: ['HTML/CSS', 'JavaScript', 'Web Design'],
      link: 'https://spaceclubrit.in',
      github: ''
    }
  ],
  achievements: [
    '7th Rank – IIT Bombay International Regatta Competition (2024)',
    'Multiple successful experimental rocket launches',
    'A Grade – C-DAC AI/ML Bootcamp',
    'Zscaler Zero Trust Associate – Cybersecurity Certification',
    'SQL (Advanced) – HackerRank',
    'C++ Masterclass and HTML5, CSS3, JavaScript & ReactJS – Infosys Springboard'
  ],
  patents: [
    'Gyration-Based Parachute Deployment System',
    'Wireless Rocket Ignition System Using IoT Devices'
  ],
  workshops: [
    { title: 'C-DAC AI/ML Bootcamp', description: 'Intensive training in data processing, model building, and evaluation of machine learning models (A Grade).' },
    { title: 'Rocketry Instructor', description: 'Trained participants in aerodynamics and avionics in Andhra Pradesh.' },
    { title: 'Advanced Rocketry', description: 'Training by DRDO/ISRO scientists on high-power rocketry.' }
  ],
  languages: ['English', 'Hindi', 'Marathi']
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ MongoDB Connected');
  } catch (error) {
    console.error('✗ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Seed database
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing profile
    await Profile.deleteMany({});
    console.log('✓ Cleared existing profile data');

    // Insert sample profile
    const profile = await Profile.create(sampleProfile);
    console.log('✓ Sample profile created successfully!');
    console.log('\nProfile Details:');
    console.log('- Name:', profile.name);
    console.log('- Role:', profile.role);
    console.log('- Skills:', profile.skills.length);
    console.log('- Projects:', profile.projects.length);
    console.log('- Email:', profile.email);

    console.log('\n✓ Database seeded successfully!');
    console.log('\nYou can now start the server and view your portfolio.');
    
    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run seed
seedDatabase();
