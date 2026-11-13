import jobPortal from "../assets/svg/projects/job-portal.svg";
import LetsChat from "../assets/svg/projects/chat-app.svg";
import anchaal from "../assets/svg/projects/aanchal.svg";
import bookRecommender from "../assets/svg/projects/book-recommender.svg";
import covid19Resources from "../assets/svg/projects/covid19-resources.svg";
import funEdu from "../assets/svg/projects/fun-edu.svg";
import notesKepper from "../assets/svg/projects/notes-keeper.svg";
import productsList from "../assets/svg/projects/product-list.svg";
import quizify from "../assets/svg/projects/quizify.svg";
import hirelens from "../assets/svg/projects/hirelens.svg";

export const projectsData = [
  {
    id: 0,
    projectName: "HireLens",
    projectDesc:
      "AI tool that reviews a candidate's GitHub assignment against a hiring rubric and drafts an interview guide. Every cited file, line and quote is verified against the real code, scores are computed in code, and a blob-SHA diff credits only the candidate's own work.",
    tags: ["React", "Node.js", "Express", "Gemini API"],
    code: "https://github.com/buildWithArunima/hirelens",
    demo: "https://hirelens-15ah.onrender.com/",
    image: hirelens,
  },
  {
    id: 1,
    projectName: "Job Portal",
    projectDesc: 
      "React.js job portal with Bootstrap for streamlined job search and applications.",
    tags: ["React", "Redux", "Bootstrap"],
    code: "https://github.com/buildWithArunima/Job-Portal",
    demo: "https://job-portal-arunima14.vercel.app/",
    image: jobPortal,
  },
  {
    id: 2,
    projectName: "Lets Chat",
    projectDesc:
      "Chat application with the integration of Chat GPT API for dynamic responses.",
    tags: ["React", "Redux", "ChatEngine"],
    code: "https://github.com/buildWithArunima/LetsChat",
    demo: "https://lets-chat-kohl.vercel.app/",
    image: LetsChat,
  },
  {
    id: 3,
    projectName: "Products Shop",
    projectDesc:
      "A React.js web page showcasing products with filtering, sorting, and pagination features.",
    tags: ["React", "HTML/CSS", "Node"],
    code: "https://github.com/buildWithArunima/Product-Lists/",
    demo: "https://product-lists-iota.vercel.app/",
    image: productsList,
  },
  {
    id: 4,
    projectName: "Quiz App",
    projectDesc:
      "A dynamic quiz app that tracks user answers with a timer and progress bar, and displaying personalized results.",
    tags: ["HTML/CSS", "Vanilla js"],
    code: "https://github.com/buildWithArunima/Quiz-App",
    demo: "https://quiz-app-arunima14.vercel.app/",
    image: quizify,
  },
  {
    id: 5,
    projectName: "FunEdu: Mental HealthMate",
    projectDesc:
      "A React-based web application to assess the mental health of teenagers.",
    tags: ["React", "Node", "JavaScript"],
    code: "https://github.com/buildWithArunima/fun-edu",
    demo: "https://github.com/buildWithArunima/fun-edu",
    image: funEdu,
  },
  {
    id: 6,
    projectName: "Book Recommender System",
    projectDesc:
      "Recommends the top 25 books from a dataset, plus search-based recommendations.",
    tags: ["Python", "Jupyter Notebook", "Datasets"],
    code: "https://github.com/buildWithArunima/book-recommender-system-python",
    demo: "https://github.com/buildWithArunima/book-recommender-system-python",
    image: bookRecommender,
  },
  {
    id: 7,
    projectName: "Anchaal app",
    projectDesc:
      "A women's safety app designed to keep devices connected even in zero-network conditions.",
    tags: ["Flutter", "Firebase"],
    code: "https://github.com/buildWithArunima/Anchaal-app",
    demo: "https://github.com/buildWithArunima/Anchaal-app",
    image: anchaal,
  },
  {
    id: 8,
    projectName: "Covid-19 resources",
    projectDesc:
      "A website collecting Covid-19 resources in one place.",
    tags: ["Javascript", "HTML/CSS", "Firebase"],
    code: "https://github.com/buildWithArunima/covid-19-resources",
    demo: "https://github.com/buildWithArunima/covid-19-resources",
    image: covid19Resources,
  },
  {
    id: 9,
    projectName: "Note Keeper",
    projectDesc: "A simple webpage to add your notes",
    tags: ["React", "Firebase"],
    code: "https://github.com/buildWithArunima/Keeper-Notes",
    demo: "https://github.com/buildWithArunima/Keeper-Notes",
    image: notesKepper,
  },
];
