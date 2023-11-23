SCRIPT_DIR="$(dirname "$0")"
cd "$SCRIPT_DIR"

echo "Setting up web server directories..."
mkdir -p ./webpage
cd ./webpage
touch about.html
touch shop.html

mkdir -p CSS
cd CSS
touch design.css
cd ..

mkdir -p js
cd js
touch slideshow.js
touch gallery.js
cd ..

echo '<h1>Batch run successful!</h1>' > index.html

open index.html

echo "Checking internet connection..."
ping -c 4 google.com 

ifconfig > network.txt

echo "Saving network info..."
echo "Done!"

date >> run_instances.txt

read -p "Press enter to continue..."