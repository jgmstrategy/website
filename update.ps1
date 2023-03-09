Remove-Item .\* -Recurse -Exclude CNAME,.gitignore,dist,node_modules,.git,update.ps1
Copy-Item dist\* -Destination . -Recurse