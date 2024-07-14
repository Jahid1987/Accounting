export default function manifest() {
  return {
    name: "Car Doctor",
    short_name: "Car Doctor",
    description: "Car Doctor",
    start_url: "/",
    display: "standalone",
    background_color: "#ccc",
    theme_color: "#ccc",
    icons: [
      {
        src: "/fav.ico",
        sizes: "any",
        type: "image/x",
      },
    ],
  };
}
