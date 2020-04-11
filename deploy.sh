#!bin/bash
export JEKYLL_ENV=""
rm -rf _site
echo What changes have you made since last time?
read comment
git add -A
git commit -m "$comment"
git push origin master