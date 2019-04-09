import React from "react";

import { storiesOf } from "@storybook/react";
import Map from '../src/Map.jsx';

storiesOf("Map", module)
  .add("Client IP", () => <Map />)
  .add("Specific IP", () => <Map ip='1.1.1.1' />)
  .add("Specific size", () => <Map ip='8.8.8.8' width='400' height='400' />);
  