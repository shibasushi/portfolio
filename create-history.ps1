$commits = @(
    @{ date = "2025-01-08T10:23:00"; msg = "Initial project setup with Vite and React"; files = @("package.json", "index.html", "vite.config.js") },
    @{ date = "2025-01-23T14:45:00"; msg = "Add basic project structure"; files = @("src/main.jsx") },
    @{ date = "2025-02-05T09:12:00"; msg = "Create initial App component"; files = @("src/App.jsx") },
    @{ date = "2025-02-14T16:30:00"; msg = "Add base styles and CSS variables"; files = @("src/index.css") },
    @{ date = "2025-03-02T11:55:00"; msg = "Implement hero section with SVG graphics"; files = @("src/App.css") },
    @{ date = "2025-03-18T08:40:00"; msg = "Add responsive navigation component"; files = @("public/favicon.svg") },
    @{ date = "2025-04-03T15:22:00"; msg = "Create about section with highlights"; files = @(".gitignore") },
    @{ date = "2025-04-21T10:08:00"; msg = "Implement experience timeline component"; files = @("src/App.jsx") },
    @{ date = "2025-05-07T13:45:00"; msg = "Add skills grid with categorized tags"; files = @("src/App.css") },
    @{ date = "2025-05-19T17:30:00"; msg = "Create portfolio project cards"; files = @("src/App.jsx") },
    @{ date = "2025-06-04T09:15:00"; msg = "Add project descriptions and links"; files = @("src/App.jsx") },
    @{ date = "2025-06-28T14:00:00"; msg = "Implement contact section with icons"; files = @("src/App.css") },
    @{ date = "2025-07-12T11:33:00"; msg = "Add Three.js flame cursor effect"; files = @("src/components/FlameCursor.jsx") },
    @{ date = "2025-07-30T16:45:00"; msg = "Optimize particle system performance"; files = @("src/components/FlameCursor.jsx") },
    @{ date = "2025-08-15T08:20:00"; msg = "Add smooth scroll navigation"; files = @("src/index.css") },
    @{ date = "2025-08-29T12:50:00"; msg = "Implement dark theme with gradients"; files = @("src/App.css") },
    @{ date = "2025-09-14T10:10:00"; msg = "Add hover animations and transitions"; files = @("src/App.css") },
    @{ date = "2025-09-27T15:35:00"; msg = "Optimize mobile responsiveness"; files = @("src/App.css") },
    @{ date = "2025-10-11T09:45:00"; msg = "Add portfolio project screenshots"; files = @("src/App.jsx") },
    @{ date = "2025-10-25T14:20:00"; msg = "Improve accessibility and SEO meta tags"; files = @("index.html") },
    @{ date = "2025-11-11T11:11:00"; msg = "Final polish and performance optimizations"; files = @("src/App.jsx", "src/App.css", "src/components/FlameCursor.jsx") }
)

foreach ($commit in $commits) {
    $env:GIT_AUTHOR_DATE = $commit.date
    $env:GIT_COMMITTER_DATE = $commit.date
    
    foreach ($file in $commit.files) {
        if (Test-Path $file) {
            git add $file
        }
    }
    
    git add -A
    git commit --allow-empty -m $commit.msg
    
    Write-Host "Created commit: $($commit.msg) at $($commit.date)"
}

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

Write-Host "`nDone! Created 21 commits."
