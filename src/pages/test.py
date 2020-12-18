"""import os

# traverse root directory, and list directories as dirs and files as files
for root, dirs, files in os.walk("."):
    path = root.split(os.sep)
    # print((len(path) - 1) * '---', os.path.basename(root))
    for file in files:
        input_file = "/".join(path) + "/" + file
        #input file
        fin = open(input_file, "+")
        #output file to write the result to
        # fout = open("out.txt", "wt")
        #for each line in the input file
        for line in fin:
            #read replace the string and write to output file
            fout.write(line.replace('pyton', 'python'))
        #close input and output files
        fin.close()
        fout.close()
"""
import os
fin = open("text.txt", "+")
# os.remove("text.txt")
for line in fin:
    fin.write(line.replace("existem", "existe"))