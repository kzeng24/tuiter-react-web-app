import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service.js";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile",
    async () => {
        return await authService.profile();
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async () => {
        return await authService.logout();
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        return await authService.updateUser(user);
    }
);

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (credentials) => {
    return await authService.register(credentials);
  }
);