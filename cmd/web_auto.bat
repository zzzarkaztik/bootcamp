echo off
cd
title "Windows Setup"
echo "Setting up web server directories..."
md webpage
cd webpage
type NUL > about.html
type NUL > shop.html
md CSS
cd CSS
type NUL > design.css
cd ..
md js
cd js
type NUL > slideshow.js
type NUL > gallery.js
cd ..
echo ^<h1^>Batch run successful!^</h1^> > index.html
start index.html
echo "Checking internet connection..."
ping google.com 
ipconfig > network.txt
echo "Saving network info..."
echo "Done!"
date /t >> run_instances.txt
pause