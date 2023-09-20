import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUserProfile: builder.mutation({
            query: (avatar) => ({
                url: "update-profile",
                method: "PUT",
                body: {avatar},
                credentials: "include"
            })
        }),
        editProfile: builder.mutation({
            query: ({name}) => ({
                url: "update-user",
                method: "PUT",
                body:{
                    name,
                },
                credentials: "include"
            })
        }),
    })
})

export const {useUpdateUserProfileMutation, useEditProfileMutation} = userApi