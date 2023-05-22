export function setToken() {
  let token = {
    start: Date.now(),
    end: Date.now() + 120000,
  };
  localStorage.setItem("currentToken", JSON.stringify(token));
}
