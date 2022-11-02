import TeamMember from '../../team-member/team-member.component';

const TeamSection = () => {
    return (
        <section className="team-section">
            <h1 className="section-heading">Team</h1>
            <div className="team-wrapper">
                <TeamMember
                    img={require('../../../images/team-member-1.jpg')}
                    imgAlt={'team member 1'}
                    memberName={'Nick Smith'}
                    occup={'Designer'}
                    memberText={
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni! Beatae, consectetur architecto illum enim reprehenderit quo dolores neque necessitatibus quaerat, adipisci ratione atque expedita, doloribus alias? Illo ex atque est assumenda possimus, eveniet cumque. Labore veniam porro est dolorem?'
                    }
                    skills={['PS', 'Figma', 'HTML5', 'CSS3', 'Ai']}
                />
                <TeamMember
                    img={require('../../../images/team-member-2.jpg')}
                    imgAlt={'team member 1'}
                    memberName={'Bob Brown'}
                    occup={'Designer'}
                    memberText={
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni! Beatae, consectetur architecto illum enim reprehenderit quo dolores neque necessitatibus quaerat, adipisci ratione atque expedita, doloribus alias? Illo ex atque est assumenda possimus, eveniet cumque. Labore veniam porro est dolorem?'
                    }
                    skills={['Ae', 'Pr', 'HTML5', 'CSS3', 'Inkscape']}
                />
                <TeamMember
                    img={require('../../../images/team-member-3.jpg')}
                    imgAlt={'team member 1'}
                    memberName={'John Doe'}
                    occup={'Developer'}
                    memberText={
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni! Beatae, consectetur architecto illum enim reprehenderit quo dolores neque necessitatibus quaerat, adipisci ratione atque expedita, doloribus alias? Illo ex atque est assumenda possimus, eveniet cumque. Labore veniam porro est dolorem?'
                    }
                    skills={[
                        'JavaScript',
                        'ReactJS',
                        'NodeJS',
                        'MongoDB',
                        'Python'
                    ]}
                />
            </div>
        </section>
    );
};

export default TeamSection;
