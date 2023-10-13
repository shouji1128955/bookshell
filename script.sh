set -e

if [ -d "git.bak" ]; then
    rm -rf git.bak
else
    echo "The git.bak  does not exist."
fi

cp -r .git  git.bak

git add .
git commit -m "$1"
git push