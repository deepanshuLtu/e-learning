import {
  createEnrollment,
  getUserEnrollments,
  updateProgress,
} from "./enrollment.service.js";

export const enroll = async (req, res) => {
  try {
const enrollment = await createEnrollment({
  user: req.user._id,
  course: req.body.courseId,
});

    res.status(201).json({
      success: true,
      data: enrollment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyCourses = async (req, res) => {
  const enrollments = await getUserEnrollments(req.user._id);

  res.json({
    success: true,
    data: enrollments,
  });
};

export const updateMyProgress = async (req, res) => {
  const enrollment = await updateProgress(req.params.id, req.body.progress);

  res.json({
    success: true,
    data: enrollment,
  });
};
