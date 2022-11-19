interface IProps {
  heading: string;
  subHeading?: string;
}
const HeaderPages = ({ heading, subHeading }: IProps) => {
  return (
    <header className="header_pages">
      <div className="container">
        <h1 className="heading cursive">{heading}</h1>
        <p className="sub_heading">{subHeading}</p>
      </div>
    </header>
  );
};
export default HeaderPages;
