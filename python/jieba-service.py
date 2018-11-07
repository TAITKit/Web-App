#!/usr/bin/env python3
import jieba
import sys
import json
inputs = sys.argv[1]
outputs = sys.argv[2]
print(sys.argv)
s = json.load(open(inputs))
print(s)
s = s['inputs']
with open(outputs, 'w') as f:
    s = ' '.join(list(jieba.cut(s['text']))) + s['suffix']
    f.write(json.dumps({ 'text': s }))