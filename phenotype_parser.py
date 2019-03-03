
import gzip
import os
import pandas as pd
import numpy as np
from scipy.stats import kstest
import math
# Load parsed annotation file

table_result = dict()

annotation = []
with open('all_new.bed', 'r') as anb:
    for line in anb:
        annotation.append(line.strip().split('\t'))

for filename in os.listdir(os.getcwd()):
    if filename.endswith(".tsv"):
        with open(filename, 'r') as phenotype:
            try:
                next(phenotype)
                phe_name = filename.split('.')[0]
                count = 0
                gene_p_value = list()
                result_table = dict()
                new_chr = False
                for line in phenotype:
                    line = line.split('\t')
                    location = int(line[0].split(':')[1])
                    chromosome = line[0].split(':')[0]
                    SNP_p_value = float(line[-1].replace('\n', ''))
                    while chromosome != annotation[count][0]:
                        if new_chr:
                            break
                        else:
                            if len(gene_p_value) != 0:
                                table_result[annotation[count][3]] = [kstest(gene_p_value, "uniform", N=len(gene_p_value))[0], kstest(gene_p_value, "uniform", N=len(gene_p_value))[1], min(gene_p_value)]
                                print(gene_p_value)
                                gene_p_value = list()
                            else:
                                print('Met gene with 0 SNPs, proceeding...')
                                table_result[annotation[count][3]] = ['NaN', 'NaN', 'NaN']
                            count += 1
                    if location < int(annotation[count][2]) and location > int(annotation[count][1]) and chromosome == annotation[count][0]:
                        if new_chr:
                            new_chr = False
                        if math.isnan(SNP_p_value) == False:
#                            print('Met None')
                            gene_p_value.append(SNP_p_value)
                    elif chromosome == annotation[count][0]:
                        if location >= int(annotation[count][2]):
                            if len(gene_p_value) != 0:
                                table_result[annotation[count][3]] = [kstest(gene_p_value, "uniform", N=len(gene_p_value))[0], kstest(gene_p_value, "uniform", N=len(gene_p_value))[1], min(gene_p_value)]
                                print(gene_p_value)
                                gene_p_value = list()
                            else:
                                print('Met gene with 0 SNPs, proceeding...')
                                table_result[annotation[count][3]] = ['NaN', 'NaN', 'NaN']
                            if annotation[count + 1][0] != annotation[count][0]:
                                new_chr = True
                            count += 1
            except KeyError:
                print('KeyError')
    result = pd.DataFrame.from_dict(table_result, orient='index', columns=['KS_coef', 'p-value', 'min_p_value'])
    result.to_csv('{}.csv'.format(phe_name), header=True, index=True, sep='\t')
