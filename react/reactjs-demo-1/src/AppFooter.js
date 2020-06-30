import React from "react";
import "./AppFooter.css";
// export default function AppFooter(props) {
//   console.log(props);
//   // console.log(this.props); does not work because we are in a function and not a class
//   return (
//     <div>
//       <p className="app-footer">
//         &copy; {props.year} All rights reserved by{" "}
//         <a href={props.website}>{props.company}</a>
//       </p>
//     </div>
//   );
// }

export default function AppFooter({ year, website, company }) {
  return (
    <div>
      <p className="app-footer">
        &copy; {year} All rights reserved by
        <a href={website}>{company}</a>
      </p>
    </div>
  );
}
