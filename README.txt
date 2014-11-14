Either use Koala or run the Gulpfile to compile the SASS and JS into the build folders. 

Gulp is better than koala and easier to manage.

gulp tutorial http://www.youtube.com/watch?v=7eoaqbEZ7G0

The Gulpfile requires you to have node installed and gulp, then run 'gulp install' in the folder which creates a node_modules folder which is all the stuff gulp uses to minify concaat etc... Then when all the modules are done downloaing run 'gulp' and it will start watching your files.

The form doesn't exist because elements don't exist locally. The element code is there in index.html though.

The social icons don't work because they're referencing font awesome which is on socialsite, im not linking to it locally because it would be annoying to delete the link everytime you upload to socialsite.