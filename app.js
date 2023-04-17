import express, { response } from 'express';

const app = express();
const students = [
    "mohamed",
    "ahmed",
    "mahmoud",
    "samy",
    "ayman",
    "elsayed",
    "hassan"

]
const studentsfunction = (request, respose) => {
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {



        output += "<li>" + students[i] + "<li>"
    }

    output += '<ul>'


    respose.send(output)


};

app.get('/students', studentsfunction)

app.listen(5000);