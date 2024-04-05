
# Edward Reed's Portfolio

Welcome to Edward Reed's Portfolio! This project showcases the work and projects
of Edward Reed, an Experienced Full-Stack Engineer, Tech Enthusiast, and Social
Advocate.

## Overview

This portfolio is built using Jekyll, a static site generator, to showcase
Edward Reed's projects and accomplishments.

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

 - Ruby
 - Bundler (for Ruby gem management)

### Installation

1. Clone this repository to your local machine:

```bash
    git clone https://github.com/your-username/edward-reed-portfolio.git
```

2. Navigate to the project directory:

```bash
    cd edward-reed-portfolio
```

3. Install dependencies:

```bash
    bundle install
```

### Running Locally

To run the project locally, use the following
command:

```bash
    bundle exec jekyll serve
```

This will start a local server, and you can view the portfolio in your web
browser by navigating to [http://localhost:4000](http://localhost:4000).

### Deploying Changes

Before deploying any changes to the portfolio, ensure you have committed and
pushed your changes to your Git repository. Then, you can use the following Rake
task to deploy:

```bash
bundle exec rake jekyll:deploy
```

This task will modify the URLs in the project, commit the changes with the
message "Built assets for deployment," and push them to the `git-pages` branch.




