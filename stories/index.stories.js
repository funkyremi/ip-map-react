import React from "react";

import { storiesOf } from "@storybook/react";
import Map from '../src/Map.jsx';

storiesOf("Map", module)
  .add("with ip", () => <Map ip='1.1.1.1' />)
  .add("without ip", () => <Map />)
  .add("different size", () => <Map ip='8.8.8.8' width='400' height='400' />);
