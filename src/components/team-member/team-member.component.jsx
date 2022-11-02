import { useState } from 'react';

const TeamMember = ({ img, imgAlt, memberName, occup, skills, memberText }) => {
    const [change, setChange] = useState(false);
    const handleClick = () => {
        console.log('clicked');
        setChange(!change);
    };

    return (
        <div className="team-member">
            <img src={img} alt={imgAlt} className="team-member-img" />
            <h2 className="team-member-name">
                {memberName} <span>({occup})</span>
            </h2>
            <ul className="team-member-skills">
                {skills.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <a href="/" className="projects-btn">
                Projects
            </a>
            <div
                className={change ? 'story-btn change-btn' : 'story-btn'}
                title="My story"
                onClick={handleClick}
            >
                <div className="story-btn-line"></div>
            </div>
            <div className={change ? 'story change-story' : 'story'}>
                <h4 className="story-heading">About Me</h4>
                <p className="story-paragraph">{memberText}</p>
            </div>
        </div>
    );
};

export default TeamMember;
