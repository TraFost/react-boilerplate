read -p "Enter the page name: " pageName

cd ../src/presentation/pages

mkdir $pageName

cd $pageName

# Convert first letter to uppercase
capitalizedPageName="$(tr '[:lower:]' '[:upper:]' <<< ${pageName:0:1})${pageName:1}"

touch page.tsx

echo "import _React from 'react';

export default function $capitalizedPageName() {
  return (
    <div>
      <h1>$capitalizedPageName</h1>
    </div>
  );
}" > page.tsx

cd ..

echo "export { default as $capitalizedPageName } from './$pageName/page';" >> index.ts

cd ../../../

echo "Page $pageName created successfully!"