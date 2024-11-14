#!/bin/bash

# Array of component names
components=("Header" "Footer" "HeroSection" "MainSection" "AboutUs" "ContactUs" "TellAFriend")

# Iterate over each component and create a file with boilerplate content
for component in "${components[@]}"; do
  cat > "${component}.tsx" <<EOF
import React from 'react';

const ${component}: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      This is the ${component} Component
    </section>
  );
};

export default ${component};
EOF
  echo "${component}.tsx created."
done

echo "All components have been created."
