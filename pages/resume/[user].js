function Resume({ data }) {
    const { description, fullName, title } = data.userProfile
    const experiences = data.experiences
    const skills = data.skills
    return (
        <div>
            {fullName}
            {description}
            {title}
            <h3>Experiences</h3>
            <ul>
                {experiences.map((exp) => (
                    <li key={exp.title}>
                        {exp.title}
                        {exp.company}
                        {exp.description}
                        {exp.startDate}
                        {exp.endDate}
                    </li>
                ))}
            </ul>

            <ul>
                {skills.map((skill) => (
                    <li key={skill.skillName}>
                        {skill.skillName}
                        {skill.endorsementCount}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {

    const user = context.params.user

    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/user/${user}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Resume






