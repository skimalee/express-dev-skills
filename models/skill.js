const skills = [
    { skill: 'HTML', done: true },
    { skill: 'CSS', done: true },
    { skill: 'JavaScript', done: true },
    { skill: 'Python', done: false },
    { skill: 'React', done: false }
];


function getAll(){
    return skills;
}

function getOne(id) {
    return skills[id];
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update(skill, id) {
    skills.splice(id, 1, skill);
  }

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}