from csv import reader
from re import split
from json import dumps
filename = './in/TimeTable-2020-21-Sem-I - Time table.csv'
main_data = []

with open(filename, 'r') as data:
    rows = reader(data)
    for row in rows:
        if len(row[0]) and len(row[0])<=10 and len(row[1]) and row[0].find('X')==-1 and any(chr.isdigit() for chr in row[0]) :
            obj = {}
            obj["id"] = row[0]
            obj["name"] = row[1]
            obj["credits"] = row[6]

            if len(row[7]) and row[7]!='TBA': 
                obj["profs"] = split(', |\n',row[7])
            if len(row[15])!=0 and row[15].isspace()==0:
                lt = split(', |/ ',row[15])
                if lt[0][0] == 'm':
                    lt[0] = 'M'+lt[0][1:]
                for i in range(len(lt)):
                    lt[i] = lt[i].strip()
            
                obj["type"] = lt
            main_data.append(obj)

out = open("./out/sem1.json", "w")
out.write(dumps(main_data))