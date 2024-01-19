import { createSlice } from "@reduxjs/toolkit";

const MyCourse = createSlice({
    name: "Course",
    initialState: {
        course: [],
    },
    reducers: {
        addcourse: (state, action) => {
            const existingItem = state.course.find(
                (item) => item.id === action.payload.id
            );
            // if (existingItem) {

            //     existingItem.quantity += 1;
            //     existingItem.total = existingItem.price * existingItem.quantity;
            // } else {

            //     state.course.push({
            //         ...action.payload,
            //     });
            // }
        },

    },
});
export default MyCourse.reducer;
export const { addcourse} =MyCourse.actions;

    // export const { addtoCart, RemoveItem, IncreaseQuantity, DecreaseQuantity, clearCart } =
    // MyCourse.actions;    