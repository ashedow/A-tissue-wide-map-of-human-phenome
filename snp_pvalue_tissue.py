import os
import argparse


def walker(path, snp, output):
    with open(path) as filelines:
        file = path.split('/')[-1]
        file_num = file.split('_')[0]
        print('file', file)
        for line in filelines:
            first_elem = '_'.join(line.strip().split('\t')[0].split('_')[0:2])
            with open(snp+file_num+'_.txt') as snips:
                for snip_line in snips:
                    if int(snip_line.split('_')[1]) > int(line.strip().split('\t')[0].split('_')[1]):
                        break
                    if first_elem == snip_line.strip():
                        print('found a match')
                        with open(output+file, 'a') as hugefile_snips:
                            hugefile_snips.write(first_elem + ' ' + ' '.join(['1' if i != 'NA' and float(i) >= 5*10^(-8) else '0' for i in line.split('\t')[16:65]]) + '\n')

def main():
    parser = argparse.ArgumentParser(description='Walk some SNPs.')
    parser.add_argument('-p', '--path', type=str, required=True,
                        help='path to huge .txt with snp_id and expression data for each tissue file')
    parser.add_argument('-s', '--snp', type=str, required=True,
                        help='path to dir with snp_ids to search')
    parser.add_argument('-o', '--output', type=str, required=True,
                        help='path to output directory')
    args = parser.parse_args()
    walker(args.path, args.snp, args.output)


if __name__ == '__main__':
    main()                

