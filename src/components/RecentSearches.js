import React from 'react';

function RecentSearches(props) {
  const { searches } = props;
  return (
    <div>
      Recent Searches:
      {searches.map((search, idx) => {
        return (
          <p key={idx}>{search}</p>
        )
      })}
    </div>
  );
}

export default RecentSearches;
