import { Enrollment } from "./enrollment.model.js";

export const createEnrollment = async (data) => {
  const existing = await Enrollment.findOne({
    user: data.user,
    course: data.course,
  });

  if (existing) {
    throw new Error("Already enrolled in this course");
  }

  return Enrollment.create(data);
};

export const getUserEnrollments = (userId) => {
  return Enrollment.find({
    user: userId,
  }).populate("course");
};

export const updateProgress = (enrollmentId, progress) => {
  return Enrollment.findByIdAndUpdate(
    enrollmentId,
    { progress },
    { new: true },
  );
};
