function Education({education}) {
    return (
        <div>
            <section className="card">
                <h2>Education</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Year Graduated</th>
                            <th>Program</th>
                            <th>School</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {education.map((item, index) => (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{item.program}</td>
                                <td>{item.school}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </section>
        </div>
    );
  }
export default Education;