const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/cheruiy/MY-PORTFOLIO-WEB',
    title: 'CR.',
  }
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Cheruiyot Robert',
    role: 'Software Engineer and Statistician',
    description:
      'I am a Statistician and Software Engineer with a strong background in data analysis, statistical modeling, and software development. I specialize in leveraging data-driven insights to build scalable applications, optimize algorithms, and enhance decision-making. With expertise in programming, machine learning, and system design, I bridge the gap between analytics and engineering to create efficient and impactful solutions.',
    resume: 'https://drive.google.com/file/d/15kxHKdj9rSllc8SFwLlCtwvXYFbwMr4J/view?usp=drive_link',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Task Managment App',
      description:
        'This app is design to help teams stay organized by tracking tasks, ensuring timely completion, and boosting productivity.',
      stack: ['React', 'Python with Flask', 'PostgreSQL'],
      sourceCode: 'https://taskmanagerke.netlify.app/',
      livePreview: 'https://taskmanagerke.netlify.app/',
    },
    {
      name: 'Art Gallery',
      description:
        'My Art Gallery App is a platform for showcasing and adding artwork, allowing artists to upload and display their collections in a visually engaging way',
      stack: ['Javascript', 'React', 'PostgreSQL'],
      sourceCode: 'https://sparkling-treacle-fad276.netlify.app/',
      livePreview: 'https://sparkling-treacle-fad276.netlify.app/',
    },
    {
      name: 'Project 3',
      description:
        'Overview Movers App is a Flask-based web application designed to manage moving-related activities.',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://linkedin.com',
      livePreview: 'https://linkedin.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'SPSS',
    'EXCEL',
    'SQL',
    'R',
    'Statistical Modelling',
    'Data Analysis',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'kiruir38@mail.com',
  }
  
  export { header, about, projects, skills, contact }