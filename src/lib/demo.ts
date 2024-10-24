export function demo_fetch() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
}
