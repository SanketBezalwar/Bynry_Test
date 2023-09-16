// src/components/ProfileList.js

import React from 'react';
import profiles from '../profiles';

function ProfileList() {
  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
