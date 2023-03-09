from shutil import copy, copytree, rmtree
from os import listdir, remove
from os.path import isfile

ignored = {
    '.git',
    '.gitignore',
    'CNAME',
    'dist',
    'node_modules',
    'update.py'
}

folders = []
for item in listdir('.'):
    if item not in ignored:
        if isfile(item):
            remove(item)
        else:
            folders.append(item)

for folder in folders:
    rmtree(folder)

for item in listdir('dist'):
    loc = f'dist/{item}'
    if isfile(loc):
        copy(loc, '.')
    else:
        copytree(loc, item)