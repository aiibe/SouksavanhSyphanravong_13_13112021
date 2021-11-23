const API_URL = "http://localhost:3001/api/v1";

type Token = {
  token?: string;
  error?: string;
};

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

const getUserProfile = async (token: string): Promise<any> => {
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
};

export default { authenticateUser, getUserProfile };
