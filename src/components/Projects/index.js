import React from 'react'

import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Project</Title>
        <Desc>
        I have worked on both backend and frontend projects. Here are some of my project
        </Desc>
        
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
         
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects