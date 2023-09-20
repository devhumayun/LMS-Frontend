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
        changePassword: builder.mutation({
            query: ({oldPassword, newPassword}) => ({
                url: "update-password",
                method: "PUT",
                body:{
                    oldPassword,
                    newPassword,
                },
                credentials: "include"
            })
        }),
    })
})

export const {useUpdateUserProfileMutation, useEditProfileMutation, useChangePasswordMutation} = userApi