import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import courseRoutes from "./modules/course/course.routes.js";
import enrollmentRoutes from "./modules/enrollment/enrollment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-Learning API Running 🚀",
  });
});

export default app;
