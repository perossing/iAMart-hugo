import React from "react";
import format from "date-fns/format";

export default class PagePreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div class="page-content">
    <h1>{ entry.getIn(["data", "title"])}</h1>
    <div>{ widgetFor("content") }</div>
  </div>   
  }
}