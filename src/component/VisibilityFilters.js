import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../reduxstore/actions";
import { VISIBILITY_FILTERS } from "../action";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters" style={{padding:20}}>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            style={{border:"1px solid #ffe484",paddingLeft:15,paddingTop:5,paddingBottom:10,paddingRight:15,background:"#000",color:"#ffe484",borderRadius:5}}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {"  "+currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
