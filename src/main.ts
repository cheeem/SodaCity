import projects from './projects.ts';

export type Project = {
    name: string,
    images: any[],
}

loadProjects(projects);

async function loadProjects(projects: Project[]) {

    let projectsInnerHtml: string = ``;

    for(let i = 0; i < projects.length; i++) {

        const images = projects[i].images;
    
        for(let j = 0; j < images.length; j++) {
                
            projectsInnerHtml += `
                <li> 
                    <img src="${images[j]}" alt=${projects[i].name} /> 
                    <div class="content"> 
                        <h5> ${projects[i].name} </h5>
                    <div> 
                </li>
            `;
    
        }
    
    }
    
    document.querySelector('#projects')!.innerHTML = projectsInnerHtml;

}






