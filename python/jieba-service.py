#!/usr/bin/env python3
import jieba
import sys
inputs = sys.argv[1]
outputs = sys.argv[2]
print(sys.argv)
s = open(inputs).read()
with open(outputs, 'w') as f:
    f.write(' '.join(list(jieba.cut(s))))
