import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "./course.service.js";

export const create = async (req, res) => {
  try {
    const course = await createCourse(req.body);

    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  const courses = await getCourses();

  res.json({
    success: true,
    data: courses,
  });
};

export const getOne = async (req, res) => {
  const course = await getCourseById(req.params.id);

  res.json({
    success: true,
    data: course,
  });
};

export const update = async (req, res) => {
  const course = await updateCourse(req.params.id, req.body);

  res.json({
    success: true,
    data: course,
  });
};

export const remove = async (req, res) => {
  await deleteCourse(req.params.id);

  res.json({
    success: true,
    message: "Course deleted",
  });
};
