import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import uniqueId from "lodash/uniqueId";
import { getIpData, getCurrentIp } from "./methods";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipId = uniqueId();
    this.state = {
      data: {
        mapUrl: ""
      },
      formatedData: ""
    };
    this.formatData = this.formatData.bind(this);
  }

  async componentDidMount() {
    if (this.props.ip) {
      try {
        const ipData = await getIpData(
          this.props.ip,
          this.props.width,
          this.props.height
        );
        this.setState({
          data: ipData,
          formatedData: this.formatData(ipData)
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const currentIp = await getCurrentIp();
        const ipData = await getIpData(
          currentIp.ip,
          this.props.width,
          this.props.height
        );
        this.setState({
          data: ipData,
          formatedData: this.formatData(ipData)
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  formatData(data) {
    let formatedData = "";
    for (let key in data) {
      formatedData += `${key}: ${data[key]}<br />`;
    }
    return formatedData;
  }

  render() {
    const style = {
      opacity: 1,
      backgroundImage: `url(${this.state.data.mapUrl})`,
      display: "block",
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };
    return (
      <React.Fragment>
        <div
          style={style}
          data-tip={this.state.formatedData}
          data-for={this.tooltipId}
        />
        <ReactTooltip id={this.tooltipId} type="dark" html />
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  ip: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Map.defaultProps = {
  ip: null,
  width: "600",
  height: "300"
};
