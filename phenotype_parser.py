
import gzip
import os
import pandas as pd
import numpy as np
from scipy.stats import kstest


def file_parsing(data):
    control_df = pd.read_csv(phenotype, sep='\t')
    location = list(map(lambda x: int(x.split(':')[1]), control_df['variant']))
    Chr = list(map(lambda x: x.split(':')[0], control_df['variant']))
    control_df['Chr'] = pd.Series(Chr, index=control_df.index)
    control_df['Location'] = pd.Series(location, index=control_df.index)
    return(control_df)

# Load parsed annotation file
with open('/home/nk/Desktop/BioHack/annotation/annotation.csv', 'r') as ann:
    annotation = pd.read_csv(ann, sep='\t')
    
# Подход номер один
# Жетский брутфорс

# table_result = dict()

# for filename in os.listdir(os.getcwd()):
# 	if filename.endswith(".gz"):
# 		# Parse df
# 		phe_name = filename.split('.')[0]
# 		phenotype = gzip.open(filename,'rb')
# 		phenotype_df = file_parsing(phenotype)
# 		# Stat-analysis
# 		for index, row in annotation.iterrows():
# 			gene_p = {row['Gene_name']:list()}
# 			for index_1, row_1 in phenotype_df.iterrows():
# 				if row['Chr'] == row_1['Chr']:
# 					if row['Start'] < int(row_1['Location']) < row['End']:
# 						if  np.isnan(row_1['pval']) == False:
# 							gene_p[row['Gene_name']].append(row_1['pval'])
# 							print(row_1['pval'])
# 					else:
# 						continue

# 				if len(gene_p[row['Gene_name']]) != 0:
# 					table_result[row['Gene_name']] = [kstest(gene_p[row['Gene_name']], "uniform", N=len(gene_p[row['Gene_name']]))[0], kstest(gene_p[row['Gene_name']], "uniform", N=len(gene_p[row['Gene_name']]))[1], min(gene_p[row['Gene_name']])]
# 		else:
# 			continue


# result = pd.DataFrame.from_dict(table_result, orient='index')
# result.to_csv('{}.csv'.format(phe_name),
# 					  header=True,
#                       index=False,
#                       sep='\t'
#                       )

# Подход номер два

table_result = dict()

for filename in os.listdir(os.getcwd()):
	if filename.endswith(".bgz"):
        # Parse df
		phe_name = filename.split('.')[0]
		print(phe_name)
		phenotype = gzip.open(filename, 'rb')
		phenotype_df = file_parsing(phenotype)
        # Stat-analysis
		gene_p = list()
		for index_1, row_1 in phenotype_df.iterrows():
			new_annotation = annotation[annotation.End > row_1['Location']][annotation.Start < row_1['Location']]
			for index, row in new_annotation.iterrows():
				name = row['Gene_name']
				if row['Start'] < int(row_1['Location']) < row['End']:
					if row['Chr'] == row_1['Chr']:
						if np.isnan(row_1['pval']) == False:
							gene_p.append(row_1['pval'])
					else:
						continue
				if len(gene_p) != 0:
					table_result[name] = [kstest(gene_p, "uniform", N=len(gene_p))[0], kstest(
								gene_p, "uniform", N=len(gene_p))[1], min(gene_p)]
					gene_p = list()
	else:
		continue

# Dict to Dataframe and csv 
result = pd.DataFrame.from_dict(table_result, orient='index', columns=['KS_coef', 'p-value', 'min_p_value'])
result.to_csv('{}.tsv'.format(phe_name), sep='\t', header=True, index=True, encoding='utf_8_sig')
