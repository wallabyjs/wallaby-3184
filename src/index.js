addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

// Assuming you've got a build tool that removes `export`s when you actually
// deploy your worker (e.g. https://esbuild.github.io/api/#format-iife)
export async function handleRequest(request) {
  return new Response(`URL: ${request.url}`);
}