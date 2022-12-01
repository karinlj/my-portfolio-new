import { IProject } from "../interfaces";
//import { StyledH3 } from "./styles/general";

interface IProps {
  project: IProject;
}
const SingleProject = ({ project }: IProps) => {
  const {
    title,
    link,
    image,
    releaseDate,
    techniques,
    description,
    acknowledgement,
  } = project.fields;

  return (
    <article className="project">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project_link"
        aria-label="project url or gitHub repo"
      >
        link
      </a>
      <div className="featured_image">
        <img src={image.fields.file.url} alt={image.fields.title} />
      </div>
      <div className="content_container">
        <h3 className="title">{title}</h3>
        <div className="small_text">
          <div className="techniques">
            {techniques.map((technique, index) => {
              return (
                <div key={index} className="technique">
                  {technique}
                  {index === techniques.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
          <div className="date">
            <span>Finished:</span>
            {new Date(releaseDate).toLocaleDateString()}
          </div>

          {acknowledgement ? (
            <div className="acknowledgement">
              <span>Thanks to:</span>
              {acknowledgement}
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};

export default SingleProject;
