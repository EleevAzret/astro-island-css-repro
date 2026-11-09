import type { ParentComponent } from "solid-js";

import "./Card.css";

export const Card: ParentComponent = (props) => <div class="shared-card">{props.children}</div>;
