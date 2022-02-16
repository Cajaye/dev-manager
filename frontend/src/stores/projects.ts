import { writable } from "svelte/store";

export const data = writable([
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1643646736753-04809d58cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    name: "Big Stuff",
    label: "ongoing",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1644300616688-90b3f5f7792a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    name: "Small Stuff",
    label: "hosted",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1644251966508-47b1a3d2e56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    name: "Medium Stuff",
    label: "abandoned",
  },
]);
