export const SKILLS_CATEGORIES = {
   Education: {
    title: "Education",
    skills: [
      "Intergrated Masters degree", "Electerical engineering", 
      "Thessaloniki", "Advanced Mathematics", "Computer science","ARISTOTLE univercity","AUTH"
    ]
  },
  aiAndIntelligence: {
    title: "AI Agents & LLM Integration",
    skills: [
      "AI Agents creation and management", "Retrieval-Augmented Generation (RAG)", 
      "Large Language Models (LLM)", "LangChain", "Generative AI", "OpenAI API",
      "Automatic Reasoning and Tool-use (ART)", "Prompt Chaining", "META Prompting",
      "Python", "Keras", "PyTorch", "Gated Recurrent Unit (GRU)", "Recurrent Neural Networks (RNN)"
    ]
  },
  microservicesAndCloud: {
    title: "Microservices & Distributed Systems",
    skills: [
      "Microservices Architecture", "Distributed Systems", "REST APIs", 
      "Creation of APIs", "API usage", "Google APIs", "MQTT", 
      "High Availability Infrastructure", "Scalable Backend Design"
    ]
  },
  serverAndDevOps: {
    title: "Server Development & Hosting",
    skills: [
      "Microsoft SQL Server", "Database Infrastructure Management", "cPanel", 
      "WHM (Web Host Manager)", "FastAPI", "XML", "Server-side Security", 
      "Authentication Modules", "Two-Factor Authentication (2FA)"
    ]
  },
  desktopApplications: {
    title: "Desktop Application Engineering (C# & VB)",
    skills: [
      "C#", "Visual Basic .NET (VB.NET)", "WPF (Windows Presentation Foundation)", 
      ".Net 9", ".Net 8", ".Net 7", ".Net 6", ".Net 5", ".Net Core", ".Net 4",
      "Multithreading (90% performance optimization)", "WCF", "Entity Framework", 
      "Design Patterns", "Software Architecture"
    ]
  },
  webAndVisualization: {
    title: "Web Development & Data Visualization",
    skills: [
      "React.js", "TypeScript", "JavaScript", "HTML", "CSS", "ASP.NET", 
      "Business Analytics Dashboards", "Logic-based Visualizations", 
      "Google Graphs", "Graphic Design Principles"
    ]
  },
  gameAndEngineering: {
    title: "Game Dev & 3D Engineering Math",
    skills: [
      "Unreal Engine", "Unity", "Blender", "3D Math", "Geometry", "Mesh Generation", 
      "Bicubic Interpolation", "3D Soil Profile Generation", "Subway Alignment Algorithms", 
      "Splines", "Numerical Analysis", "Engineering Analysis"
    ]
  }
};

export const ALL_SKILLS = Object.values(SKILLS_CATEGORIES).flatMap(cat => cat.skills);