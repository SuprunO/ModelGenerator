//Photo Expression
{{ JSON.parse($node["Download Image1"].json["data"]["resultJson"]).resultUrls[0] }}


//Caption
{{ $json["choices"][0]["message"]["content"] }}