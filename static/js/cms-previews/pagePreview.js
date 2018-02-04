import React from "react";

export default class PagePreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="page-content">
      <h1>{ entry.getIn(["data", "title"])}</h1>
      <div >{ widgetFor("body") }</div>
    </div>;
  }
}
