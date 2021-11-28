import { ProfileState } from "../redux/types";

const API_URL = "http://localhost:3001/api/v1";

type Token = {
  token?: string;
  error?: string;
};

// Authenticate user for token
const authenticateUser = async (
  email: string,
  password: string
): Promise<Token> => {
  const response = await fetch(API_URL + "/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const { status, message, body } = await response.json();

  if (status === 200) return { token: body.token };

  return { error: message };
};

// Get user info
const getUserProfile = async (token: string): Promise<ProfileState> => {
  const response = await fetch(API_URL + "/user/profile", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const { status, message, body } = await response.json();

  if (status === 200) return { ...body };

  return null;
};

// Update user info
const updateUserProfile = async (
  token: string,
  firstName: string,
  lastName: string
): Promise<ProfileState> => {
  const response = await fetch(API_URL + "/user/profile", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  const { status, message, body } = await response.json();

  if (status === 200) return { ...body };

  return null;
};

export default { authenticateUser, getUserProfile, updateUserProfile };
