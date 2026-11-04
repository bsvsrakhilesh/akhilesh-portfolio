import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "project-scientist-iit-delhi-cas-tripc",
    title:
      "Project Scientist, Centre for Atmospheric Sciences (CAS) & Transportation Research and Injury Prevention Centre (TRIPC), Indian Institute of Technology Delhi",
    shortTitle: "LLM retrieval systems at IIT Delhi",
    tagline:
      "Built and deployed an LLM-enabled document ingestion and tagging pipeline using FastAPI, Celery and Redis.",
    category: "Experience",
    year: "July 2025 - July 2026",
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
    focus: ["AI / ML", "Data science"],
    featured: true,
    status: "Case Study",
    accent: "cyan",
    visual: {
      label: "Retrieval architecture",
      steps: ["PDF / DOCX / URL", "Queue + parse", "Hybrid index", "RAG answers"],
      caption: "A simplified view of the ingestion and retrieval workflow described below.",
    },
    overview:
      "Built and deployed an LLM-enabled document ingestion and tagging pipeline for PDF, DOCX and URL content with retries, deduplication, hybrid retrieval, secure parsing workflows, and retrieval-backed question answering support.",
    problem:
      "Needed a reliable system to ingest multi-format content, parse it cleanly, deduplicate revisions, improve retrieval relevance, and support LLM-based question answering over indexed content.",
    approach: [
      "Built an LLM-enabled document ingestion and tagging pipeline (PDF/DOCX/URLs) using FastAPI, Celery and Redis, with retries and deduplication via content fingerprinting.",
      "Implemented semantic search (embeddings) with PostgreSQL and pgvector, along with keyword search using Postgres Full-Text Search, enabling hybrid retrieval for better relevance.",
      "Built a TypeScript/Node.js backend (using Express & Prisma) to handle document metadata, retrieval APIs, and background workers; integrated secure file upload and parsing workflows.",
      "Created web-to-text extraction using headless browsing and readability parsing to convert dynamic pages into clean, searchable text reliably.",
      "Integrated LLM-based Q&A with retrieval-backed context (RAG), including context assembly, chunking, and prompt safety guardrails.",
      "Evaluated an audio ML pipeline for traffic sound source apportionment using spectral features, clustering, and transformer-based horn classification.",
      "Built a robust ingestion system using 1400-character chunks with 220-character overlaps and SHA-256 content fingerprinting for deduplication and traceable revisions.",
    ],
    outcome: [
      "PDF, DOCX, and URL content enter one ingestion workflow with retries and content fingerprinting for deduplication.",
      "Semantic and keyword search work together through PostgreSQL, pgvector, and full-text search.",
      "Retrieval-backed question answering uses indexed context rather than an ungrounded prompt alone.",
      "Audio ML experiments compared spectral features, clustering and transformer classification while documenting limits from overlapping sounds and limited labels.",
    ],
  },
  {
    slug: "research-intern-iit-delhi-electronics-data-analysis-ml",
    title:
      "Indian Institute of Technology Delhi | Research Intern in Electronics and Data Analysis using Machine Learning",
    shortTitle: "Multi-sensor IoT research at IIT Delhi",
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
    focus: ["Data science", "Applied systems"],
    featured: true,
    status: "Case Study",
    accent: "emerald",
    visual: {
      label: "Sensor workflow",
      steps: ["Sensors", "Data logging", "Remote view", "Calibration"],
      caption: "Environmental and motion readings flow into monitoring and analysis.",
    },
    overview:
      "Engineered and implemented multi-sensor IoT systems by designing circuits and enabling real-time data logging, remote monitoring, and analysis pipelines for calibration and performance evaluation.",
    problem:
      "Needed a reliable sensing and monitoring workflow across multiple environmental and motion-related parameters, along with data processing methods that could support calibration and interpretation.",
    approach: [
      "Engineered and implemented multi-sensor (CO2, Temperature, Humidity, Particulate Matter, Anemometer, Gyroscope, Accelerometer and Geomagnetic) IoT systems by designing circuits, achieving real-time data logging, remote monitoring via web server integration and battery-powered operation.",
      "Calibrated 17 logger nodes against three LICOR reference datasets in Python, using timestamp harmonisation, outlier filtering and linear regression to analyse sensor error.",
    ],
    outcome: [
      "Environmental and motion sensors fed a real-time logging and remote monitoring workflow.",
      "Python analysis calibrated 17 logger nodes against three reference datasets using outlier filtering and linear regression.",
      "Battery-powered operation supported use beyond a fixed bench setup.",
    ],
  },
  {
    slug: "electronics-trainee-cdot-new-delhi",
    title:
      "Centre for Development of Telematics, New Delhi | Electronics Trainee",
    shortTitle: "Embedded display engineering at C-DOT",
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
    focus: ["Applied systems"],
    featured: true,
    status: "Case Study",
    accent: "blue",
    visual: {
      label: "Embedded display system",
      steps: ["PSoC blocks", "HDL peripherals", "LCD controller", "Display output"],
      caption: "A simplified sequence from controller logic to LCD output.",
    },
    overview:
      "Worked on programming analog and digital blocks within PSoC microcontrollers, application-specific peripherals, and LCD-oriented embedded design.",
    problem:
      "Needed to understand and prototype embedded display-oriented functionality across integrated microcontroller environments and application-specific peripheral logic.",
    approach: [
      "Grasped the intricacies of programming analog and digital blocks within PSoC microcontrollers, contributing to 2 successful schematic designs that enhanced functionality for LCD applications in integrated environments.",
      "Prototyped application-specific peripherals utilising hardware description languages.",
      "Programmed an LCD controller that reduced UI load time by 20% and supported scrolling text and image rendering.",
    ],
    outcome: [
      "Contributed two application schematics for LCD functionality in a PSoC environment.",
      "Prototyped application-specific peripherals with hardware description languages.",
      "The LCD controller work reported a 20% reduction in UI load time.",
    ],
  },
  {
    slug: "density-based-intelligent-traffic-control-system",
    title: "DENSITY-BASED INTELLIGENT TRAFFIC CONTROL SYSTEM",
    shortTitle: "Adaptive traffic control with computer vision",
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
    focus: ["AI / ML", "Applied systems"],
    featured: true,
    status: "Case Study",
    accent: "blue",
    visual: {
      label: "Traffic vision loop",
      steps: ["Camera feed", "YOLOv10", "Vehicle density", "Signal timing"],
      caption: "Vehicle detection informs the adaptive timing concept.",
    },
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
      "Vehicle counting output informed adaptive signal timing logic.",
      "A Tkinter interface visualized traffic density for inspection.",
      "The Raspberry Pi 4 prototype explored computer vision on low-power hardware.",
    ],
  },
  {
    slug: "smart-cane-for-visually-impaired-people-iit-roorkee-sponsored",
    title:
      "SMART CANE FOR VISUALLY IMPAIRED PEOPLE - AN IIT ROORKEE SPONSORED PROJECT",
    shortTitle: "Smart cane assistive prototype",
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
    focus: ["Applied systems"],
    featured: true,
    status: "Case Study",
    accent: "emerald",
    visual: {
      label: "Assistive feedback loop",
      steps: ["Terrain sensing", "Obstacle logic", "Haptic + audio", "User cues"],
      caption: "A simplified view of detection and multimodal feedback.",
    },
    overview:
      "Developed an assistive mobility concept focused on obstacle awareness, terrain sensing, user feedback, and cost-effective prototyping.",
    problem:
      "Conventional smart canes often provide limited coverage or slower feedback, reducing user confidence and mobility in complex navigation environments.",
    approach: [
      "Redesigned a smart cane to detect overhead obstacles, objects, potholes and stairs using multiple sensors.",
      "Integrated a buzzer, four vibration motors and five LEDs to provide location-specific obstacle alerts.",
      "Produced a 3D-printed prototype to reduce component complexity and improve manufacturing feasibility.",
    ],
    outcome: [
      "The prototype detected overhead obstacles, objects, potholes, and stairs.",
      "Buzzer, vibration motors and LEDs provided location-specific audio and haptic feedback.",
      "A 3D-printed prototype reduced component complexity and supported manufacturability review.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
