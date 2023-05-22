export function setCurrentUser(
  loginName: string | undefined,
  password: string | undefined
) {
  localStorage.setItem(
    "currentUser",
    JSON.stringify({ loginName: loginName, password: password })
  );
}
