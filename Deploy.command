cd /PP-Website/namswan
node resize-primary-images.js
node create-homepage-images.js
rm -rf _site
git add -A
git commit -m "Added a blog"
git push origin master
exit