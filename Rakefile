require 'fileutils'

desc "Deploy Jekyll site to git-pages branch"
task :deploy do
  # Store the name of the current branch
  current_branch = `git rev-parse --abbrev-ref HEAD`.chomp

  # Check if there are any uncommitted changes
  uncommitted_changes = `git status --porcelain`.strip

  if !uncommitted_changes.empty?
    puts "There are uncommitted changes in the repository. Please commit or stash them before proceeding."
    exit 1
  end

  sh 'git checkout master'

  # Step 2: Build the Jekyll site
  sh 'jekyll build --config _config_prod.yml'

  # Step 1: Checkout to github pages prebuild branch named "git-pages-build"
  sh 'git checkout -b git-pages-build'

  root_dir = '.'
  source_dir = '_site'

  # Get a list of all files and directories in the root directory
  all_files = Dir.glob(File.join(root_dir, '*'))

  # Delete all files and directories except "_site"
  all_files.each do |file|
    next if File.basename(file) == source_dir
    if File.directory?(file)
      FileUtils.rm_rf(file)
    else
      FileUtils.rm(file)
    end
  end

  # Get a list of all files in the source directory
  files_to_move = Dir.glob(File.join(source_dir, '*'))

  # Move files from the source directory to the destination directory
  files_to_move.each do |file|
    # Calculate the destination path
    destination_path = File.join(root_dir, File.basename(file))

    # Move the file to the destination directory
    FileUtils.mv(file, destination_path)
  end


  # Step 6: Add all files, commit changes, and push to the "git-pages" branch
  sh 'git add .'
  sh 'git commit -m "Built assets for deployment"'
  sh 'git push origin git-pages --force'

  sh "git checkout #{current_branch}"
end
