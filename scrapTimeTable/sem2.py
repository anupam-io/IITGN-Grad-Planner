from csv import reader
from re import split
from json import dumps
filename = './in/TimeTable-2020-21-Sem-II - Time table.csv'
main_data = []

with open(filename, 'r') as data:
    rows = reader(data)
    for row in list(rows):
        if len(row[0].strip()) and len(row[0])<13 and row[0].find('X')==-1 and any(chr.isdigit() for chr in row[0]):
            obj = {}
            obj["id"] = row[0]
            obj["name"] = row[1]
            obj["credits"] = row[5]

            if len(row[6]) and row[6]!='TBA': 
                if row[0] == 'HS 491-VII':
                    lst = [row[6]]
                else:
                    lst = row[6].split(', ')
                for i in range(len(lst)):
                    lst[i] = lst[i].strip()
                obj["profs"] = lst

            if len(row[-1]) and row[-1].isspace()==0:
                lst = row[-1].split(', ')
                for i in range(len(lst)):
                    lst[i] = lst[i].strip()
                obj["type"] = lst
            main_data.append(obj)

out = open("./out/sem2.json", "w")
out.write(dumps(main_data))