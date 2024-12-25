import { useState } from "react";

export default function Profile() {
  const [skills, setSkills] = useState([
    "React",
    "JavaScript",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
    "TypeScript",
    "MongoDB",
  ]);
  const [skillInput, setSkillInput] = useState("");
  const [isAddSkillbuttonVisible, setisAddSkillbuttonVisible] = useState(true);
  return (
    <div className="profile-page">
      <div className="profile-card">
        <header className="profile-header">
          <img
            className="profile-photo"
            src="https://picsum.photos/350"
            alt="Profile"
          />
          <div className="profile-info">
            <span className="job-title">Software Developer</span>
            <h1 className="name">John Doe</h1>
            <p className="bio">
              Passionate software developer with a keen interest in building
              scalable web applications and exploring new technologies.
            </p>
          </div>
        </header>

        <section className="experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>Senior Developer - Tech Solutions Inc.</h3>
            <p className="date">2018 - Present</p>
            <p className="description">
              Led a team of developers in creating innovative web applications
              using React and Node.js.
            </p>
          </div>
          <div className="job">
            <h3>Junior Developer - StartUp Co.</h3>
            <p className="date">2015 - 2018</p>
            <p className="description">
              Developed and maintained multiple client websites using JavaScript
              and PHP.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
                <svg
                  onClick={() => setSkills(skills.filter((s) => skill !== s))}
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#808080"
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                  ></path>
                </svg>
              </span>
            ))}
          </div>
        </section>
        <section>
          {isAddSkillbuttonVisible ? (
            <svg
              onClick={() => setisAddSkillbuttonVisible(false)}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#808080"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
              ></path>
            </svg>
          ) : (
            <>
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
              <button
                onClick={(e) => {
                  if (skills.includes(skillInput)) {
                    alert("This skill already exists!");
                    return;
                  }
                  setSkills([...skills, skillInput]);
                  setSkillInput("");
                  setisAddSkillbuttonVisible(true);
                }}
              >
                Add Skill
              </button>
            </>
          )}
        </section>
        <section class="socialmed">
          <a
            href={"https://www.facebbok.com"}
            className="social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            >
              <path
                fill="#1877f2"
                d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              />
              <path
                fill="#fff"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
              />
            </svg>
          </a>
          <a
            href={"https://www.twitter.com"}
            className="social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
            >
              <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
            </svg>
          </a>
          <a
            href={"https://www.linkedin.com"}
            className="social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0a66c2" rx="60" />
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                />
              </g>
            </svg>
          </a>
          <a
            href={"https://www.google.com"}
            className="social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
            >
              <path
                fill="#fff"
                d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
              />
              <path
                fill="#e33629"
                d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
              />
              <path
                fill="#f8bd00"
                d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
              />
              <path
                fill="#587dbd"
                d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
              />
              <path
                fill="#319f43"
                d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
              />
            </svg>
          </a>
        </section>
      </div>

      <style>
        {`
  .socialmed{
   padding: 2rem 1rem;
  
  }
  .social-link {
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f3f4f6;
    transition: background-color 0.2s;
  }

  .social-link:hover {
    background-color: #e5e7eb;
  }

  .social-link svg {
    width: 40px;
    height: 40px;
    fill: #4b5563;
  }
`}
      </style>

      <style>{`
        .profile-page {
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 2rem 1rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .profile-card {
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          max-width: 800px;
          width: 100%;
        }

        .profile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .profile-photo {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .profile-info {
          text-align: center;
        }

        .job-title {
          color: #4f46e5;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .name {
          margin: 0.5rem 0;
          font-size: 2rem;
          font-weight: 800;
          color: #1f2937;
        }

        .bio {
          color: #6b7280;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 1rem auto 0;
        }

        .experience, .skills {
          padding: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .job {
          margin-bottom: 1.5rem;
        }

        .job h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .job .date {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .job .description {
          color: #4b5563;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background-color: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .profile-header {
            flex-direction: row;
            text-align: left;
          }

          .profile-photo {
            margin-right: 2rem;
            margin-bottom: 0;
          }

          .profile-info {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
