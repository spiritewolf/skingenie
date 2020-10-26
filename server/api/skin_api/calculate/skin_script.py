import json
import re
import math
import numpy as np
import pandas as pd
import operator
from math import e
from nltk.corpus import stopwords
from collections import Counter
import os

from ..serializers import ResultSerializer
from ..models import Skincare

def cosine_similarity_of(text1, text2):
        #get words first
        first = re.compile(r"[\w']+").findall(text1)
        second = re.compile(r"[\w']+").findall(text2)

        vector1 = Counter(first)
        vector2 = Counter(second)

        common = set(vector1.keys()).intersection(set(vector2.keys()))
        dot_product = 0.0

        for i in common:
            dot_product += vector1[i] * vector2[i]

        squared_sum_vector1 = 0.0
        squared_sum_vector2 = 0.0

        for i in vector1.keys():
            squared_sum_vector1 += vector1[i]**2

        for i in vector2.keys():
            squared_sum_vector2 += vector2[i]**2

        magnitude = math.sqrt(squared_sum_vector1) * math.sqrt(squared_sum_vector2)

        if not magnitude:
           return 0.0
        else:
           num = dot_product/magnitude
           num = int(num * 100)
           return num


def get_recommendations(keywords):
    #get data from csv file
    df = pd.read_csv('skin_api/calculate/data.csv')
    categories = ['cleanser', 'serum', 'moisturizer', 'sunscreen']

    score_dict = {}
    #get similarity scores
    for index, row in df.iterrows():
        score_dict[index] = cosine_similarity_of(row['goals'], keywords)
    sorted_scores = sorted(score_dict.items(), key=operator.itemgetter(1), reverse=True)

    counter = 0
    tempDF = pd.DataFrame(columns=('category', 'name', 'details', 'score'))
    #pair scores
    for i in sorted_scores:
        if i[1] <= 30:
            continue
        else:
            tempDF = tempDF.append({'category': df.iloc[i[0]]['category'], 'name': df.iloc[i[0]]['name'], 'details': df.iloc[i[0]]['details'], 'score': i[1]}, sort=True,ignore_index=True)
        counter += 1
        if counter>15:
            break
    #get the product with the highest score from each category
    tempDF = tempDF.sort_values('score', ascending=False)
    result = pd.DataFrame(columns=('category', 'name', 'details'))
    for c in categories:
        b = tempDF[tempDF.category == c].sort_values('score', ascending=False).head()
        result = result.append({'category': c, 'name': b['name'].iloc[0], 'details': b['details'].iloc[0]}, ignore_index=True)

    #convert to json
    json_result = json.dumps(result.to_dict('records'))
    return json_result

def get_results(json_string):
    list = json.loads(json_string)
    result = []
    max = len(list)
    i = 0
    while i < max:
        result.append({list[i]['category'], list[i]['name'], list[i]['details']})
        i += 1
    result = ' '.join(map(str, result))
    return result

def start(keywords):
    words = get_recommendations(keywords)
    final_result = get_results(words)
    return {'result': final_result}
