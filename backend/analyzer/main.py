from tabula import read_pdf

df = read_pdf("1661016128se.pdf", pages=1, output_format="json")
# df[3].rename(columns={"Unnamed: 0": "Nº"})
tabela = df[3]["data"]
tabela_lista = []
for linha in tabela:
    linha_lista = []
    for celula in linha:
        linha_lista.append(celula["text"].lower())
    tabela_lista.append(linha_lista)
    # print(linha_lista)
# print(tabela_lista)


def make_teams(list_both_teams):
    if "relação de jogadores" in list_both_teams[0]:
        team1_name, team2_name = filter(lambda x: x != "", list_both_teams[1])
        team1_name = team1_name.split('/')[0].strip()
        team2_name = team2_name.split('/')[0].strip()

        escalacao = {team1_name: {},
                     team2_name: {}}
        players = list_both_teams[3:]
        for player in players:
            player_team1 = player[2].split("...")[0].strip()
            if player_team1 != "":
                titular = player[3]
                if player[3] == "":
                    titular = player[2].split(" ")[-1]
                escalacao[team1_name][player_team1] = titular.startswith("t")

            player_team2 = player[6].split("...")[0].strip()
            if player_team2 != "":
                titular = player[7]
                print(titular)
                if player[7] == "":
                    titular = player[6].split(" ")[-1]
                print(titular)
                escalacao[team2_name][player_team2] = titular.startswith("t")
        return escalacao
    else:
        print("wrong list")
        return


    # {
    #     Corinthians: {
    #         {Leticia Izidoro Lima: T}
    #     }
    # }

escalacao = make_teams(tabela_lista)
print(escalacao)
