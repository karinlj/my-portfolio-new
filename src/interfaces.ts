export interface IFilter {
  id: number;
  name: string;
  isChecked: boolean | undefined;
}

export interface IHome {
  fields: {
    preamble: string;
    title: string;
    description: string;
  };
}
export interface IAbout {
  fields: {
    title: string;
    aboutContent: any;
    link: string;
  };
}

// export interface IAbout {
//   fields: {
//     preamble: string;
//     heading: string;
//     text: string;
//     aboutContent: any;
//   };
// }

export interface ISkillIcon {
  icon: string;
  text: string;
}
export interface ISkillItem {
  fields: {
    title: string;
    skills: ISkillIcon[];
  };
  sys: {
    id: number;
  };
}

export interface IWorkingWays {
  fields: {
    title: string;
    icon: string;
    list: string[];
  };
  sys: {
    id: number;
  };
}

export interface ISkillColumn {
  fields: {
    icon: string;
    title: string;
    content: any;
  };
  sys: {
    id: number;
  };
}

export interface IProject {
  fields: {
    title: string;
    link: string;
    image: {
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    };
    releaseDate: string;
    techniques: string[];
    description: string;
    acknowledgement: string;
  };
  sys: {
    id: string;
  };
}

export interface ISubItem {
  heading: string;
  content: string;
}
export interface ICurriculumItem {
  fields: {
    title: string;
    titleLink: string;
    date: string;
    sortDate: string;
    description: string;
    siteList: string[];
    subItemList: ISubItem[];
  };
  sys: {
    id: number;
  };
}
