# Follow branch

Autometically merge branch when followed branch is pushed

```yml
name: Follow Branch
on:
  push:
    branches:
      - dev
jobs:
  run_action:
    runs-on: ubuntu-latest
    steps:
      - name: Merge Follow Branch
        uses: toysmoon/follow_branch@1.0.3
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          target-branch: master
          following-branch: dev
```
