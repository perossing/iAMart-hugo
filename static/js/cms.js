import React from "react";
import CMS from "netlify-cms";

import PagePreview from "./cms-preview-templates/pagePreview";

CMS.registerPreviewStyle("/css/cms-preview.css");
CMS.registerPreviewTemplate("pages", PagePreview);




