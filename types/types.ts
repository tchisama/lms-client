export interface Course {
    id_course: string;
    title: string;
    description: string;
    id_teacher: string;
    thumbnail: string;
    sections: Section[];
  }
  
export interface Section {
    id_section: string;
    id_course: string;
    title: string;
    description: string;
    thumbnail: string;
    order: string;
    videos: Video[];
  }
  
export  interface Video {
    id_video: string;
    title: string;
    description: string;
    thumbnail: string;
    id_section: string;
    url: string;
    duration: string;
  }
  