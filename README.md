# ir-docs
Unified Documentation for Infinite Red Open Source

{% warning %}

Edits to documentation for a particular project should be made in that project's repository!
Changes will be automatically pushed to this repository by the CI/CD process.

{% endwarning %}

## Preparing you project for `ir-docs`

To prepare your project for `ir-docs` you'll need to do the following:

1. Create a directory to hold the documentation in your project. We recommend `./docs`
2. Add documentation to that directory.
  * Use **docusaurus syntax** for your documentation
  * Only use **relative links** in your project's documentation.
  * Avoid defining slugs in your markdown files, unless absolutely necessary. (If you must use them, use your projects
    name as a prefix to avoid collisions.)
3. Add the orb to your project's `.circleci/config.yml` file and call either the build or publish job from your
   workflow.
    * You need to add a `user key` to the CircleCI project settings. (Use the CI User Account.)
           

## The Orb: `infinitered/publish-docs` 

The `infinitered/publish-docs` orb is used to build and publish documentation for Infinite Red open source projects. 

It is available in the [CircleCI Orb Registry](https://circleci.com/developer/orbs/orb/infinitered/publish-docs).


### The ir-docs Publishing Process

Imagine we have a repository that publishes docs to `ir-docs`. That repo is called `open-source-sesame`.

1. A contributor makes a change to the documentation in `open-source-sesame` and opens a PR.
2. A maintainer approves the changes merges them into `main`.
3. When it's time for a release, the maintainer creates a PR to bump the version number tags the commit `v1.2.3`
4. The CI script in `open-source-sesame` sees a tagged commit and runs using the `infinitered/publish-docs` orb.
5. The orb copies the changed documentation from `open-source-sesame` into `ir-docs` commits and pushes a new commit.
6. The CI script in `ir-docs` rebuilds the new docusaurus site with the updated docs and pushes it to the `gh-pages` branch.
7. Github publishes the changes to the web. 

### How the orb works

{%note%}

This is a high-level summary. For full, up-to-date information on the orb and its parameters check the [orb registry](https://circleci.com/developer/orbs/orb/infinitered/publish-docs).

{%endnote%}

Imagine we have a project `open-source-sesame` with the following config:

```yaml
version: '2.1'
orbs:
  publish-docs: infinitered/publish-docs@x.y.z
  
# Docker defaults
defaults: &defaults
  docker:
    - image: cimg/node:18.16.1
  working_directory: /mnt/ramdisk/repo  
  
workflows:
  publish_to_docs_site:
    jobs:
      # This job builds the docs and publishes them to the specified site
      - publish-docs/publish_docs:
          <<: *defaults
          description: >-
            An example open source project.
          git_email: your.ci@email.here
          git_username: Your CI Username
          label: Open Source Sesame
          project_name: open-source-sesame
          source_docs_dir: docs         # path from the source project root where docs are kept
          source_repo_directory: source # directory where the source repo is cloned
          target_docs_dir: docs         # path from the target project root where docs are kept
          target_repo: git@github.com:infinitered/ir-docs.git # must use SSH
          target_repo_directory: ir-docs   # directory where the target repo is cloned
          # These filters ensure this only runs on commits to the main branch that are tagged with a version
          filters:
            branches:
              only:
                - main
            tags:
              only:
                - '*v[0-9]+\.[0-9]+\.[0-9]+'
```

1. **Checkout both repos**
    - Clone the source repo into `~/source/`.
    - Clone `git@github.com:infinitered/ir-docs.git` into `~/ir-docs/`.

2. **Copy docs**
    - Verify documents exist in `~/source/docs`.
    - Copy documents from `~/source/docs` to `~/ir-docs/ir-docs/open-source-sesame`.
    - Move any content from `~/ir-docs/ir-docs/open-source-sesame/_static_` to `~/ir-docs/static/open-source-sesame`
    - Create `~/ir-docs/ir-docs/open-source-sesame/_category_.json` with information specified above.

3. **Build the docs**
    - Install dependencies in `~/ir-docs/`
    - Run Docusaurus build in `~/ir-docs/` to check for broken links etc. 

4. **Commit and push**
    - Construct a commit message from the source repo.
    - Add `ir-docs` and `static` to git.
    - Commit with the constructed message.
    - Push to the `main` branch of `git@github.com:infinitered/ir-docs.git`.


