cd /PP-Website/namswan
brew list node || brew install node
npm list sharp || npm install sharp
node resize.js
rm -rf _site
git add -A
git commit -m "Added a blog"
git push origin master
exit