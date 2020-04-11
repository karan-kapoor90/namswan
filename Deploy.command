cd /PP-Website/namswan
node resize.js
rm -rf _site
git add -A
git commit -m "Added a blog"
git push origin master
exit