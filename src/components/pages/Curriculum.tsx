import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import CurriculumSection from "../CurriculumSection";
import { ICurriculumItem } from "../../interfaces";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const [workItems, setWorkItems] = useState<ICurriculumItem[] | null>(null);
  const [schoolItems, setSchoolItems] = useState<ICurriculumItem[] | null>(
    null
  );
  const [loadingWorkItems, setLoadingWorkItems] = useState(false);
  const [loadingSchoolItems, setLoadingSchoolItems] = useState(false);

  const getWorkItems = () => {
    client
      .getEntries({
        content_type: "workItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setWorkItems(response.items as any);
        setLoadingWorkItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  const getSchoolItems = () => {
    client
      .getEntries({
        content_type: "schoolItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setSchoolItems(response.items as any);
        setLoadingSchoolItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get Items from contentful
  useEffect(() => {
    setLoadingWorkItems(true);
    getWorkItems();
    setLoadingSchoolItems(true);
    getSchoolItems();
  }, []);

  return (
    <main className="curriculum">
      <HeaderPages heading="Curriculum" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* Work Experience */}
            <div className="bg_wrapper">
              <div className="wrapper">
                <h2>Work Experience</h2>
                <section className="curriculum_items">
                  {loadingWorkItems && <p className="loading">...Loading</p>}
                  {workItems &&
                    workItems.map((entry) => {
                      return (
                        <CurriculumSection entry={entry} key={entry.sys.id} />
                      );
                    })}
                </section>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            {/* education */}
            <div className="bg_wrapper">
              <div className="wrapper">
                <h2>Education</h2>

                <section className="curriculum_items">
                  {loadingSchoolItems && <p className="loading">...Loading</p>}
                  {schoolItems &&
                    schoolItems.map((entry) => {
                      return (
                        <CurriculumSection entry={entry} key={entry.sys.id} />
                      );
                    })}
                </section>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/curriculum_dev.pdf"
          className="cv_link"
          target="_blank"
          download
        >
          Download Curriculum.pdf
        </Link>
      </div>
    </main>
  );
};
export default Curriculum;
