import React, { useState, useEffect } from "react";
import { Filter } from "../Filter";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import SingleProject from "../SingleProject";
import { IProject } from "../../interfaces";
import { StyledContentLoading, StyledProjects } from "../styles/general";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState(false);
  const abortContrl = new AbortController();
  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState<string[]>(
    []
  );
  const activeFilter = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
  ];
  //functon with names of checked items as parameter from Filter comp
  const displayItems = (names: string[]) => {
    //set state
    setCheckedTecniqueNames(names);
  };

  //help function
  const intersection = (array1: string[], array2: string[]) => {
    return array1.filter((element) => {
      //return true or false depending on if array2 includes one element from array1
      return array2.includes(element);
    });
  };
  const getProjects = () => {
    client
      .getEntries({
        content_type: "project",
        signal: abortContrl.signal,
        order: "-fields.releaseDate",
      })
      .then((response) => {
        setProjects(response.items as any); // 👈️ type assertion
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get project from contentful
  useEffect(() => {
    setLoading(true);
    getProjects();
    return () => {
      abortContrl.abort();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <HeaderPages heading="Client Projects" subHeading="My Client Projects." />
      <StyledProjects>
        <div className="container">
          <div className="row my-gutters">
            <div className="col-12 col-md-3 col-lg-2">
              <Filter displayItems={displayItems} activeFilter={activeFilter} />
            </div>

            <div className="col-12 col-md-9 col-lg-10">
              <div className="row my-gutters">
                {loading && (
                  <StyledContentLoading>...Loading</StyledContentLoading>
                )}
                {projects &&
                  //if project.techniques includes name from checkedTecniqueNames
                  projects.map((project) => {
                    //[]returns true
                    return intersection(
                      project.fields.techniques,
                      checkedTecniqueNames
                    ).length > 0 ? (
                      <div className="col-12 col-sm-6 col-lg-4">
                        <SingleProject project={project} key={project.sys.id} />
                      </div>
                    ) : null;
                  })}
              </div>
            </div>
          </div>
        </div>
      </StyledProjects>
    </main>
  );
};
export default Projects;
