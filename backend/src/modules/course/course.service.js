import { Course } from "./course.model.js";

export const createCourse = (data) => {
  return Course.create(data);
};

export const getCourses = () => {
  return Course.find();
};

export const getCourseById = (id) => {
  return Course.findById(id);
};

export const updateCourse = (id, data) => {
  return Course.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCourse = (id) => {
  return Course.findByIdAndDelete(id);
};
