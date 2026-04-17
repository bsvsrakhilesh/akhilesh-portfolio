import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "project-scientist-iit-delhi-cas-tripc",
    title:
      "Project Scientist, Centre for Atmospheric Sciences (CAS) & Transportation Research and Injury Prevention Centre (TRIPC), Indian Institute of Technology Delhi",
    tagline:
      "Built and deployed an LLM-enabled document ingestion and tagging pipeline using FastAPI, Celery and Redis.",
    category: "Experience",
    year: "July 2025 - Present",
    stack: [
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "pgvector",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "RAG",
      "Semantic Search",
      "Postgres Full-Text Search",
    ],
    featured: true,
    status: "Private Case Study",
    accent: "cyan",
    image: "/images/projects/iit-delhi-rag.jpg",
    overview:
      "Built and deployed an LLM-enabled document ingestion and tagging pipeline for PDF, DOCX and URL content with retries, deduplication, hybrid retrieval, secure parsing workflows, and retrieval-backed question answering support.",
    problem:
      "Needed a reliable system to ingest multi-format content, parse it cleanly, deduplicate revisions, improve retrieval relevance, and support LLM-based question answering over indexed content.",
    approach: [
      "Built and deployed an LLM-enabled document ingestion and tagging pipeline (PDF/DOCX/URLs) using FastAPI, Celery and Redis, with robust retries and deduplication via content fingerprinting.",
      "Implemented semantic search (embeddings) with PostgreSQL and pgvector, along with keyword search using Postgres Full-Text Search, enabling hybrid retrieval for better relevance.",
      "Built a TypeScript/Node.js backend (using Express & Prisma) to handle document metadata, retrieval APIs, and background workers; integrated secure file upload and parsing workflows.",
      "Created web-to-text extraction using headless browsing and readability parsing to convert dynamic pages into clean, searchable text reliably.",
      "Integrated LLM-based Q&A with retrieval-backed context (RAG), including context assembly, chunking, and prompt safety guardrails.",
      "Built a robust ingestion system using 1400-character chunks with 220-character overlaps and SHA-256 content fingerprinting for deduplication and traceable revisions.",
    ],
    outcome: [
      "Strong flagship portfolio case study in LLM systems, retrieval engineering, and backend architecture.",
      "Shows production-oriented AI engineering beyond notebook-only ML work.",
      "Demonstrates end-to-end workflow thinking across ingestion, indexing, retrieval, and question answering.",
    ],
  },
  {
    slug: "research-intern-iit-delhi-electronics-data-analysis-ml",
    title:
      "Indian Institute of Technology Delhi | Research Intern in Electronics and Data Analysis using Machine Learning",
    tagline:
      "Engineered and implemented multi-sensor IoT systems with real-time data logging, remote monitoring, and calibration-oriented analysis.",
    category: "Experience",
    year: "January 2025 - June 2025",
    stack: [
      "Python",
      "IoT",
      "CO2 Sensors",
      "Temperature Sensors",
      "Humidity Sensors",
      "Particulate Matter Sensors",
      "Anemometer",
      "Gyroscope",
      "Accelerometer",
      "Geomagnetic",
      "Data Analysis",
      "Linear Regression",
      "Visualization",
    ],
    featured: true,
    status: "Private Case Study",
    accent: "emerald",
    image: "/images/projects/multi-sensor-iot.jpg",
    overview:
      "Engineered and implemented multi-sensor IoT systems by designing circuits and enabling real-time data logging, remote monitoring, and analysis pipelines for calibration and performance evaluation.",
    problem:
      "Needed a reliable sensing and monitoring workflow across multiple environmental and motion-related parameters, along with data processing methods that could support calibration and interpretation.",
    approach: [
      "Engineered and implemented multi-sensor (CO2, Temperature, Humidity, Particulate Matter, Anemometer, Gyroscope, Accelerometer and Geomagnetic) IoT systems by designing circuits, achieving real-time data logging, remote monitoring via web server integration and battery-powered operation.",
      "Developed and optimised data analysis and visualisation pipelines using Python, employing linear regression, outlier elimination, and smoothing techniques to calibrate sensor measurements.",
    ],
    outcome: [
      "Shows strong hardware-plus-data engineering capability.",
      "Adds depth beyond pure software by combining sensing, electronics, logging, and analytics.",
      "Strengthens your portfolio story around intelligent real-world systems.",
    ],
  },
  {
    slug: "electronics-trainee-cdot-new-delhi",
    title:
      "Centre for Development of Telematics, New Delhi | Electronics Trainee",
    tagline:
      "Worked on PSoC microcontrollers, LCD application schematics, HDL-based peripherals, and a high-performance LCD controller.",
    category: "Experience",
    year: "July 2023 - August 2023",
    stack: [
      "PSoC",
      "Microcontrollers",
      "Embedded Systems",
      "HDL",
      "LCD Controller",
      "Electronics",
    ],
    featured: true,
    status: "Private Case Study",
    accent: "blue",
    image: "/images/projects/cdot-electronics.jpg",
    overview:
      "Worked on programming analog and digital blocks within PSoC microcontrollers, application-specific peripherals, and LCD-oriented embedded design.",
    problem:
      "Needed to understand and prototype embedded display-oriented functionality across integrated microcontroller environments and application-specific peripheral logic.",
    approach: [
      "Grasped the intricacies of programming analog and digital blocks within PSoC microcontrollers, contributing to 2 successful schematic designs that enhanced functionality for LCD applications in integrated environments.",
      "Prototyped application-specific peripherals utilising hardware description languages.",
      "Engineered a high-performance LCD controller that cut UI load times by 20% and added metro-style scrolling text + image support, significantly enhancing user engagement by 25%.",
    ],
    outcome: [
      "Adds a strong embedded-electronics foundation to the portfolio.",
      "Shows low-level systems exposure alongside AI/ML work.",
      "Strengthens the breadth of your engineering profile.",
    ],
  },
  {
    slug: "density-based-intelligent-traffic-control-system",
    title: "DENSITY-BASED INTELLIGENT TRAFFIC CONTROL SYSTEM",
    tagline:
      "An AI driven system using Raspberry Pi 4, YOLOv10, and OpenCV to adjust traffic signals based on real-time vehicle density dynamically.",
    category: "Project",
    year: "August 2024 - December 2024",
    stack: [
      "Raspberry Pi 4",
      "YOLOv10",
      "OpenCV",
      "Pandas",
      "Tkinter",
      "Computer Vision",
    ],
    featured: true,
    status: "Private Case Study",
    accent: "blue",
    image: "/images/projects/traffic-control.jpg",
    overview:
      "Developed a traffic-control concept that uses computer vision-based vehicle counting and adaptive signal logic to respond to real-time density conditions.",
    problem:
      "Static traffic timing does not adapt well to changing vehicle density, creating inefficiency and limiting responsiveness in traffic management scenarios.",
    approach: [
      "Devised an AI driven system using Raspberry Pi 4, YOLOv10, and OpenCV to adjust traffic signals based on real-time vehicle density dynamically.",
      "Engineered a real-time object detection pipeline for vehicle counting, integrating computer vision and Pandas for adaptive signal timing and designed a Tkinter-based GUI to visualise traffic density.",
      "Researched edge-computing techniques for running deep learning models on low-power hardware, proposing future IoT and V2X communication enhancements for smart city integration.",
    ],
    outcome: [
      "Strong computer vision case study with an edge-AI angle.",
      "Easy to present visually through workflow diagrams and system snapshots.",
      "Connects AI directly with a smart-city application scenario.",
    ],
  },
  {
    slug: "smart-cane-for-visually-impaired-people-iit-roorkee-sponsored",
    title:
      "SMART CANE FOR VISUALLY IMPAIRED PEOPLE - AN IIT ROORKEE SPONSORED PROJECT",
    tagline:
      "A high-tech mobility aid capable of detecting overhead obstacles, inanimate objects, potholes, and stairs.",
    category: "Project",
    year: "May 2023 - September 2023",
    stack: [
      "Embedded Systems",
      "Sensors",
      "3D Printing",
      "Rapid Prototyping",
      "Assistive Technology",
      "Feedback Systems",
    ],
    featured: true,
    status: "Private Case Study",
    accent: "emerald",
    image: "/images/projects/smart-cane.jpg",
    overview:
      "Developed an assistive mobility concept focused on obstacle awareness, terrain sensing, user feedback, and cost-effective prototyping.",
    problem:
      "Conventional smart canes often provide limited coverage or slower feedback, reducing user confidence and mobility in complex navigation environments.",
    approach: [
      "Redesigned a high-tech mobility aid capable of detecting overhead obstacles, inanimate objects, potholes, and stairs; increased user confidence and mobility by 35% compared to current smart canes through innovative features.",
      "Launched an innovative feedback system incorporating a buzzer, four vibration motors, and five LED lights, reducing feedback response time by approximately 30%.",
      "Developed a cost-effective smart cane design using 3D printing, reducing production costs by 10-15%, demonstrating my ability to deliver innovative solutions within budget.",
    ],
    outcome: [
      "Adds a human-centered and socially meaningful system to the portfolio.",
      "Shows breadth in embedded design, prototyping, and product thinking.",
      "Balances your AI/software work with assistive hardware innovation.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
