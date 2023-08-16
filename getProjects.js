import fs from 'fs';

const projects = [];

fs.readdirSync('./img/Projects').forEach(projectName => {
    const images = fs.readdirSync(`./img/Projects/${projectName}`);
    projects.push({
        name: projectName,
        images,
    });
});

fs.writeFileSync('./src/projects.ts', `import type { Project } from "./main.ts";\nexport default ${JSON.stringify(projects)} satisfies Project[]`);