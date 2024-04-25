import { useState } from "react";

export function SubjectList(props) {
    const subjectlist = props.data;
    const [subjects, setSubjects] = useState(subjectlist);
    
    function addSubject() {
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(nval);
            return nval;
        });
    }

    return (
        <>
            <p>Show list: </p>
            <ol>
                {subjects.map((subject) => {
                    return <li key={subject.code}>{subject.code} - {subject.description}</li>;
                })}
            </ol>
            <button onClick={addSubject}>Add Subject</button>
        </>
    );
}
