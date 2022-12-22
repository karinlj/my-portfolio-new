import { useState, useEffect } from "react";
import { client } from "../../client";
import { Filter } from "../Filter";
import HeaderPages from "../layout/HeaderPages";
import SingleProject from "../SingleProject";
import { IProject } from "../../interfaces";
import { StyledContentLoading, StyledProjects } from "../styles/general";

const PersonalProjects = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState(false);
  const abortContrl = new AbortController();
  //gets values from filter-comp
  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState<string[]>(
    []
  );
  const activeFilter = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
    { id: 4, name: "aureliajs", isChecked: true },
    { id: 5, name: "typescript", isChecked: true },
  ];

  //functon with names of checked items as parameter from Filter comp
  const displayItems = (names: string[]) => {
    setCheckedTecniqueNames(names);
  };
  //help function
  const intersection = (array1: string[], array2: string[]) => {
    return array1.filter((element) => {
      //return true or false depending on if array2 includes one element from array1
      return array2.includes(element);
    });
  };
  const getPersonalProjects = () => {
    client
      .getEntries({
        content_type: "personalProject",
        signal: abortContrl.signal,
        order: "-fields.releaseDate",
      })
      .then((response) => {
        setProjects(response.items as any);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    setLoading(true);
    getPersonalProjects();
    return () => {
      abortContrl.abort();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <HeaderPages
        heading="Personal Projects"
        subHeading="Recent projects to explore various tecniques."
      />
      <StyledProjects>
        <div className="container">
          <div className="row">
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
                    return intersection(
                      project.fields.techniques,
                      checkedTecniqueNames
                    ).length > 0 ? (
                      <div className="col-12 col-sm-6 col-lg-4">
                        <SingleProject project={project} key={project.sys.id} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </StyledProjects>
    </main>
  );
};
export default PersonalProjects;
