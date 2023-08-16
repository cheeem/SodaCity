import fs from 'fs';

const projects = [];

let fileContents = `import type { Project } from "./main.ts";\n`;

fs.readdirSync('./img/Projects').forEach(project => {
    const images = fs.readdirSync(`./img/Projects/${project}`);
    projects.push({
        name: project,
        images,
    })
});

projects.forEach(project => {
    project.images.forEach(image => {
        fileContents += `import ${image.split('.')[0]} from '../img/Projects/${project.name}/${image}';\n`;
    });
});

fileContents += `export default [${
projects
    .map(project => 
        `
    { 
        name: "${project.name}", 
        images: [${project.images.map(image => image.split('.')[0]).join(', ')}]
    }`).join(",")}\n] satisfies Project[];`;

console.log(fileContents);

fs.writeFileSync('./src/projects.ts', fileContents);