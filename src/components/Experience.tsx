import { motion } from 'framer-motion';

const experiences = [
  {
    year: 'September 2025 — December 2025',
    title: 'Web Development Bootcamp',
    company: 'App Development Club @ UMD',
    description: [
      'Gained Skills in Git, React, HTML/CSS, Javascript, FastAPI, MongoDB',
      'Mastered Full-Stack Development through intensive project-based learning',
      'Collaborated with 5 peers to develop a full stack application',
      'Enhanced professional development through resume optimization and technical interview preparation',
    ],
    skills: ['Git, React, HTML/CSS, Javascript, FastAPI, MongoDB']
  }
];

const additionalExperience = [
  {
    year: 'January 2023 - February 2024',
    title: 'Food Pantry Volunteer',
    company: 'Seeds of Hope',
    description: [
      'Assisted in weekly food distribution by setting up tables and organizing food items into evenly distributed boxes for community members in need, packaging around 200 boxes each week.',
      'Ensured a smooth and respectful experience for recipients through efficient communication and organization.',
      'Collaborated with a team of volunteers to serve hundreds of families each week, contributing to food security in the local community.'
    ],
    skills: ['Teamwork', 'Organization', 'Community Service', 'Communication']
  },
  {
    year: 'August 2023 - May 2025',
    title: 'Team Member',
    company: 'Relay For Life',
    description: [
      'Participated in the annual overnight Relay for Life event to raise funds and awareness for cancer research, personally contributing 100 each year, with my team contributing around 3k a year.',
      'Helped organize and set up team tent and coordinated activities for event attendees.',
      'Developed skills in event planning, teamwork, and community engagement while supporting a meaningful cause.'
    ],
    skills: ['Event Planning', 'Fundraising', 'Teamwork', 'Community Engagement']
  },
  {
    year: 'August 2022 - May 2025',
    title: 'Historian',
    company: 'Class of 25 Class Council',
    description: [
      'Managed the class Instagram page by designing and posting graphics to share updates on events, fundraisers, and school activities.',
      'Yearly Fundraiser for our senior prom, made around 2k profit each year.',
      'Contributed to the planning and execution of senior prom, coordinating logistics, themes, and promotions with the council.',
      'Strengthened skills in communication, social media management, event planning, and teamwork.'
    ],
    skills: ['Social Media Management', 'Graphic Design', 'Event Planning', 'Communication']
  }
];

const education = [
  {
    year: 'August 2025 - Present',
    degree: 'Computer Science B.S',
    institution: 'University of Maryland',
    location: 'College Park, MD',
    description: [
      'Relevant Coursework: Calculus 2, Linear Algebra, Object Oriented Programming, and more.',
    ],
    gpa: '3.85/4.0'
  },
  {
    year: 'August 2025 - Present',
    degree: 'Philosophy, Minor',
    institution: 'University of Maryland',
    location: 'College Park, MD',
    description: [
      'Relevant Coursework: Bioethics, Wisdom Through Cog. Science'
    ],
    gpa: '4.0'
  },
  {
    year: 'August 2021 - May 2025',
    degree: 'High School Diploma',
    institution: 'Newsome High School',
    location: 'Lithia, FL',
    description: [
      
    ],
    gpa: '7.8'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-[150px]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px]"
          style={{ color: 'var(--text-color)' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Experience</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Professional journey in technology and development
          </p>
        </motion.div>

        <div className="space-y-[80px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-[200px_1fr] gap-16"
            >
              <div className="text-xl font-medium pt-3" style={{ color: 'var(--text-color)' }}>
                {exp.year}
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{exp.title}</h3>
                <h4 className="text-2xl mb-6" style={{ color: 'var(--text-color)' }}>{exp.company}</h4>
                <ul className="text-lg mb-8 max-w-2xl leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px] mt-[150px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Additional Experience</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Other professional roles and experiences
          </p>
        </motion.div>

        <div className="space-y-[80px]">
          {additionalExperience.map((exp, index) => (
            <motion.div
              key={`additional-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-[200px_1fr] gap-16"
            >
              <div className="text-xl font-medium pt-3" style={{ color: 'var(--text-color)' }}>
                {exp.year}
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{exp.title}</h3>
                <h4 className="text-2xl mb-6" style={{ color: 'var(--text-color)' }}>{exp.company}</h4>
                <ul className="text-lg mb-8 max-w-2xl leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px] mt-[150px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Education</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="space-y-[80px]">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-[200px_1fr] gap-16"
            >
              <div className="text-xl font-medium pt-3" style={{ color: 'var(--text-color)' }}>
                {edu.year}
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-color)' }}>{edu.degree}</h3>
                <h4 className="text-2xl mb-2" style={{ color: 'var(--text-color)' }}>{edu.institution}</h4>
                <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>{edu.location}</p>
                <ul className="text-lg mb-6 max-w-2xl leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
                  {edu.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1" style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                  <strong>GPA:</strong> {edu.gpa}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
