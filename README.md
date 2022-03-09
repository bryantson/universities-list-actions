# Search for universities and colleges in a country

This fun and useful GitHub Actions plugin lets you search for colleges and universities in a country. Thank you Hipolabs for providing free API endpoint: `http://universities.hipolabs.com/search?country=`

### How to run?

This Actions only take one single input value `country`, which can be a word separate a single space (e.g. United States). Below shows an example of a GitHub Actions pipeline file named `main.yml` that can be put under `.github/workflows` folder to execute.

```yaml
name: Test custom GitHub Action

on:
  workflow_dispatch:
    inputs:
      country:
        description: Please type in name of country.
        required: true
        default: 'United States'

jobs:
  university_search_job:
    runs-on: ubuntu-latest
    name: A job to search by university
    steps:
      - name: Checkout
        uses: bryantson/universities-list-actions@v1.1
        
      - name: University search
        uses: ./
        id: test
        with:
          country: ${{ github.event.inputs.country }}
```

### What output looks like?

Everything gets printed inside a GitHub log. You can find university/college names sorted alphabetically in ascending order and their associated website links. A screenshot below shows a sample output.

![Sample output](./images/sample_output.jpg)

### How to contribute?

As this is a simple GitHub Actions based on a public API, feel free to fork and to modify based on MIT license :)

### License

[MIT]((https://tldrlegal.com/license/mit-license)) @ [bryantson](https://github.com/bryantson)