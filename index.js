const github = require('@actions/github');
const core = require('@actions/core');

const token = core.getInput('github-token', { required: true });
const base = core.getInput('target-branch', { required: true });
const head = core.getInput('following-branch', { required: true });

const octokit = new github.GitHub(token);
const context = github.context;

const { owner, repo } = context.repo;

octokit.merge({ owner, repo, base, head }).catch((error) => {
  core.setFailed(`Failed to merge branch: ${error}`);
});
