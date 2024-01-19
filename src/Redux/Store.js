import { configureStore } from "@reduxjs/toolkit";
import MyCourse from "./Slice"
export default configureStore({
  reducer  : {
    Course: MyCourse,
  },
});