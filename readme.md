# JqJs utility

This is a `node.js` version of `jq` utility from Linux systems.

It performs the following:

- reads lines of text from `stdin`
- parses text as `JSON`
- performs a list of simple queries on the resulting object
- concatenates the query results, delimited by a delimiter (default is `","`)
- writes the final string to `stdout`

## Syntax

```txt
jqjs [-d <delimiter>] <queries>
```

- `delimiter` - delimiter that is used for output, default is `","`
- `queries` - a list of queries, delimited by `|`, e.g. `"query1|query2"`

## Example

Consider the following input file, containing a single JSON object per line:

```json
{ "a": 12, "b": "wer" }
{ "a": 15, "b": "abc" }
{ "a": 23, "b": "xyz" }
{ "a": 55, "b": "iou" }
```

Running `jqjs` tool with the following parameters

```bash
cat input_file.txt | jqjs -d ";" "b|a|a"
```

will produce the following result:

```txt
wer;12;12
abc;15;15
xyz;23;23
iou;55;55
```
