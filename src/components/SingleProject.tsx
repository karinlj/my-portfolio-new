import { IProject } from "../interfaces";
import { StyledH3 } from "./styles/general";
import styled from "styled-components";
import { device, colors, themeSettings } from "./styles/variables";

const StyledProject = styled.article.attrs({
  className: "styled_project",
})`
  transition: all 0.25s ease-out;
  color: ${colors.text_color_dark};
  background: ${colors.themeLightHeadingcolor};
  height: auto;
  position: relative;
  margin-bottom: 4rem;
  border-radius: ${themeSettings.themeBorder_radius};
  box-shadow: ${themeSettings.$themeBox_shadow};
  @media ${device.mobileM} {
    height: 28rem;
  }
  @media ${device.desktopL} {
    height: 30rem;
  }
  &:hover {
    div,
    h3,
    p {
      color: ${colors.linkcolor};
      transition: 0.25s ease-in-out;
    }
  }
`;

const StyledProjectLink = styled.a.attrs({
  className: "styled_project_link",
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  color: transparent;
  text-decoration: none;
  &:focus {
    outline: solid 2px $textcolor;
    outline-offset: 5px;
    border-radius: 1px;
  }
`;

const StyledImageContainer = styled.div.attrs({
  className: "styled_image_container",
})`
  border-top-left-radius: ${themeSettings.themeBorder_radius};
  border-top-right-radius: ${themeSettings.themeBorder_radius};
`;

const StyledImage = styled.img.attrs({
  className: "styled_image",
})`
  border-top-left-radius: ${themeSettings.themeBorder_radius};
  border-top-right-radius: ${themeSettings.themeBorder_radius};
  width: 100%;
  object-fit: cover;
  height: 100%;
  max-width: 100%;
`;

const StyledContentContainer = styled.section.attrs({
  className: "styled_content_container",
})`
  padding: 1rem;
  min-height: 15rem;
`;

const StyledTitle = styled(StyledH3)`
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: ${colors.themeHeadingcolor_dark};
  font-weight: 600;
`;

const StyledMetaText = styled.section.attrs({
  className: "styled_meta_text",
})`
  div {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.7rem;
    margin-right: 0.5rem;
    color: ${colors.text_gray};
    span {
      margin-right: 0.5rem;
      letter-spacing: 0.1px;
      font-weight: 500;
    }
    .technique {
      text-transform: lowercase;
      color: ${colors.linkcolor};
      display: inline;
      font-weight: 500;
      padding: 1px 3px 0 1px;
      margin-bottom: 0;
      margin-right: 5px;
      font-size: 0.8rem;
    }
  }
`;

const StyledDescription = styled.p`
  margin: 0.5rem 0;
  font-size: 0.8rem;
  line-height: 1.7;
`;

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
    <StyledProject>
      <StyledProjectLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="project url or gitHub repo"
      >
        link
      </StyledProjectLink>
      <StyledImageContainer>
        <StyledImage src={image.fields.file.url} alt={image.fields.title} />
      </StyledImageContainer>
      <StyledContentContainer>
        <StyledTitle as="h3">{title}</StyledTitle>
        <StyledMetaText>
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
        </StyledMetaText>
        <StyledDescription>{description}</StyledDescription>
      </StyledContentContainer>
    </StyledProject>
  );
};

export default SingleProject;
