import React from "react";
import CMS from "netlify-cms";

// import PagePreview from "./cms-preview-templates/pagePreview";
// import ProductsPreview from "./cms-preview-templates/products";


CMS.registerPreviewStyle("/css/styles.css");
CMS.registerPreviewTemplate("pages", PagePreview);
// CMS.registerPreviewTemplate("products", ProductsPreview);



