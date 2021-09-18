# GitPress

Fork me to start using [GitPress](https://gitpress.io)

Posts are placed in `/source` folder, so fill the directory with `/source`

## Deno deploy tutorial-faunadb

https://deno.com/deploy/docs/tutorial-faunadb

## Deploy

```bash
$ deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts
```

```
$ FAUNA_SECRET=<secret> deployctl run --watch --libs=ns,fetchevent ./quotes.ts
```

if fail it, add `--no-check` option.
