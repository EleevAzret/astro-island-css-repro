import { type Component, Show, createSignal, onMount } from "solid-js";

import { Card } from "../shared/Card";

import "./IslandA.css";

export const IslandA = () => {
  const [Lazy, setLazy] = createSignal<Component>();
  // Any lazy import is enough: Vite preloads the CSS of every chunk the lazy chunk depends on, shared chunk included
  onMount(() => import("./LazyPanel").then((module) => setLazy(() => module.LazyPanel)));

  return (
    <Card>
      <p class="island-a">Island A</p>
      <Show when={Lazy()}>{(LazyPanel) => LazyPanel()({})}</Show>
    </Card>
  );
};
