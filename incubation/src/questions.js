const quizQuestions = [
    {
      id: 1,
      question: "What is the main focus of 'outside-in thinking'?",
      options: [
        "Over-engineered solutions",
        "Promoting inventor syndrome",
        "Designing products based on customer's needs",
        "None of the above"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 2,
      question: "According to Dr. Love Sarin, what is a major challenge for startups in their initial stages?",
      options: [
        "Building a team",
        "Developing an idea",
        "Advertisements",
        "Gaining an investor"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 3,
      question: "Which among the following contributes to the development of inventor syndrome?",
      options: [
        "Following market trends",
        "Prioritizing customer needs",
        "Promoting customer interactions",
        "Lack of commercial value"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 4,
      question: "According to Mr. Avinash Prabhune, what approach did the team consider for reaching customer segments in rural areas?",
      options: [
        "Social media campaigns",
        "Online Marketing",
        "Distributing through government schemes",
        "None of these"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 5,
      question: "As mentioned by Mr. Avinash Prabhune, what was the team's strategy for creating awareness about solar cooking?",
      options: [
        "Collaborating with celebrity chefs and cooking demos",
        "Conducting online surveys",
        "Multi-level marketing",
        "Door-to-door sales"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 6,
      question: "What were the pricing tactics and revenue model employed by the team for making money in the case of solar cookers?",
      options: [
        "Direct selling",
        "Bulk orders from government organizations and distributors",
        "Government subsidies for eco-friendly products",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 7,
      question: "As mentioned by Dr. Love Sarin, how can we understand that a change in strategy is effective?",
      options: [
        "Constantly monitoring",
        "Building models",
        "Intuition",
        "None of the above"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 8,
      question: "What defines the active or urgent problem in the problem recognition scale?",
      options: [
        "Adjust to the problem",
        "No awareness of the problem",
        "Recognizing a problem and actively searching for a solution",
        "Recognizing a problem but not willing to pay for the solution"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 9,
      question: "What is the key aspect of an individual's awareness in a passive problem stage in the problem recognition scale?",
      options: [
        "No awareness of the problem",
        "Motivated to change but unaware of the problem",
        "Recognizing a problem but not being motivated to change",
        "Awareness of the problem but not motivated to change"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 10,
      question: "According to the lecture: IITH Student projects: Customer Discovery, which among the following is a key requirement for attracting investors?",
      options: [
        "Providing any solution or service",
        "Demonstrating an unreal problem",
        "Addressing a real, demonstrable problem",
        "Ignoring opportunities"
      ],
      answers: [3],
      type: "single"
    },
    {
        id: 11,
        question: "What is evidence-based entrepreneurship?",
        options: [
          "A methodology that focuses on making decisions based on evidence",
          "A program offered by the GDC for Innovation and Entrepreneurship",
          "A combination of agile engineering, customer development, and the business model canvas",
          "A method that emphasizes customer validation and iterative development"
        ],
        answers: [1],
        type: "single"
    },
    {
        id: 12,
        question: "According to Mr. Raghuttama, What makes an idea successful even if it doesn't work out?",
        options: [
          "Ignoring the failures and moving on to a completely unrelated project",
          "Isolating oneself from collaborators and stakeholders to avoid blame",
          "Ability to learn valuable lessons and insights from the failure",
          "Blaming external factors and disassociating from any responsibility"
        ],
        answers: [3],
        type: "single"
    },
    {
        id: 13,
        question: "What is a key aspect of a successful business?",
        options: [
          "Focusing solely on minimizing expenses without prioritizing product quality",
          "Ability to effectively deliver the product and ensure a consistent income stream",
          "Relying solely on intuition and disregarding the need for strategic planning",
          "Ignoring customer feedback and market trends in decision-making"
        ],
        answers: [2],
        type: "single"
    },
    {
        id: 14,
        question: "In what way does an idea become 'disruptive'?",
        options: [
          "By disrupting the current market ecosystem",
          "By avoiding any changes and maintaining the status quo",
          "By imitating successful competitors",
          "None of the above"
        ],
        answers: [1],
        type: "single"
    },
    {
        id: 15,
        question: "What are some of the most common mistakes startups make?",
        options: [
          "Overestimating the number of potential customers",
          "Building a solution without talking to potential customers",
          "Misjudging the urgency of the need",
          "All of the above"
        ],
        answers: [4],
        type: "single"
    },
    {
        id: 16,
        question: "The Lean Startup methodology emphasizes the importance of:",
        options: [
          "Continuous learning and customer validation",
          "Planning and execution in business",
          "Finance and product ideas in entrepreneurship",
          "Graduating with degrees and becoming entrepreneurs"
        ],
        answers: [1],
        type: "single"
    },
    {
        id: 17,
        question: "What is the main focus of the Lean Startup methodology?",
        options: [
          "Company building and reducing the risk of failure",
          "Agile engineering and continuous learning",
          "Customer development and iterative development",
          "Planning and execution in startups"
        ],
        answers: [3],
        type: "single"
    },
    {
        id: 18,
        question: "What is the role of the GDC in Innovation and entrepreneurship?",
        options: [
          "Discourage innovation within the Institute",
          "Provide networking opportunities for academic purposes",
          "Focus solely on theoretical research without practical applications",
          "Facilitate connections between the Institute and the marketplace to enhance the environment for Innovation and entrepreneurship"
        ],
        answers: [4],
        type: "single"
    },
    {
        id: 19,
        question: "How does entrepreneurship contribute to economic prosperity?",
        options: [
          "By solving problems and spotting opportunities",
          "By developing a robust business model",
          "By focusing on customer discovery and validation",
          "By offering programs for startups to validate their ideas"
        ],
        answers: [1],
        type: "single"
    },
    {
        id: 20,
        question: "What is the primary need for selling a product or service?",
        options: [
          "Implementing complex marketing strategies",
          "Maximizing profit margins",
          "Identifying customer and market needs",
          "Offering discounts and promotions"
        ],
        answers: [3],
        type: "single"
    },
    {
      id: 21,
      question: "According to Prof. B. K. Chakravarthy in the lecture: Hand holding for Entrepreneurship, what is one of the benefits of having an entrepreneur’s mindset?",
      options: [
        "It provides financial support for startups",
        "It guarantees success in the market",
        "It reduces doubt, fear, and anxiety",
        "Reducing risk factors by half in unknown markets"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 22,
      question: "According to Ms. Mayuri, which among the following is a crucial factor for the team’s unity and success?",
      options: [
        "Individual achievements",
        "Lack of diversity",
        "Frequent disagreements",
        "Common ideology"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 23,
      question: "What was Mr. Anurag’s key learning regarding customer interactions from his startup experience?",
      options: [
        "Constantly improving the product design",
        "Focusing on branding",
        "Talking to customers is essential for understanding their needs",
        "None of these"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 24,
      question: "What, according to Mr. Amit, is overhyped and doesn’t justify the success of a startup?",
      options: [
        "Product development",
        "Legal compliance",
        "Funding",
        "Customer satisfaction"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 25,
      question: "According to Mr. Anurag, what aspect of the startup journey is sometimes detrimental?",
      options: [
        "The illusion of money helping solve everything",
        "Scaling the team",
        "Fancy-packaging of the product",
        "Building sales team"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 26,
      question: "According to the lecture: Hand holding for entrepreneurship, what is the most important entity in a startup?",
      options: [
        "The investor",
        "The Mentor",
        "The customer",
        "The entrepreneur"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 27,
      question: "What does Mr. Anurag identify as the reason for the failure of a startup?",
      options: [
        "Product market fit",
        "Employees",
        "Mentors",
        "None of the above"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 28,
      question: "According to Ms. Mayuri, what is an essential quality for startup founders?",
      options: [
        "Belief in the startup",
        "Pursuit of endless funding",
        "Rapid product development skills",
        "Good programming skills"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 29,
      question: "According to Mr. Anurag, in the lecture handholding for entrepreneurship, what do early adopters help the company with?",
      options: [
        "Marketing and selling the product to a broader audience",
        "Expanding production capacity",
        "Providing critical feedback and helping build the product",
        "None of these"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 30,
      question: "What does Ms. Mayuri suggest doing when, even after a lot of effort and work you put in, you are not able to see any significant changes you intend to make?",
      options: [
        "Quitting the startup",
        "Re-evaluating goals and pivoting",
        "Speeding up the process",
        "Relying on rapid production"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 31,
      question: "In the opinion of Mr. Chakravarthy, innovation cannot be achieved without -------------.",
      options: [
        "Competetion",
        "Imagination",
        "Collaboration",
        "Resources"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 32,
      question: "What is the importance of empathy in the design of a product?",
      options: [
        "Enhances Aesthetics",
        "Fosters Competition",
        "Promotes User-Centered Design",
        "Reduces Manufacturing Costs"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 33,
      question: "The solar oven case study provides an example of collaborative design in action. How does it help in the development process?",
      options: [
        "Leveraging Cross-Departmental Expertise",
        "Streamlining Manufacturing Processes",
        "Facilitating Resource Sharing",
        "Enhancing Aesthetic Appeal"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 34,
      question: "When building a team, it is critical to have a team with a -------------?",
      options: [
        "Singular Expertise",
        "Varied Skill Set",
        "Limited Experience",
        "Homogeneous Backgrounds"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 35,
      question: "When working as a team, what is important for each member to do?",
      options: [
        "Lower down their ego",
        "Be flexible",
        "Take roles in the team to solve the problem",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 36,
      question: "How do regulatory barriers help you?",
      options: [
        "Facilitate Unrestricted Innovation",
        "Ensure Public Health Protection and Legal Authority",
        "Simplify Administrative Processes",
        "Encourage Informal Practices"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 37,
      question: "What is the term used for “Previously granted patents and published patent applications”?",
      options: [
        "Precedent Documents",
        "Antecedent Papers",
        "Past Literature",
        "Prior Art"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 38,
      question: "A clear and concise design brief should include:",
      options: [
        "Project timeline",
        "User requirements",
        "Budget estimates",
        "Functional requirements"
      ],
      answers: [2, 4],
      type: "multiple"
    },
    {
      id: 39,
      question: "According to Mr. Rupesh, why is it important to think of a product category rather than a single product?",
      options: [
        "Diversification of Risk",
        "Brand Consistency",
        "Cost Reduction",
        "Singular Product Focus"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 40,
      question: "The first thing to do when presenting a problem statement is to ensure that it -------------.",
      options: [
        "Propose a Solution",
        "Identify Stakeholders",
        "Define Your Problem",
        "Establish a Timeline"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 41,
      question: "According to Prof.B. Ravi in the lecture: Healthcare and Innovation, which of the following is a major focus during the phase of creating a Proof of Concept?",
      options: [
        "Industrial techniques",
        "Demonstrating functionality",
        "Patent protection",
        "Brainstorming ideas"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 42,
      question: "According to Prof. B. Ravi, what is a crucial element for making it easier for ideas from academic institutions to contribute to society?",
      options: [
        "Financial collaboration",
        "Handshake between academic institutes and industry",
        "Competition between academic institutions and industry",
        "None of the above"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 43,
      question: "As discussed in the lecture, why do investors often avoid investing in medical devices?",
      options: [
        "Less demand for medical devices",
        "High manufacturing costs",
        "Poor success rates of the product",
        "None of the above"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 44,
      question: "As mentioned in the lecture: Med-Tech success stories, what impact did the innovation in the stethoscope have on the medical community during the COVID-19 pandemic?",
      options: [
        "Increased hospital admissions",
        "Improved patient communication",
        "Enhanced doctor-patient trust",
        "Facilitated continued medical services during isolation"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 45,
      question: "What is the purpose of 'pilot production' in the development stage of innovation?",
      options: [
        "Marketing and advertising",
        "Testing in the lab",
        "Changing design features as per user's feedback",
        "Filing patents"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 46,
      question: "According to Prof. B. Ravi, what is essential before you start looking into design solutions?",
      options: [
        "Marketing",
        "Problem definition and functional requirements",
        "Patent",
        "Clinical Immersion"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 47,
      question: "As discussed in the lecture: Med-Tech success stories at which stage of the innovation process do we file for a product's Intellectual property rights (IPR)?",
      options: [
        "Define",
        "Deliver",
        "Deploy",
        "Develop"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 48,
      question: "To whom can intellectual property rights (IPR) be licensed?",
      options: [
        "Startups",
        "Industry",
        "NGOs",
        "All the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 49,
      question: "As mentioned by Prof. B. Ravi in the lecture: Med-Tech Success Stories, what are the three golden rules while defining functional requirements(FR)?",
      options: [
        "Maximize the number of FR, Link between FR, Visualization",
        "Minimize the number of FR, Independency, precision",
        "Minimize the number of FR, Dependence, Complexity",
        "Maximize the number of FR, Independence, Simplicity"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 50,
      question: "What does TRL stand for?",
      options: [
        "Technological Resource Level",
        "Technology Readiness Levels",
        "Transition and Research Limits",
        "Test and Reliability Levels"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 51,
      question: "According to Ms. Shilpi Kumar, what is the role of design research and strategy in an organization?",
      options: [
        "Generating ideas",
        "Testing design concepts",
        "Acting as the glue between business operations and innovation efforts",
        "Building monuments"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 52,
      question: "What does Ms. Shilpi Kumar emphasize to apply to an organization to understand how to engage with stakeholders internally using a human-centered lens?",
      options: [
        "Lean methods",
        "Methods of Empathy and Research",
        "Product ideas",
        "Traditional methods"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 53,
      question: "As mentioned by Ms. Shilpi Kumar in the lecture: Human-Centered Innovation, where does the true value of design lie?",
      options: [
        "Technology only",
        "Intersection of people, technology, and business",
        "Creativity and ideation",
        "Marketing, ideation, and distribution channels"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 54,
      question: "According to Ms. Shilpi Kumar in the lecture: Human-Centered Innovation, what is the key to unlocking insights during an interview?",
      options: [
        "Asking complex questions",
        "Starting with secondary objectives",
        "Building rapport and trust",
        "Using a rigid structure"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 55,
      question: "What does Ms. Shilpi Kumar suggest to overcome language barriers during interviews in different countries?",
      options: [
        "Rely on assumptions",
        "Use only digital platforms",
        "Hire translators",
        "Conduct interviews in English only"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 56,
      question: "According to Mr. Dhayan Kumar, what is a common mistake that designers make when starting a business?",
      options: [
        "Overestimating their skills",
        "Ignoring logistics",
        "Focusing too much on creativity",
        "Disregarding the service aspect"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 57,
      question: "What does Mr. Dhayan Kumar in the lecture: Creating User Experience Design, state as a philosophy used in UX design?",
      options: [
        "Progressive disclosure",
        "Feature lists",
        "Rigid structures",
        "Collective efforts"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 58,
      question: "According to the lecture: Creating User Experience Design, which among the following is described as the business side of design?",
      options: [
        "Transparency",
        "Discipline",
        "Design collaboration",
        "Design management"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 59,
      question: "What are the three important qualities emphasized by Mr. Dhayan Kumar that the client looks for in a design agency?",
      options: [
        "Discipline, speed, and transparency",
        "Collaboration, speed, and quality",
        "Quality, speed, and transparency",
        "Innovation, predictability, and discipline"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 60,
      question: "According to Mr. Dhayan Kumar, what is crucial for designers to emphasize on the business side?",
      options: [
        "Sales Process",
        "Creative design",
        "Technical skills",
        "Prototyping"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 61,
      question: "Which of the following best completes the statement: 'We can humanize technology by being ________ to the needs of the customers.'",
      options: [
        "Indifferent",
        "Distant",
        "Empathetic",
        "Reserved"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 62,
      question: "In the opinion of Prof. Chakravarthy, what is key to the development of innovation and entrepreneurship?",
      options: [
        "Economic stability",
        "Design thinking",
        "Complacency",
        "Short-term focus"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 63,
      question: "How does ‘synectics’ contribute to the design process of a product?",
      options: [
        "Break mental barriers",
        "Divergent thinking",
        "Critical thinking",
        "Use direct & indirect analogies"
      ],
      answers: [1, 4],
      type: "multiple"
    },
    {
      id: 64,
      question: "According to Prof. Chakravarthy, “_______ is the key to Innovation”.",
      options: [
        "Market demand",
        "Funding",
        "Collaboration",
        "Competition"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 65,
      question: "Why is a collaborative model beneficial to entrepreneurship?",
      options: [
        "Provides access to resources",
        "More networking opportunities",
        "A sense of community",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 66,
      question: "Why is it important to think about other platforms and products, according to Mr. Kaustubh?",
      options: [
        "It provides a niche market",
        "Resource constraints",
        "For market competition",
        "Provides more avenues for monetization"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 67,
      question: "\"Pivot till you reach the sweet spot\". Based on this statement, what are the requirements for a business model to reach a sweet spot?",
      options: [
        "User needs",
        "Operational/tech possibilities",
        "Business goals",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 68,
      question: "Based on the Lean Canvas business model, three types of channels exist: ______, marketing channel, and payment channel.",
      options: [
        "Sales channel",
        "Design channel",
        "Competition channel",
        "Executive channel"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 69,
      question: "What are the key performance parameters that help track the success of your business?",
      options: [
        "Employee attendance metrics",
        "Revenue metrics",
        "Customer acquisition metrics",
        "Operational metrics"
      ],
      answers: [2, 3, 4],
      type: "multiple"
    },
    {
      id: 70,
      question: "Rearrange the following in the correct sequence in which a business is structured. I. Construct lean canvas for different customer segments II. Ask the ‘six questions’ III. Combine everything into one business model canvas",
      options: [
        "I - II - III",
        "III - II - I",
        "II - III - I",
        "II - I - III"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 71,
      question: "According to Mr. Rakesh, startups are not just about funding but also _______.",
      options: [
        "Immediate profitability",
        "Conventional work hours",
        "Risk aversion",
        "Identifying the right product to be built"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 72,
      question: "How can a minimum viable product (MVP) assist with product development?",
      options: [
        "Attract early-adopter customers",
        "Brand reputation",
        "Validate the product idea",
        "Short-term focus"
      ],
      answers: [1, 3],
      type: "multiple"
    },
    {
      id: 73,
      question: "How can your business benefit from identifying early adopters?",
      options: [
        "Competitive disadvantage",
        "Validate market demands",
        "Slow revenue generation",
        "Requires less marketing"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 74,
      question: "Identify UBER's Unique Value Propositions (UVPs) from the following based on the case study:",
      options: [
        "Convenience",
        "Safety",
        "Long-distance travels",
        "Flexibility"
      ],
      answers: [1, 4],
      type: "multiple"
    },
    {
      id: 75,
      question: "What is the most important thing to convince an investor when presenting a Lean Model Canvas?",
      options: [
        "Oversimplify your challenges",
        "Sell your vision",
        "Make unrealistic claims",
        "Be vague about specific details"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 76,
      question: "What makes a product complete, in the opinion of Mr. Manoj, based on its characteristics?",
      options: [
        "Efficiency & smartness",
        "Traditionality & exclusivity",
        "Complexity & efficiency",
        "Smartness & exclusivity"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 77,
      question: "When launching a new product, what is an important factor to consider?",
      options: [
        "Assumption about customer preferences",
        "Ignore competition",
        "Focus solely on product features",
        "Differentiate its value proposition"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 78,
      question: "For startups of a relatively new generation, what strategic approach is helpful?",
      options: [
        "Brand expansion strategy",
        "Digital strategy",
        "Sustainability strategy",
        "Innovation strategy"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 79,
      question: "According to Mr. Manoj, what must be ensured for your product to remain competitive in the market?",
      options: [
        "Price stabilisation",
        "Limited scalability",
        "Consistent product evolution",
        "Limited product innovations"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 80,
      question: "What other qualities, other than intelligence and efficiency, did customers find appealing in their products, according to the Atomberg case study?",
      options: [
        "Complexity in design",
        "Form factor of the motor",
        "Difference in materials",
        "Incompatibility"
      ],
      answers: [2, 3],
      type: "multiple"
    },
    {
      id: 81,
      question: "Which of the following stages constitute an entrepreneurship journey's ‘Germination stage’?",
      options: [
        "Develop your own startup idea",
        "Ideation to prototype",
        "Sustaining the startup",
        "Knowing the basics of entrepreneurship"
      ],
      answers: [1, 4],
      type: "multiple"
    },
    {
      id: 82,
      question: "According to Prof. Renu John, ‘Be Able’ team mainly focused on developing _________ during the Covid Period.",
      options: [
        "Interactive and Culturally appropriate VR Games",
        "Clinical Trials",
        "Making aesthetic improvements to the Product",
        "Development of the business plan"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 83,
      question: "According to Prof. Nakul in Module 9, each startup idea has a complex relationship with",
      options: [
        "Substitutes, Customers, Complements, Suppliers.",
        "Capital, Supply Chain, Design, Customers.",
        "Reserves, Design, Suppliers, Capital.",
        "Substitutes, Capital, Customers, Supply Chain."
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 84,
      question: "As mentioned by Prof. Nakul, what is the main takeaway from the Nintendo case study?",
      options: [
        "The entrepreneur has to adapt to market pressures",
        "The entrepreneur should be ready to face setbacks and support the organization during that period",
        "The entrepreneur should not depend on funding from multinational corporations",
        "The entrepreneur should be flexible with his business pitch"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 85,
      question: "Armable was conceived as a device for ______________.",
      options: [
        "Interactive leg rehabilitation",
        "Interactive VR games for hand-eye coordination",
        "Interactive arm rehabilitation",
        "Weight training"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 86,
      question: "What are the major features offered by Fampay?",
      options: [
        "Prepaid cards for teens",
        "App to monitor spending for parents",
        "Crypto wallet for teens",
        "Credit cards for Family Members"
      ],
      answers: [1, 2],
      type: "multiple"
    },
    {
      id: 87,
      question: "What type of funding is available to startups accepted into the incubation program?",
      options: [
        "Only grants for prototypes and expenses",
        "Seed funding and equity investment",
        "No funding provided",
        "Both (a) and (b)"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 88,
      question: "What resources are offered by IIT Hyderabad through its incubation programs?",
      options: [
        "Financial aid for prototyping and operational expenses",
        "Working space and office facilities",
        "Networking opportunities with investors and partners",
        "Mentorship from experienced entrepreneurs and industry experts"
      ],
      answers: [1, 2, 3, 4],
      type: "multiple"
    },
    {
      id: 89,
      question: "Your startup has developed a groundbreaking medical device prototype, but you need funding and expertise to conduct clinical trials. Which IIT Hyderabad resource would be most helpful in this situation?",
      options: [
        "E-Cell",
        "CfHE",
        "ITIC Incubator",
        "ASIEA"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 90,
      question: "What is the purpose of the clinical immersion phase of the fellowship program?",
      options: [
        "To shadow clinicians and identify unmet needs",
        "To develop a marketing strategy",
        "To raise funding for a startup",
        "To network with potential investors"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 91,
      question: "What is the primary goal of Synectics in design?",
      options: [
        "To generate a single, perfect solution to a problem",
        "To encourage exploration and break conventional thinking",
        "To reach consensus among team members quickly and efficiently",
        "To apply detailed technical analysis to refine existing concepts"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 92,
      question: "What is the goal of cluster formation in the process?",
      options: [
        "To categorise and eliminate irrelevant ideas.",
        "To group related ideas to discover patterns and connections.",
        "To rank and prioritise the most promising ideas.",
        "To playfully challenge and refine existing ideas."
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 93,
      question: "What is the primary purpose of a Proof of Concept (POC)?",
      options: [
        "To generate a final product for market launch.",
        "To validate the feasibility and viability of a new idea or concept.",
        "To secure funding for further development.",
        "All of the above."
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 94,
      question: "What according to Prof. Kumaresan is the worst thing he did to his Point -Of-Sales Product?",
      options: [
        "Not having team",
        "Taking a lot of time to go to market",
        "Using open-source solutions",
        "None of the above"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 95,
      question: "What is the 'honeybee network' and what does it do?",
      options: [
        "A network of beekeepers who share best practices",
        "A platform that connects entrepreneurs with investors only",
        "A magazine that publishes articles about innovation",
        "An ecosystem that helps grassroots innovators bring their ideas to reality"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 96,
      question: "Prof. Anil Gupta describes different types of networks. Which of the following is NOT mentioned as a characteristic of a strong entrepreneurial network?",
      options: [
        "Members of similar backgrounds and expertise",
        "Regular communication and knowledge sharing",
        "Mutual trust and support",
        "Diversity of skills and perspectives"
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 97,
      question: "According to Dr Anamika Dey, what is a key advantage of 'social capital' as a currency for entrepreneurs?",
      options: [
        "Its ability to be easily converted into cash",
        "It's potential to attract new investors",
        "Its role in building trust and reputation",
        "Its usefulness for purchasing raw materials"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 98,
      question: "The Module mentions the example of 'MittiCool' as a successful grassroots innovation because it:",
      options: [
        "Offered a high-end product catering to wealthy urban consumers.",
        "Leveraged traditional knowledge and local materials to address a basic need and set up a distribution network",
        "Utilized cutting-edge nanotechnology to revolutionise refrigeration.",
        "All of the above"
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 99,
      question: "Which of these is an innovation spearheaded by Manskhbhai Patel?",
      options: [
        "Banana leaf weaving machine",
        "Lead-free toys",
        "Cotton stripper Machine",
        "None of the above"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 100,
      question: "Based on the lecture, which statement best describes the relationship between networks and entrepreneurship?",
      options: [
        "Strong networks guarantee entrepreneurial success, regardless of individual skills or ideas.",
        "Networks are irrelevant in today's digital world, where entrepreneurs can succeed through online platforms.",
        "Building and nurturing diverse networks significantly enhances an entrepreneur's chances of success.",
        "Entrepreneurs should focus on maximizing individual profits and avoid relying on external networks."
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 101,
      question: "Team 'See Together’s' initial idea involved creating a physical product called Braille Stamp. What were the main drawbacks of this idea?",
      options: [
        "High cost of manufacturing",
        "Degradation of markings",
        "Language barrier",
        "It was not accessible to people with limited dexterity"
      ],
      answers: [1, 2, 3],
      type: "multiple"
    },
    {
      id: 102,
      question: "What is the core function of 'See Together’s' proposed digital product?",
      options: [
        "To provide emotional support and companionship",
        "To translate text into speech and vice versa",
        "To connect visually impaired people with sighted volunteers for assistance",
        "To offer educational resources and training programs"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 103,
      question: "What is the main advantage of the ‘See Together’ team’s proposed solution over existing AI-based alternatives?",
      options: [
        "Lower cost and wider accessibility",
        "Integration with smart home devices",
        "Personalized recommendations and learning algorithms",
        "Human-to-human interaction and emotional support"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 104,
      question: "During their research, the ‘See Together’ team learned that people with visual impairments:",
      options: [
        "Prefer human interaction over AI assistance.",
        "Are comfortable using English for all transactions.",
        "Rarely face challenges with existing mobile apps.",
        "Are not interested in receiving assistance from strangers."
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 105,
      question: "Who are the primary target customers for Space_d's platform?",
      options: [
        "Individual office employees",
        "Small businesses and startups",
        "Human resource departments in large companies",
        "Corporate wellness and fitness centres"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 106,
      question: "What is/are a potential risk factor for Space_d's business model?",
      options: [
        "Reliance on a limited number of corporate clients",
        "Dependence on technological advancements and trends",
        "Increasing competition from other employee well-being providers",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 107,
      question: "What is the main function of the Hocus Focus headgear?",
      options: [
        "Play music for relaxation",
        "Monitor brainwaves during meditation",
        "Create targeted tactile sensations for focus",
        "Block out external noise"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 108,
      question: "Who are the primary target customers for Hocus Focus?",
      options: [
        "Professional athletes",
        "People with chronic pain",
        "Individuals interested in meditation",
        "Children with ADHD"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 109,
      question: "According to Prof. Anuradha, for a product to be successful, it has to be __________ and __________.",
      options: [
        "Complex and Relevant",
        "Simple and elegant",
        "Relevant and Differentiated",
        "Different and Complex"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 110,
      question: "What were the suggestions given by Prof. Purushottaman to the Hocus Focus Team?",
      options: [
        "Never go cheap on electronics in distributed B2C Model",
        "Provide more customisation options to users",
        "The name Hocus Focus can be rethought",
        "Market the product for use when travelling"
      ],
      answers: [1, 3, 4],
      type: "multiple"
    },
    {
      id: 111,
      question: "Who are the main customers and users identified by the scoop team respectively?",
      options: [
        "Parents and children (5-10 yrs)",
        "Children and Parents",
        "Parents and Toddlers (1-3 yrs)",
        "Parents and Hospitals"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 112,
      question: "What is the product idea explored by team Scoop?",
      options: [
        "Educational apps for toddlers.",
        "Playgrounds for toddlers with special needs.",
        "Interactive and playful mealtime tools for toddlers.",
        "Nutritional supplements for picky eaters."
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 113,
      question: "Which of the following is NOT a product idea mentioned by Team Scoop for tackling the identified problem?",
      options: [
        "A seesaw plate that encourages balanced eating",
        "A fidget plate with sensory elements for distraction.",
        "A subscription box with new mealtime tools each month.",
        "A food ball designed for self-feeding practice."
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 114,
      question: "Which of the following best describes the core idea of a beachhead strategy used by team ‘Taufa’?",
      options: [
        "Launching a full-scale attack on a large target market.",
        "Establishing a strong foothold in a smaller, niche market.",
        "Building a loyal customer base before expanding to new markets.",
        "Creating a disruptive product that will quickly overthrow established competitors."
      ],
      answers: [2],
      type: "single"
    },
    {
      id: 115,
      question: "What are some of the problems identified with current backpacks?",
      options: [
        "They are not aesthetically pleasing.",
        "They are made of poor-quality materials.",
        "They do not have enough pockets or compartments.",
        "They are often too heavy for children to carry."
      ],
      answers: [1, 2, 3, 4],
      type: "multiple"
    },
    {
      id: 116,
      question: "What are the Unfair advantages that Swagpack has over its competitors?",
      options: [
        "Automated Production Cycle",
        "Variety of designs",
        "Silicone Moulding for Water bottles",
        "Partnership with Marvel studios"
      ],
      answers: [1, 3],
      type: "multiple"
    },
    {
      id: 117,
      question: "What is the feedback offered by Prof. Nakul Parmeshwer to team SwagPack?",
      options: [
        "Rethink the cost structure",
        "Outsource manufacturing to subcontractors",
        "Explore Professional market",
        "All of the above"
      ],
      answers: [4],
      type: "single"
    },
    {
      id: 118,
      question: "What is the primary target group for the 'WeRcontent' products?",
      options: [
        "Kindergarten to 2nd grade",
        "3rd to 5th grade",
        "5th to 10th grade",
        "11th to 12th grade"
      ],
      answers: [3],
      type: "single"
    },
    {
      id: 119,
      question: "What is the key difference between the team WeRcontent and Foton VR?",
      options: [
        "The student's company focuses on independent learning, while Foton VR focuses on interactive activities.",
        "The student's company is targeting a younger age group than Foton VR.",
        "The students' company is using a different type of VR technology than Foton VR.",
        "The students' company is not developing its own content, unlike Foton VR."
      ],
      answers: [1],
      type: "single"
    },
    {
      id: 120,
      question: "What is the overall goal of Lucid?",
      options: [
        "To make parents and children use technology more.",
        "To bridge the generational communication gap between parents and children.",
        "To make parents and children spend more time together.",
        "All of the above"
      ],
      answers: [2],
      type: "single"
    }
];

export default quizQuestions;