import {create} from 'zustand';
import { Course } from '../types/types';


// Define the shape of your store's state
interface CourseStore {
  courses: Course[];
  setCourses:(courses:Course[])=>void;
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
}

// Create the Zustand store
const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  setCourses: (courses: Course[]) => set({ courses: courses }),
  selectedCourse: null,
  setSelectedCourse: (course: Course | null) => set({ selectedCourse: course }),
}));

export default useCourseStore;
