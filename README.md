# CSP451 CheckPoint 1 - Version Control with Git and GitHub

A static web project created for CSP451 (DevOps and Cloud-Adjacent Topics) at Seneca Polytechnic. This project demonstrates the fundamentals of Git version control, GitHub repository management, and professional development workflows.

## Description

This project is a simple static website built to practice:
- Local Git repository setup and commit history
- GitHub repository creation and management
- Feature branch workflow with pull requests
- Professional Markdown documentation

**Technologies used:** HTML5, CSS3, JavaScript, Git, GitHub CLI

## Installation

### Prerequisites
- A web browser (Chrome, Firefox, Edge, or Safari)
- Git installed on your machine
- GitHub CLI (`gh`) installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AiNaikk/CSP451-CheckPoint1-Naik.git
   ```
2. Navigate into the project folder:
   ```bash
   cd CSP451-CheckPoint1-Naik
   ```
3. Open `index.html` in your browser — no server required.

## Usage

- Open `index.html` directly in any browser to view the page.
- Useful Git commands while working on this project:
  ```bash
  git status                          # see what files changed
  git log --oneline --graph --all     # view commit history
  git checkout -b feature/branch-name # create a new feature branch
  git push -u origin feature/branch-name # push branch to GitHub
  ```

## Contributing

1. Fork this repository or create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit using **Conventional Commits** format:
   ```bash
   git commit -m "feat: describe what you added"
   git commit -m "fix: describe what you fixed"
   git commit -m "docs: describe documentation changes"
   ```
3. Push your branch and open a Pull Request on GitHub.
4. Wait for review and approval before merging.

**Commit types:** `feat` `fix` `docs` `style` `refactor` `test` `chore`

## License

MIT License

Copyright (c) 2026 Abdullah Naik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
 
